import React, { Component } from 'react';
import './styles/TextEditorContainer.css'
import TextEditor from '../components/text_editor/TextEditor'

export default class TextEditorContainer extends Component {
	render(){
		return(
			<div id="text-editor-container-container">
				<TextEditor />
			</div>
		)
	}
}