import React from 'react';
import './Quote.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

const Quote = (props) => {
   

    if(!props.quoteAuthor) {
        return(
        <React.Fragment>
          <div style={{color: props.color}} className="quote-text">
            <FontAwesomeIcon className="quote-left" icon={ faQuoteLeft } />
            <span className="text">{props.quoteText}</span>
            <p><i>Anonymous</i></p>
          </div>

        </React.Fragment>
        )
    }

  return(
    <div>
       <div style={{color: props.color}} className="quote-text">
            <FontAwesomeIcon className="quote-left" icon={ faQuoteLeft } />
            <span className="text">{props.quoteText}</span>   
        </div>

        <div style={{color: props.color}} className="quote-author">
          <span><i>~{props.quoteAuthor}</i></span>
        </div>
    </div>
  )
}

export default Quote;