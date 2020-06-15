import React, { Component } from 'react';

class ReviewInput extends Component {
  
  state = {
    text: ""
  }

  handleOnChange(event){
    this.setState({
      text: event.target.value
    })
  }

  handleOnSubmit(event){
    event.preventDefault()
    this.props.addReview({text: this.state.text, restaurantId: this.props.restaurantId})
    this.setState({
      text: ''
    })
  }
  render() {
    return (
      <div>
       
        <h1>Write a Review!</h1>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input
          type="text"
          value={this.state.text}
          onChange={(event)=> this.handleOnChange(event)}/>
          <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default ReviewInput;

