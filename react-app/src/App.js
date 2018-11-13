import React, { Component } from 'react';
import './App.css';
import TextEditor from './containers/TextEditor'
import SavedDocuments from './containers/SavedDocuments'

class App extends Component {
  render() {
    return (
      <div className="App">
          <TextEditor />
          <SavedDocuments />
      </div>
    );
  }
}

export default App;
