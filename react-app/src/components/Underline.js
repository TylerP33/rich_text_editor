import React, { Component } from 'react';
import {Editor, EditorState, RichUtils} from 'draft-js';

class Underline extends Component {

	onUnderLineClick = () => {
		this.props.onChange(RichUtils.toggleInlineStyle(this.props.editorState, 'UNDERLINE'))
	}

	render(){
		return(
			<div>
				<button onClick={this.onUnderLineClick}>Underline</button>
			</div>
			)
	}
}

export default Underline;