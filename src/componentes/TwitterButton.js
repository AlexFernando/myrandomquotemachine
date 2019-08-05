import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import './TwitterButton.css';


const TwitterButton = ({quoteText, quoteAuthor, color, title}) => {
    return ( 

        <React.Fragment>
            <a style={{backgroundColor: color}} className="button twitter" href={`https://twitter.com/intent/tweet?text=${quoteText} ${quoteAuthor}`} target='_blank' rel="noopener noreferrer" title = {title}>
              <FontAwesomeIcon className="fa-twit" icon={faTwitter} > </FontAwesomeIcon>
            </a>
        </React.Fragment>
     );
}
 
export default TwitterButton;