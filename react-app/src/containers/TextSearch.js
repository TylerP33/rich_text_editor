import React, { Component } from 'react';
import './styles/TextSearch.css';
import { connect } from 'react-redux';
import { getRecord } from '../actions/recordActions.js';
import { Redirect } from 'react-router'
import WordToSentenceMatch from '../components/TextSearch/WordToSentenceMatch'


class Analytics extends Component {
	state = {
		query: '',
		loading: true,
		records: this.props.records
	}


	handleChange = e => {
		this.setState({ query: e.target.value})
	}

	componentDidMount = (props) => {
			this.props.getRecord()
		}

	handleSubmit = e => {
		e.preventDefault()
		if (this.state.query !== '') {
			this.setState({loading: false})
			//<WordToSentenceMatch {...this.state}{...this.props} />
		} else{
			alert("Please enter something!")
		}
	}

    render(){
    if (this.state.loading !== true) {
    	console.log(this.props.records)
    	return <Redirect to={{
    		pathname: "/text_search/matched_sentence",
    		state: {query: this.state.query, records: this.props.records} 
    		}}
    	/>
    }
		return(
		<div id="form-container">
		 <svg preserveAspectRatio="none" viewBox="0 0 100 102" height="200" width="100%" version="1.1" xmlns="http://www.w3.org/2000/svg" className="svgcolor-light">
      		<path d="M0 0 L50 100 L100 0 Z" fill="#546a7b" stroke="#393d3f"></path>
    	</svg>
			<h2>Enter a word below to see what sentence it belongs to.</h2>
			<div id="form">
          		<form onSubmit={this.handleSubmit}>
            		<p>
              		<h2 id="form-label">Enter Word:</h2>
              		<input
                		type="text"
                		id="query"
                		query="query"
                		value={this.state.query}
                		onChange={this.handleChange}
              		/>
            		</p>
            		<button type="submit" value="Submit">Search Text</button>
            	</form>
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



export default connect(mapStateToProps, {getRecord})(Analytics)