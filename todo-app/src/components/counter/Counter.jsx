import React, { Component } from 'react';
import CounterButton from './CounterButton';

class Counter extends Component {
    constructor(){
        super();

        this.state = {
            counter : 0
        }

        this.increment = this.increment.bind(this);
    }
  render() {
  return (
    <div className="counter">
      <CounterButton incrementMethod={this.increment} finalCounter={this.state.counter}/>
      <CounterButton by={5} incrementMethod={this.increment} finalCounter={this.state.counter}/>
      <CounterButton by={10} incrementMethod={this.increment} finalCounter={this.state.counter}/>
      
      <span className="counterText">{this.state.counter}</span>
    </div>
  );
  }

  increment(i){
      console.log("tested");
    this.setState({counter: this.state.counter + i
    });
}
}

export default Counter;
