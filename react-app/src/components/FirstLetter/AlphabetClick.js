import React, { Component } from 'react';
import '../styles/AlphabetClick.css';
import {RichUtils} from 'draft-js';
import ErrorMessage from '../TextSearch/ErrorMessage'
import { NavLink } from 'react-router-dom';


class AlphabetClick extends Component {



	render(){
	return(
			<div id="letter-container">
				<div onClick={this.onClick} class="letter">
					<span id="letter-span" class="fa fa-a"></span><br/>
				</div>

				<div class="letter">
					<span id="letter-span"  class="fa fa-b"></span><br/>
				</div>

				<div class="letter">
					<span id="letter-span" class="fa fa-c"></span><br/>
				</div>

				<div class="letter">
					<span id="letter-span" class="fa fa-d"></span><br/>
				</div>

				<div class="letter">
					<span id="letter-span" class="fa fa-e"></span><br/>
				</div>

				<div class="letter">
					<span id="letter-span" class="fa fa-f"></span><br/>
				</div>

				<div class="letter">
					<span id="letter-span" class="fa fa-g"></span><br/>
				</div>

				<div class="letter">
					<span id="letter-span" class="fa fa-h"></span><br/>
				</div>

				<div class="letter">
					<span id="letter-span" class="fa fa-i"></span><br/>
				</div>

				<div class="letter">
					<span id="letter-span" class="fa fa-j"></span><br/>
				</div>

				<div class="letter">
					<span id="letter-span" class="fa fa-k"></span><br/>
				</div>

				<div class="letter">
					<span id="letter-span" class="fa fa-l"></span><br/>
				</div>
				<div class="letter">
					<span id="letter-span" class="fa fa-m"></span><br/>
				</div>
				<div class="letter">
					<span id="letter-span" class="fa fa-n"></span><br/>
				</div>
				<div class="letter">
					<span id="letter-span" class="fa fa-o"></span><br/>
				</div>
					
				<div class="letter">
					<span id="letter-span" class="fa fa-p"></span><br/>
				</div>
					
				<div class="letter">
					<span id="letter-span" class="fa fa-q"></span><br/>
				</div>
					
				<div class="letter">
					<span id="letter-span" class="fa fa-r"></span><br/>
				</div>
					
				<div class="letter">
					<span id="letter-span" class="fa fa-s"></span><br/>
				</div>
					
				<div class="letter"> 
					<span id="letter-span" class="fa fa-t"></span><br/>
				</div>
					
				<div class="letter">
					<span id="letter-span" class="fa fa-u"></span><br/>
				</div>
					
				<div class="letter">
					<span id="letter-span" class="fa fa-v"></span><br/>
				</div>
					
				<div class="letter">
					<span id="letter-span" class="fa fa-w"></span><br/>
				</div>
					
				<div class="letter">
					<span id="letter-span" class="fa fa-x"></span><br/>
				</div>
				<div class="letter">
					<span id="letter-span" class="fa fa-y"></span><br/>
				</div>
				<div class="letter">
					<span id="letter-span" class="fa fa-z"></span><br/>
				</div>
			</div>
			)
	}
}

export default AlphabetClick;
