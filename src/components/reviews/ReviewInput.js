import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  state = {
    text: ''
  }

  handleChange = event => {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.addReview({text: this.state.text, restaurantId: this.props.restaurant.id})
    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input 
              onChange={event => this.handleChange(event)}
              type='text' 
              value={this.state.text}
            />
          <input type='submit' value='Add Review'/>
        </form>
      </div>
    );
  }
};

export default ReviewInput;
