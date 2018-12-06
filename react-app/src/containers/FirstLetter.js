import React, { Component } from 'react';
import './styles/TextSearch.css';
import { connect } from 'react-redux';
import { getRecord } from '../actions/recordActions.js';



class TextSearch extends Component {

  componentDidMount = (props) => {
    this.props.getRecord()
  }

    render(){
    console.log(this.props.record)
		return(
		    <div>

        </div>
		  )
	 }
}

const mapStateToProps = (state) => {
  return ({
    records: state.allRecords.records
  });
};



export default connect(mapStateToProps, {getRecord})(TextSearch)