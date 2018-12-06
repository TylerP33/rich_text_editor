import React, { Component } from 'react';
import './App.css';
// react router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// containers
import Home from './components/Home/Home'
import TextEditor from './containers/TextEditor'
import TextSearch from './containers/TextSearch'
import NavBar from './components/NavBar'
import WordToSentenceMatch from './components/TextSearch/WordToSentenceMatch'
import ErrorMessage from './components/TextSearch/ErrorMessage'


class App extends Component {
  render() {
    return (
     <Router>
  		<div className="app">
  		<NavBar />
  			<div>
				<Route exact path='/' component={Home} />
				<Route exact path='/text_search' component={TextSearch} />
				<Route exact path='/editor' component={TextEditor} />
        <Route path='/text_search/matched_sentence' component={WordToSentenceMatch} />
        <Route path='/text_search/error' component={ErrorMessage} />
			</div>
    	</div>
   	  </Router> 
    );
  }
}

export default App;
