import React, { Component } from 'react';
import './styles/SavedDocuments.css';
import { connect } from 'react-redux';
import { getRecord } from '../actions/recordActions';
import { Editor, EditorState, convertToRaw} from 'draft-js';
import {convertFromRaw} from 'draft-js';

class SavedDocuments extends Component {

		constructor(props){
		super(props);
		this.state = {
			editorState: EditorState.createEmpty(),
		}

		this.onChange = (editorState) => {
			const contentState = this.state.editorState.getCurrentContent();
			const editorStateJSONFormat = convertToRaw(contentState)
			this.props.addNewRecord(editorStateJSONFormat)
			this.setState({
				editorState
			});
		}
		
	}

	 componentDidMount() {
    	this.props.getRecord()
  	}

	render(){
		return(
			<div id="saved-documents-container">
				
			</div>
			)
	}
}

const mapStateToProps = state => {
  return {records: state.records.records}
}

export default connect(mapStateToProps, { getRecord })(SavedDocuments)
