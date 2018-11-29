import React, { Component } from 'react';
import {Editor, EditorState, RichUtils} from 'draft-js';

class Bold extends Component {

	onBoldClick = () => {
		this.props.onChange(RichUtils.toggleInlineStyle(this.props.editorState, 'BOLD'))
	}

	render(){
		return(
			<div>
				<button onClick={this.onBoldClick}>Bold</button>
			</div>
			)
	}
}

export default Bold;