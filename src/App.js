import React, {Component} from 'react';
import Quote from './componentes/Quote';
import Button from './componentes/Button';
import {random} from 'lodash';
import axios from 'axios';
import './App.css';
import TwitterButton from './componentes/TwitterButton';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      quotes : [],
      colors: ['#FF6633', '#FF33FF', '#00B3E6', '#E6B333', 
      '#3366E6', '#999966', '#B34D4D', '#80B300', '#6666FF',
      '#809900', '#6680B3', '#66991A', '#FF1A66', '#E6331A', 
      '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
      '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399', 
      '#E666B3', '#33991A', '#B3B31A', '#4D8066', '#809980', 
      '#999933', '#FF3380', '#4D80CC', '#9900B3', '#E64D66', 
      '#4DB380', '#FF4D4D'
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

  myRandomColor = () => {
    const {colors} = this.state;
    const color = colors[random(0, colors.length - 1)];

    this.setState({
      color
    })

    document.body.style.backgroundColor = color;  
  }

  myRandomFoo = () => {
    let randomNumber = random(0, this.state.quotes.length -1); 
    const {author, quote} = this.state.quotes[randomNumber];
    
    this.setState({
      quoteText : quote,
      quoteAuthor: author
    })

    this.myRandomColor();
  }



  render() {
    
    return (
  
        
      <div className="parent">

        <div className="title">
          <h2>The Random Quote Machine</h2>
        </div>
        <div className="card">
          <Quote
            quoteText = {this.state.quoteText}
            quoteAuthor = {this.state.quoteAuthor}
            color = {this.state.color}
          />

          <div className="buttons">
              <TwitterButton color={this.state.color} quoteText={this.state.quoteText} quoteAuthor = {this.state.quoteAuthor} target='_blank' title="Post this quote on twitter!"/>
              <Button color = {this.state.color}  onClick={this.myRandomFoo} title='New Quote'/>
          </div>
        </div>

        <div className="developer">
          <span>~ By Alex Fernando</span>
        </div>
      </div>
      
    );
  }
}


export default App;