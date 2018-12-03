import React, { Component } from 'react';
import {RichUtils} from 'draft-js';


class WordCount extends Component {
	state = {
		counter: 0
	}

	componentWillMount(){
		var query = this.props.query
		const replaceRubyHashRocket = /=>/g
		const searchRegex  = new RegExp('(\\b)(' + query + ')(\\b)','ig');
    	const content = JSON.parse(this.props.records[this.props.records.length - 1].body.replace(replaceRubyHashRocket, ":")).blocks[0].text
    	this.setState({counter: content.match(searchRegex).length})
	}

	render(){
		return(
			<div>
				<p>{this.state.counter}</p>
			</div>
			)
	}
}

export default WordCount;