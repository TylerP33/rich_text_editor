import React, { Component } from 'react';
import './styles/Analytics.css';
import { connect } from 'react-redux';
import { getRecord } from '../actions/recordActions.js';
import { bindActionCreators } from 'redux';
import { userSearch } from '../actions/recordActions';


class Analytics extends Component {
	constructor(props){
		super(props);
		this.state = {
			word: ''
		}
	}

	handleChange = e => {
		const { word, value } = e.target
		this.setState({ [word]: value })
	}

    render(){
		return(
		<div>
		<h2>Check the Analytics for a specific word!</h2>
          <form onSubmit={this.handleSubmit}>
            <p>
              <label>Word:</label>
              <input
                type="text"
                id="word"
                word="word"
                value={this.state.word}
                onChange={this.handleChange}
              />
            </p>
            </form>
            <button type="submit">Search Text</button>
          </div>
		)
	}
}

const mapStateToProps = (state) => {
  return ({
    records: state.allRecords.records
  });
};


export default connect(mapStateToProps, {userSearch})(Analytics)