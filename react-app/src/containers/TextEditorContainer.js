import React, { Component } from 'react';
import './styles/TextEditorContainer.css'
import TextEditor from '../components/text_editor/TextEditor'
import { connect } from 'react-redux'

class TextEditorContainer extends Component {
	render(){
		return(
			<div id="text-editor-container">
				<TextEditor addDocument={this.props.addDocument} />
			</div>
		)
	}
}

const mapDispatchToProps = dispatch => ({
  addDocument: text => dispatch({ type: "ADD_DOCUMENT", text })
})



export default connect(null, mapDispatchToProps)(TextEditorContainer)