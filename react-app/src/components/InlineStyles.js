import React, { Component } from 'react';
import {RichUtils} from 'draft-js';
import './styles/InlineStyles.css';

class InlineStyles extends Component {

	onCodeClick = (e) => {
		if (e.currentTarget.classList.contains("bold-container")) {
			this.props.onChange(RichUtils.toggleInlineStyle(this.props.editorState, 'BOLD'))
		} else if (e.currentTarget.classList.contains("italic-container")) {
			this.props.onChange(RichUtils.toggleInlineStyle(this.props.editorState, 'ITALIC'))
		} else if (e.currentTarget.classList.contains("code-container")) {
			this.props.onChange(RichUtils.toggleInlineStyle(this.props.editorState, 'CODE'))
		} else if (e.currentTarget.classList.contains("underline-container")) {
			this.props.onChange(RichUtils.toggleInlineStyle(this.props.editorState, 'UNDERLINE'))
		}
	}
	render(){
		return(
			<div className="style-container">
				<div onClick={this.onCodeClick} className="italic-container">
					<i className="fa fa-italic"></i>
				</div>
				<div onClick={this.onCodeClick} className="code-container">
					<i className="fa fa-code"></i>
				</div>
				<div onClick={this.onCodeClick} className="bold-container">
					<i className="fa fa-bold"></i>
				</div>
				<div onClick={this.onCodeClick} className="underline-container">
					<i className="fa fa-underline"></i>
				</div>
			</div>
			)
	}
}

export default InlineStyles;