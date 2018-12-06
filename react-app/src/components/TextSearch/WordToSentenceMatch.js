import React, { Component } from 'react';
import '../styles/WordToSentenceMatch.css';
import {RichUtils} from 'draft-js';
import ErrorMessage from '../TextSearch/ErrorMessage'
import { NavLink } from 'react-router-dom';


class WordToSentenceMatch extends Component {
	state = {
		sentence: ''
	}

	componentWillMount(){
		if (this.props.location.state.records.length >= 1) {
			let records = this.props.location.state.records
			let query = this.props.location.state.query
			let text = []
    		const content = JSON.parse(records[records.length - 1].body.replace(/=>/g, ":")).blocks.forEach(function(object){text.push(object.text)})
    		const matchingSentence = text.join(" ").split(/[.?!]/).filter(function(n) {
    			const regex = new RegExp(query, 'i')
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