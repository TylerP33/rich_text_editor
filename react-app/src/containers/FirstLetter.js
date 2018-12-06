import React, { Component } from 'react';
import './styles/TextSearch.css';
import { connect } from 'react-redux';
import { getRecord } from '../actions/recordActions.js';
import AlphabetClick from '../components/FirstLetter/AlphabetClick'



class FirstLetter extends Component {

  componentDidMount = (props) => {
    this.props.getRecord()
  }

    render(){
    console.log(this.props.records)
		return(
		    <div>
          <AlphabetClick {...this.props} />
        </div>
		  )
	 }
}

const mapStateToProps = (state) => {
  return ({
    records: state.allRecords.records
  });
};



export default connect(mapStateToProps, {getRecord})(FirstLetter)

