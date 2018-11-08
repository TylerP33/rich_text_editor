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
			const contentState = editorState.getCurrentContent();
			console.log(convertToRaw(contentState))
			this.props.addDocument(JSON.stringify(convertToRaw(contentState)));
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
						placeholder="Let your story begin..."
						ref={this.setDomEditorRef}
					/>
				</div>
           	</div>
		)
	}
}