import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './CounterButton.css'

class CounterButton extends Component{
    constructor(){
        super();


    }

    render() {
        return(
            <div className="counter">
                <button className="counterButton" onClick={() => this.props.incrementMethod(this.props.by)}> {this.props.op}{this.props.by}</button>
            </div>
        )
        
    }

    
}


CounterButton.proptype = {
     by : PropTypes.number,
}

export default CounterButton