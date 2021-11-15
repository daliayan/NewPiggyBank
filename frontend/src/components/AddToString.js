import React, { Component } from 'react'

export class AddToString extends Component {

    state = {
        symbol: ""
    }

    onClick = () => {
        this.setState({
            symbol: this.state.symbol + '!'
        })
    }

    render() {
        return (
            <div>
                <h1 onClick={this.onClick}>{this.props.header}{this.state.symbol}</h1>
            </div>
        )
    }
}

export default AddToString;
