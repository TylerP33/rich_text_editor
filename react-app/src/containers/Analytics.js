import React, { Component } from 'react';
import './styles/Analytics.css';
import { connect } from 'react-redux';
import { getRecord } from '../actions/recordActions.js';
import WordCount from '../components/Analytics/WordCount'


class Analytics extends Component {
	state = {
		query: '',
		loading: true
	}


	handleChange = e => {
		this.setState({ query: e.target.value})
	}

	componentDidMount = (props) => {
			this.props.getRecord()
		}

	handleSubmit = e => {
		e.preventDefault()
		this.setState({loading: false})
	}

    render(){
    if (this.state.loading !== true) {
    	return <WordCount {...this.state}{...this.props}/>
    }
		return(
		<div>
		<h2>See how many times you have typed a word in this text editor</h2>
		<h3>Also, we will show you how many specific words exist in your current saved instance</h3>
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
            <button type="submit" value="Submit">Search Text</button>
            </form>
          </div>
		)
	}
}

const mapStateToProps = (state) => {
  return ({
    records: state.allRecords.records
  });
};



export default connect(mapStateToProps, {getRecord})(Analytics)