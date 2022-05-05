import React, { Component } from 'react';
import CounterButton from './CounterButton';

class Counter extends Component {
    constructor(){
        super();

        this.state = {
            counter : 0
        }

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
    }
  render() {
  return (
    <div className="counter">
      <CounterButton op="+" by={1} incrementMethod={this.increment} finalCounter={this.state.counter}/>
      <CounterButton op="+" by={5} incrementMethod={this.increment} finalCounter={this.state.counter}/>
      <CounterButton op="+" by={10} incrementMethod={this.increment} finalCounter={this.state.counter}/>
      <CounterButton op="-" by={1} incrementMethod={this.decrement} finalCounter={this.state.counter}/>
      <CounterButton op="-" by={5} incrementMethod={this.decrement} finalCounter={this.state.counter}/>
      <CounterButton op="-" by={10} incrementMethod={this.decrement} finalCounter={this.state.counter}/>
      <CounterButton op="Reset" incrementMethod={this.reset} finalCounter={this.state.counter}/>

      
      <span className="counterText">{this.state.counter}</span>
    </div>
  );
  }

  reset(i){
    this.setState((prevState) => {
      return {counter: prevState.counter = 0}
    });
  }

  decrement(i){
    this.setState((prevState) => {
      return {counter : prevState.counter - i}
      }
    );
  }

  increment(i){
      console.log("tested");
    this.setState((prevState) => {
      return {counter: prevState.counter + i}
      }
    );
}
}

export default Counter;
