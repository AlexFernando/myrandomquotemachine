import React, {Component} from 'react';

import Quote from './componentes/Quote';

import quotesFile from './data/quotes.json'

import {random} from 'lodash';


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
    this.setState({
        quotes: quotesFile
      }) 
  }


  changeBackground = () => {
    const {colors} = this.state;
    const color = colors[random(0, colors.length - 1)];
    document.body.style.backgroundColor = color;
  }


  myRandomFoo = () => {
    let randomNumber = random(0, this.state.quotes.length -1); 
    const {quoteText, quoteAuthor} = this.state.quotes[randomNumber];

    this.setState({
      quoteText, 
      quoteAuthor
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

     
       <button onClick={this.myRandomFoo}>
              New Quote
        </button>


      </div>  
    );
  }
}


export default App;