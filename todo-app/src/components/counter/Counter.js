import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './Counter.css'

class Counter extends Component{
    constructor(){
        super();

        this.state = {
            counter : 0
        }

        this.increment = this.increment.bind(this);

    }

    render() {
        return(
            <div className="counter">
                <button className="counterButton" onClick={this.increment}>+ {this.props.by}</button>
                <span className="counterText">{this.state.counter}</span>
            </div>
        )
        
    }

    increment(){
        this.setState({counter: this.state.counter + this.props.by});
    }
}

Counter.defaultProps = {
    by : 1
}

Counter.prototype = {
     by : PropTypes.number
}

export default Counter