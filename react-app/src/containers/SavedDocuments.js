import React, { Component } from 'react';
import './styles/SavedDocuments.css';
import { connect } from 'react-redux';
import { getRecord } from '../actions/recordActions';
import { Editor, EditorState, convertToRaw} from 'draft-js';
import {convertFromRaw} from 'draft-js';

class SavedDocuments extends Component {

	 componentDidMount() {
    	this.props.getRecord()
  	}

	render(){
		const lastRecord = this.props.records
		console.log(lastRecord)

		return(
			<div>
				{}
			</div>
			)
	}
}

const mapStateToProps = state => {
  return {records: state.records.records}
}

export default connect(mapStateToProps, { getRecord })(SavedDocuments)
