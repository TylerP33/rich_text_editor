import React, { Component } from 'react';
import {RichUtils} from 'draft-js';
import '../styles/InlineStyles.css';
import 'draft-js/dist/Draft.css'


const styleColors = {
	red: {
		color: 'rgba(127, 0, 255, 1.0)',
	}
};

class ColorPalette extends Component {
	clickColor = (e) => {
		if (e.currentTarget.classList.contains("color-container")) {
        	this.props.onChange(RichUtils.toggleInlineStyle(this.props.editorState, styleColors.red));
     	}
     }

	render(){	
		return(
			<div onClick={this.clickColor} className="color-container">
			</div>
		)
	}
}

export default ColorPalette;