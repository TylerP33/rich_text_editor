import React, { Component } from 'react';
import './styles/TextEditor.css'
import {Editor, EditorState, convertToRaw} from 'draft-js';

export default class TextEditor extends Component {
	constructor(props){
		super(props);
		this.state = {
			editorState: EditorState.createEmpty(),
		}
		this.onChange = (editorState) => {
			const contentState = this.state.editorState.getCurrentContent();
			const editorStateJSONFormat = convertToRaw(contentState)
			console.log(editorStateJSONFormat)
			this.props.addRecord(editorStateJSONFormat)
			this.setState({
				editorState
			});
		}
	}

	render(){
		return(
			<div id="document-container">
				<div >
					<Editor 
						editorState={this.state.editorState} 
						onChange={this.onChange} 
						placeholder="Type Below"
						ref={this.setDomEditorRef}
					/>
				</div>
           	</div>
		)
	}
}