import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  render(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 classname="app-tittle" > Woelcome To Musawwir's App</h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
     
      </header>
    </div>
  );
}
}

export default App;