import React, {Component} from 'react';
import Quote from './componentes/Quote';
import {random} from 'lodash';
import axios from 'axios';
import './App.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      quotes : [],
      colors: ['#FF6633', '#FFB399', '#FF33FF', '#00B3E6', 
		  '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
		  '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
		  '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
		  '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
		  '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
		  '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
		  '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
		  '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
		  '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF',
      ],
      quoteText: 'There is no quote yet',
      quoteAuthor: 'Anonymous',
      color : ''
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

  myRandomFoo = () => {
    let randomNumber = random(0, this.state.quotes.length -1); 
    const {author, quote} = this.state.quotes[randomNumber];
    const {colors} = this.state;
    const color = colors[random(0, colors.length - 1)];

    this.setState({
      quoteText : quote,
      quoteAuthor: author,
      color
    })

    document.body.style.backgroundColor = color;  
  }



  render() {
    
    return (
     
      <div className="card">
        <Quote
          quoteText = {this.state.quoteText}
          quoteAuthor = {this.state.quoteAuthor}
          color = {this.state.color}
        />

        <div className="buttons">
            <a style={{backgroundColor: this.state.color}} className="button twitter" href={`https://twitter.com/intent/tweet?text=${this.state.quoteText} ${this.state.quoteAuthor}`} target='_blank' title="Post this quote on twitter!">
              <FontAwesomeIcon className="fa-twit" icon={faTwitter} > </FontAwesomeIcon>
            </a>
     
            <button style={{backgroundColor: this.state.color}} className="button"  onClick={this.myRandomFoo}>
                New Quote
            </button>
        </div>
      </div>
        
    );
  }
}


export default App;