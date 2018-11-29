import React, { Component } from 'react';
import {Editor, EditorState, RichUtils} from 'draft-js';

class Code extends Component {

	onCodeClick = () => {
		this.props.onChange(RichUtils.toggleInlineStyle(this.props.editorState, 'CODE'))
	}

	render(){
		return(
			<div>
				<button onClick={this.onCodeClick}>Code</button>
			</div>
			)
	}
}

export default Code;