import React, { Component } from 'react';
import logo from './logo.svg';
import kids from './Kids_Transparent_Logo.png'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={kids} className="App-logo" alt="logo" />
          <h1 className="App-title">Kids-Help-Phone App</h1>
        </header>
        <p className="App-intro">
          Welcome!
        </p>
        <span className="skype-button bubble " data-contact-id="sajith.bandaranayake"></span>
      </div>
    );
  }
}

export default App;
