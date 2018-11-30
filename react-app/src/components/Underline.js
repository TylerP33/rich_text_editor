import React, { Component } from 'react';
import {Editor, EditorState, RichUtils} from 'draft-js';
import './styles/Button.css';

class Underline extends Component {

	onUnderLineClick = () => {
		this.props.onChange(RichUtils.toggleInlineStyle(this.props.editorState, 'UNDERLINE'))
	}

	render(){
		return(
			<div onClick={this.onUnderLineClick} className="button-container">
				<i className="fa fa-underline"></i>
			</div>
			)
	}
}

export default Underline;