import React, { Component } from 'react';
import '../styles/WordToSentenceMatch.css';
import {RichUtils} from 'draft-js';
import ErrorMessage from '../Analytics/ErrorMessage'


class WordToSentenceMatch extends Component {
	state = {
		sentence: ''
	}

	componentWillMount(){
		if (this.props.records.length >= 1) {
			const query = this.props.query
    		const content = JSON.parse(this.props.records[this.props.records.length - 1].body.replace(/=>/g, ":")).blocks[0].text
    		const matchingSentence = content.split(/[.?!]/).filter(function(n) {
    			const regex = new RegExp(query, 'i')
    			console.log(regex)
  				return regex.test(n)
			});
    		this.setState({sentence: matchingSentence})
    	}
	}

	render(){
	if (this.state.sentence.length === 0) {
		return <ErrorMessage />
	}
	return(
			<div id="sentence-container">
					<table>
							<tr>
								{this.state.sentence.map(function(sentence){return <td>{sentence}</td>})}
							</tr>
					</table>
			</div>
			)
	}
}

export default WordToSentenceMatch;