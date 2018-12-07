import React, { Component } from 'react';
import '../styles/AlphabetClick.css';
import {RichUtils} from 'draft-js';
import ErrorMessage from '../TextSearch/ErrorMessage'
import { NavLink } from 'react-router-dom';


class AlphabetClick extends Component {
	state = {
		words: ''
	}

	componentWillMount = () => {
		console.log(this.state.words)
	}

	onClick = (e) => {
		let loopArray = []
		const currentLetter = e.currentTarget.classList[1][3]
		if (e.currentTarget.classList.contains(`fa-${currentLetter}`)) {
			const records = this.props.records
			let text = []
			const content = JSON.parse(records[records.length - 1].body.replace(/=>/g, ":")).blocks.forEach(function(object){text.push(object.text)})
			const splitWords = text.join(" ").split(" ")
			for (let i = 0; i < splitWords.length; i++){
				if (splitWords[i][0] === currentLetter) {
					loopArray.push(splitWords[i])
				}
			}
		}
		this.setState({words: loopArray.join(", ")})
	}

	render(){
	console.log(this.state.test)
	return(
			<div id="letter-container">
				<div class="letter">
					<span id="letter-span" onClick={this.onClick} class="fa fa-a"></span><br/>
				</div>

				<div class="letter">
					<span id="letter-span" onClick={this.onClick}  class="fa fa-b"></span><br/>
				</div>

				<div class="letter">
					<span id="letter-span" onClick={this.onClick}  class="fa fa-c"></span><br/>
				</div>

				<div class="letter">
					<span id="letter-span" onClick={this.onClick}  class="fa fa-d"></span><br/>
				</div>

				<div class="letter">
					<span id="letter-span" onClick={this.onClick}  class="fa fa-e"></span><br/>
				</div>

				<div class="letter">
					<span id="letter-span" onClick={this.onClick}  class="fa fa-f"></span><br/>
				</div>

				<div class="letter">
					<span id="letter-span" onClick={this.onClick}  class="fa fa-g"></span><br/>
				</div>

				<div class="letter">
					<span id="letter-span" onClick={this.onClick}  class="fa fa-h"></span><br/>
				</div>

				<div class="letter">
					<span id="letter-span" onClick={this.onClick}  class="fa fa-i"></span><br/>
				</div>

				<div class="letter">
					<span id="letter-span" onClick={this.onClick}  class="fa fa-j"></span><br/>
				</div>

				<div class="letter">
					<span id="letter-span" onClick={this.onClick}  class="fa fa-k"></span><br/>
				</div>

				<div class="letter">
					<span id="letter-span" onClick={this.onClick}  class="fa fa-l"></span><br/>
				</div>
				<div class="letter">
					<span id="letter-span" onClick={this.onClick}  class="fa fa-m"></span><br/>
				</div>
				<div class="letter">
					<span id="letter-span" onClick={this.onClick}  class="fa fa-n"></span><br/>
				</div>
				<div class="letter">
					<span id="letter-span" onClick={this.onClick}  class="fa fa-o"></span><br/>
				</div>
					
				<div class="letter">
					<span id="letter-span" onClick={this.onClick}  class="fa fa-p"></span><br/>
				</div>
					
				<div class="letter">
					<span id="letter-span" onClick={this.onClick}  class="fa fa-q"></span><br/>
				</div>
					
				<div class="letter">
					<span id="letter-span" onClick={this.onClick}  class="fa fa-r"></span><br/>
				</div>
					
				<div class="letter">
					<span id="letter-span" onClick={this.onClick}  class="fa fa-s"></span><br/>
				</div>
					
				<div class="letter"> 
					<span id="letter-span" onClick={this.onClick}  class="fa fa-t"></span><br/>
				</div>
					
				<div class="letter">
					<span id="letter-span" onClick={this.onClick}  class="fa fa-u"></span><br/>
				</div>
					
				<div class="letter">
					<span id="letter-span" onClick={this.onClick}  class="fa fa-v"></span><br/>
				</div>
					
				<div class="letter">
					<span id="letter-span" onClick={this.onClick}  class="fa fa-w"></span><br/>
				</div>
					
				<div class="letter">
					<span id="letter-span" onClick={this.onClick}  class="fa fa-x"></span><br/>
				</div>
				<div class="letter">
					<span id="letter-span" onClick={this.onClick}  class="fa fa-y"></span><br/>
				</div>
				<div class="letter">
					<span id="letter-span" onClick={this.onClick}  class="fa fa-z"></span><br/>
				</div>
			<div id="returned-words">
			<br />

				{(this.state.words) ? this.state.words : <h1 id="special-h1">Sorry, no words start with this letter!</h1> }
			</div>
			</div>
			)
	}
}

export default AlphabetClick;
