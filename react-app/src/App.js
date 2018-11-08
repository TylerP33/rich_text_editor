import React, { Component } from 'react';
import './App.css';
import TextEditorContainer from './containers/TextEditorContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
          <TextEditorContainer />
      </div>
    );
  }
}

export default App;
