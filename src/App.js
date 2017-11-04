import React, { Component } from 'react';
import logo from './logo.svg';
import kids from './Kids_Transparent_Logo.png'

import Choice from './Choice';

class App extends Component {

  state = {
    questions: 'Someone is being mean to me at school - what should I do?'
  };


  pickOption = () => {
    this.setState(() => ({ questions: 'Next question' }));
  };



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
        <Choice questions={this.state.questions} pickOption={this.pickOption} />
        <span className="skype-button bubble " data-contact-id="sajith.bandaranayake"></span>
      </div>
    );
  }
}

export default App;
