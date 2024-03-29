import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FirstComponent from './components/learning-examples/FirstComponent';
import SecondComponent from './components/learning-examples/SecondComponent';
import ThirdComponent from './components/learning-examples/ThirdComponent';
import CounterButton from './components/counter/CounterButton';
import Counter from './components/counter/Counter'; 
import TodoApp from './components/todo/TodoApp';

class App extends Component {
  render() {
  return (
    <div className="App">
      {/* Test App root. */}
      {/* <Counter/> */}
      <TodoApp/>
    </div>
  );
  }
}

export default App;

