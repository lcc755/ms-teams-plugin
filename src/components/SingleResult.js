import React from 'react';
import './SearchResults.css'

var HtmlToReactParser = require('html-to-react').Parser;

function SingleResult(item) {
    
  var htmlToReactParser = new HtmlToReactParser();
  
  return (
        <div>
          <div className="search_results_single"> 
            <a href={item.link} className="search_results_title" target="_blank">
            { htmlToReactParser.parse(item.htmlTitle) }
            </a>  <br/>
            <p className="search_results_snippet">{ htmlToReactParser.parse(item.htmlSnippet.replace("<br>", "")) } </p>
				  </div>
        </div>
      );
}

export default SingleResult;