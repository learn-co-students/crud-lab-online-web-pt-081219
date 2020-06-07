import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  state = {
    text: ''
  }

  handleOnChange = event => {
    this.setState({
      text: event.target.value,
    })
  }

  handleOnSubmit = event => {
    event.preventDefault()
    let review = {
      text: this.state.text,
      restaurantId: this.props.restaurantId
    }
    debugger
    this.props.addReview(review)
    this.setState({
      text: '',
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={event => this.handleOnSubmit(event)}>
          <label>Write a Review:</label>
          <input
            type="text"
            value={this.state.text}
            onChange={event => this.handleOnChange(event)}
          />
          <input type="submit" value="Publish Review" />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
