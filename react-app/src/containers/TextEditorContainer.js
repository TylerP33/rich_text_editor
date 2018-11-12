import React, { Component } from 'react';
import './styles/TextEditorContainer.css'
import TextEditor from '../components/text_editor/TextEditor'
import FontColor from '../components/text_editor/FontColor'
import { connect } from 'react-redux'

class TextEditorContainer extends Component {
	render(){
		return(
			<div id="text-editor-container">
				<TextEditor addRecord={this.props.addRecord} />
				<FontColor editorState={this.props.editorState}  />
			</div>
		)
	}
}





const mapDispatchToProps = dispatch => ({
  addRecord: text => dispatch({ type: "ADD_RECORD", text })
})



export default connect(null, mapDispatchToProps)(TextEditorContainer)