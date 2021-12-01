import React, { Component } from 'react';

class Counter extends Component {
    state = {
        text: "",
        counter: 0
    }

    handleChange = (event) => {
        this.setState({
            text: event.target.value
        })
    }

    handleClick = () => {
        this.setState({
            counter: this.state.counter + this.state.text.length
        })
    }

    render(){
        return(
          <div className="adder-funct">
              <input type='text' value={this.state.text} onClick={this.handleClick} onChange={this.handleChange} placeholder="Enter Numbers To Do Math"/>
              <p>{this.state.counter}</p>
          </div>
        );
    }
}
export default Counter;