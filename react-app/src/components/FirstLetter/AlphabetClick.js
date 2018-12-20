import React, { Component } from 'react';
import '../styles/AlphabetClick.css';
import {RichUtils} from 'draft-js';
import ErrorMessage from '../TextSearch/ErrorMessage'
import { NavLink } from 'react-router-dom';
import ClickCounter from './ClickCounter'


class AlphabetClick extends Component {
	state = {
		words: [],
	}

	onClick = (e) => {
		let loopArray = []
		let text = []
		let currentLetter = e.currentTarget.classList[1][3]
		if (this.props.records.length > 0) {
		if (e.currentTarget.classList.contains(`fa-${currentLetter}`)) {
			let content = JSON.parse(this.props.records[this.props.records.length - 1].body.replace(/=>/g, ":")).blocks.forEach(function(object){text.push(object.text)})
			let splitWords = text.join(" ").split(" ")
			for (let i = 0; i < splitWords.length; i++){
				if (splitWords[i][0] === currentLetter.toUpperCase() || splitWords[i][0] === currentLetter.toLowerCase() ) {
					loopArray.push(splitWords[i])
				}
			}
		}
	} else {
		alert("Please Enter Text into the Editor!")
	}
		this.setState({words: loopArray})
	}

	render(){
	console.log(this.state.test)
	return(
			<div id="letter-container">
				<div className="letter">
					<span id="letter-span" onClick={this.onClick} className="fa fa-a"></span><br/>
				</div>

				<div className="letter">
					<span id="letter-span" onClick={this.onClick}  class="fa fa-b"></span><br/>
				</div>

				<div className="letter">
					<span id="letter-span" onClick={this.onClick}  class="fa fa-c"></span><br/>
				</div>

				<div className="letter">
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
				{(this.state.words.length >= 0) ? this.state.words.map(function(word, i){ 
					return <li key={i}><h2 id="special">{word}</h2><ClickCounter/></li>
				}) : <h1 id="special-h1">Sorry, no words start with this letter!</h1>}
			</div>
			</div>
			)
	}
}

export default AlphabetClick;


// {(this.state.words.length >= 0) ? this.state.words : <h1 id="special-h1">Sorry, no words start with this letter!</h1> }

// {(this.state.words.length >= 0) ? this.state.words.map(function(word){ return <h1 style={{color:'red'}}>{word}<button onClick={() => this.countClick()} style={{backgroundColor: 'green', height: '100px'}}>Click</button></h1>}) : <h1 id="special-h1">Sorry, no words start with this letter!</h1>}