import React, { Component } from 'react';
import './styles/TextEditor.css';
import { Editor, EditorState, convertToRaw, convertFromRaw, RichUtils} from 'draft-js';
import { connect } from 'react-redux';
import { addNewRecord, getRecord } from '../actions/recordActions.js';
import { bindActionCreators } from 'redux';
import Bold from '../components/Bold.js'
import Italics from '../components/Italics.js'

class TextEditor extends Component {
	constructor(props){
		super(props);
		this.state = {
			editorState: EditorState.createEmpty()
		}
	}

		
		onChange = (editorState) => {
				console.log(editorState)
				const contentState = this.state.editorState.getCurrentContent();
				const editorStateJSONFormat = convertToRaw(contentState)
				this.props.addNewRecord(editorStateJSONFormat);
				this.setState({
					editorState
			});
		}

		

		componentDidMount = (props) => {
			this.props.getRecord()
		}

    	componentWillReceiveProps = (nextProps) => {
    		if (nextProps.records.length >= 1){
    			
    			let lastRecord;
    			for (let i = nextProps.records.length; i > 0; i--){
    				if (i === nextProps.records.length - 1){
    					lastRecord = nextProps.records[i].body
    				}
    			}

    			const replaceRubyHashRocket = /=>/g
    			const content = lastRecord.replace(replaceRubyHashRocket, ":")
  

    			this.setState({
    				editorState: EditorState.createWithContent(convertFromRaw(JSON.parse(content)))
    			})
    		}
    	}




	render(){
		return(
			<div id="document-container">
			<Bold onChange={this.onChange} {...this.state}  />
			<Italics onChange={this.onChange} {...this.state}  />
				<div>
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

const mapStateToProps = (state) => {
  return ({
    records: state.allRecords.records
  });
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getRecord,
    addNewRecord
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(TextEditor)
