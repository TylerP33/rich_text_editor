import React, { Component } from 'react';
import './App.css';
import TextEditor from './containers/TextEditor'
import Analytics from './containers/Analytics'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Analytics />
      </div>
    );
  }
}

export default App;
