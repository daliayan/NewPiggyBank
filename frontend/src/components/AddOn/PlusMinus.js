import React, { Component } from 'react';

class PlusMinus extends Component {
    constructor(){
        super();
        this.state = {
            counter: 0
        };
    }

    addingFunct = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    subtractingFunct = () => {
        this.setState({
            counter: this.state.counter -1
        })
    }

    render(){
        return (
            <div>
                <h2>Count: {this.state.counter}</h2>
                <button onClick={this.addingFunct}>+</button>
                <button onClick={this.subtractingFunct}>-</button>
            </div>
        )
    }
}

export default PlusMinus;