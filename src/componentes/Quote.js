import React from 'react';


const Quote = (props) => {
   

    if(!props.quoteAuthor) {
        return(
        <React.Fragment>
            <p className="quote">{props.quoteText}</p>
            <p><i>Anonymous</i></p>
        </React.Fragment>
        )
    }

  return(
    <div>
      <p className="quote">{props.quoteText}</p>
      <p><i>{props.quoteAuthor}</i></p>
    </div>
  )
}

export default Quote;