import React, { Component } from 'react';
import './App.css';
// react router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// containers
import TextEditor from './containers/TextEditor'
import Analytics from './containers/Analytics'


class App extends Component {
  render() {
    return (
     <Router>
  		<div className="app">
  			<div>
				<Route exact path='/' component={Analytics} />
				<Route exact path='/analytics' component={Analytics} />
				<Route exact path='/editor' component={TextEditor} />
			</div>
    	</div>
   	  </Router> 
    );
  }
}

export default App;
