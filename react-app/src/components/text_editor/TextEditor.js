import React, { Component } from 'react';
import './styles/TextEditor.css'
import {Editor, EditorState} from 'draft-js';

export default class TextEditor extends Component {
	constructor(props){
		super(props);
		this.state = {
			editorState: EditorState.createEmpty(),
		}
		this.onChange = (editorState) => this.setState({editorState});
		this.logState = () => console.log(this.state.editorState.toJS());
		this.setDomEditorRef = ref => this.domEditor = ref;
	}

	handleDataPersist = () => {
		this.props.addDocument({editorState: this.state.editorState.toJS()})
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
			 <input
                onClick={this.logState}
                type="button"
                value="Log State"
              />
           	</div>
		)
	}
}