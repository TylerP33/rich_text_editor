import React, { Component } from 'react';
import './styles/TextEditor.css';
import { Editor, EditorState, convertToRaw, convertFromRaw} from 'draft-js';
import { connect } from 'react-redux';
import { addNewRecord, getRecord } from '../actions/recordActions.js';
import { bindActionCreators } from 'redux';
import InlineStyles from '../components/TextEditor/InlineStyles.js'
import ColorPalette from '../components/TextEditor/ColorPalette.js'


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
    					break
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
		<div id="total-container">
			<div>
				<InlineStyles onChange={this.onChange} {...this.state}  />
				  <div id="editor-container">
						<Editor 
							editorState={this.state.editorState} 
							onChange={this.onChange} 
							placeholder="Type Here"
							ref={this.setDomEditorRef}
						/>
				  </div>
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