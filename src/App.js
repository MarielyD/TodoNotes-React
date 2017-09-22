import React, { Component } from 'react';
import logo from './logo.svg';
import Note from './Note/Note';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
    <h1>React & Firebase ToDo List</h1>
    <Note />
    </div>
    );
  }
}

export default App;
