import React, { Component } from 'react';
// import heartLiker from '../images/heart.jpg';

class LikeButton extends Component {
    constructor() {
        super();
        this.state = {
            likes: 0
        };
        this.likerIncreasing = this.likerIncreasing.bind(this)
    }

    likerIncreasing(){
         let newCount = this.state.likes + 1;
         this.setState({
            likes: newCount,
         });
    };

    render(){
        return <div className="like-funct" onClick={this.likerIncreasing} className="liker-funct">
            Likes: {this.state.likes}
        </div>
    }
}

export default LikeButton;