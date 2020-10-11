import React, { Component } from "react";
import "./App.css";

import Validation from "./components/Validation/Validation";
import Char from './components/Char/Char';

class App extends Component {
  state = {
    letterCount: 0,
    word: []
  };

  updateWordHandler = (event) => {
    const word = event.target.value.split('');
    const letterCount = word.length;
    this.setState({ letterCount: letterCount, word: word });
  };

  letterClickHandler = (index) => {
    const word = [...this.state.word]
    word.splice(index, 1);
    this.setState({word: word, letterCount: this.state.letterCount - 1});
  }

  render() {
    return (
      <div className="App">
        <header>Assignment 2 - Lists and Conditionals</header>
        <input type="text" onChange={this.updateWordHandler} value={this.state.word.join('')}/>
        <p>Total number of characters: {this.state.letterCount}</p>
        <hr />
        <Validation letterCount={this.state.letterCount}/>
        {this.state.word.map((letter, index) => {
          return (
            <Char key={index} letter={letter} clickHandler={this.letterClickHandler.bind(this, index)} />
          );
        })}
      </div>
    );
  }
}

export default App;
