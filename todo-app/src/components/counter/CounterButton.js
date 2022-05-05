import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './CounterButton.css'

class CounterButton extends Component{
    constructor(){
        super();

        this.increment = this.increment.bind(this);

    }

    render() {
        return(
            <div className="counter">
                <button className="counterButton" onClick={this.increment}> {this.props.op}{this.props.by}</button>
            </div>
        )
        
    }

    increment(){
        this.props.incrementMethod(this.props.by); 
    }
}


CounterButton.proptype = {
     by : PropTypes.number,
}

export default CounterButton