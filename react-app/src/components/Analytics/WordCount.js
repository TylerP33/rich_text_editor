import React, { Component } from 'react';
import {RichUtils} from 'draft-js';


class WordCount extends Component {

	render(){
	var query = this.props.query
	let counter = 0;
		this.props.records.forEach(function(text){
			const replaceRubyHashRocket = /=>/g
			const searchRegex  = new RegExp('(\\b)(' + query + ')(\\b)','ig');
    		const content = JSON.parse(text.body.replace(replaceRubyHashRocket, ":")).blocks[0].text
    		if (content.match(searchRegex) !== null) {
    			counter++
    		}
    	})
 
		return(
			<div>
				<p>{counter}</p>
			</div>
			)
	}
}

export default WordCount;