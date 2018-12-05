import React, { Component } from 'react';
import './App.css';
// react router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// containers
import Home from './components/Home/Home'
import TextEditor from './containers/TextEditor'
import Analytics from './containers/Analytics'
import NavBar from './components/NavBar'
import ErrorMessage from './components/Analytics/ErrorMessage'


class App extends Component {
  render() {
    return (
     <Router>
  		<div className="app">
  		<NavBar />
  			<div>
				<Route exact path='/' component={Home} />
				<Route path='/analytics' component={Analytics} />
				<Route path='/editor' component={TextEditor} />
			</div>
    	</div>
   	  </Router> 
    );
  }
}

export default App;
