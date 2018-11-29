import React, { Component } from 'react';
import {Editor, EditorState, RichUtils} from 'draft-js';

class Italics extends Component {

	onItalicsClick = () => {
		this.props.onChange(RichUtils.toggleInlineStyle(this.props.editorState, 'ITALIC'))
	}

	render(){
		return(
			<div>
				<button onClick={this.onItalicsClick}>Italics</button>
			</div>
			)
	}
}

export default Italics;