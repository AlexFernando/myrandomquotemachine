import React, {Component} from 'react';
import Quote from './componentes/Quote';
import {random} from 'lodash';
import axios from 'axios';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      quotes : [],
      colors: ['#eedd82', '#f4a460', '#e0ffff', '#d3d3d3', '#bebebe', 
      '#ffe4e1', '#e6e6fa', '#e0eee0', '#99FF99', '#ffe4b5',
      '#dccdc'],
      quoteText: 'There is no quote yet',
      quoteAuthor: 'Anonymous'
      
    }
  }

  
  componentDidMount() {
    
    axios.get('https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json')
    .then(response => {
      this.setState({
        quotes: response.data
      })  
    })
    .catch(error => {
      console.log(error);
    });
  }


  changeBackground = () => {
    const {colors} = this.state;
    const color = colors[random(0, colors.length - 1)];
    document.body.style.backgroundColor = color;
  }


  myRandomFoo = () => {
    let randomNumber = random(0, this.state.quotes.length -1); 
    const {author, quote} = this.state.quotes[randomNumber];

    this.setState({
      quoteText : quote,
      quoteAuthor: author
    })
    this.changeBackground();
  }



  render() {
    
    return (
      <div className="contenedor">
        <Quote
          quoteText = {this.state.quoteText}
          quoteAuthor = {this.state.quoteAuthor}
        />

      <div id='buttons'>
          <a id='tweet-quote' href={`https://twitter.com/intent/tweet?text=${this.state.quoteText} ${this.state.quoteAuthor}`} target='_blank' title="Post this quote on twitter!">
              <FontAwesomeIcon icon={faTwitter} > </FontAwesomeIcon>
          </a>
      </div>
      <br></br>
      <br></br>
     
       <button onClick={this.myRandomFoo}>
              New Quote
        </button>


      </div>  
    );
  }
}


export default App;