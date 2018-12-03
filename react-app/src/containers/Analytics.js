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
			query: ''
		}
	}

	handleChange = e => {
		this.setState({ query: e.target.value})
	}

	handleSubmit = e => {
		e.preventDefault()
		this.props.userSearch(this.state.query)
		this.setState({ query: ''})
	}

    render(){
		return(
		<div>
		<h2>Check the statistics for a specific word!</h2>
          <form onSubmit={this.handleSubmit}>
            <p>
              <label>Word:</label>
              <input
                type="text"
                id="query"
                query="query"
                value={this.state.query}
                placeholder="Search for..."
                onChange={this.handleChange}
              />
            </p>
            </form>
            <button type="submit">Search Text</button>
          </div>
		)
	}
}



export default connect(null, {userSearch})(Analytics)