import React, { Component } from 'react';
import logo from './friedhead.svg';
import './App.css';
import Question from './Question/Question';

class App extends Component {


  state = {
    question: "Where is the tomb of Mughal Emperor Jahangir?",
    answer: "Lahore, Pakistan"
  }


  revealAnswerHandler = (event) => {
    this.setState({question: this.state.answer})
  };


  render() {
    return (
      <div className="App">


        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>30 days of React with Fiza</h1>
          <h2>Day-1  / Ask Me</h2>
        </header>


        <Question 
          question={this.state.question}
          click={this.revealAnswerHandler}
        />

      </div>
    );
  }
}

export default App;