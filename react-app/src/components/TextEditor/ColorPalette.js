import React, { Component } from 'react';
import {RichUtils} from 'draft-js';
import '../styles/InlineStyles.css';
import 'draft-js/dist/Draft.css'

class ColorPalette extends Component {

	clickColor = (e) => {
		if (e.currentTarget.classList.contains("color-container")) {
        	this.props.onChange(RichUtils.toggleInlineStyle(this.props.editorState,  "color-rgb(26,188,156)"));
     	}
     }

	render(){	
		return(
			<div onClick={this.clickColor} className="color-container">
					<h1>click me</h1>
			</div>
		)
	}
}

export default ColorPalette;