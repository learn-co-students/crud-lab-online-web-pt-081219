import React, { Component } from 'react';
// import Reviews from './Reviews';
import { cuidFn } from '../../reducers/manageRestaurant';

class ReviewInput extends Component {
  state = {
    text: '',
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const review = {
      text: this.state.text,
      restaurantId: this.props.restaurantId,
      id: cuidFn()
    }

    this.props.addReview(review)

    this.setState({
      text: '',
      id: null
    })
  }



  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)} >
          <label>New Review: </label>
          <input type="text" value={this.state.text} onChange={(event) => this.handleChange(event)} />
          <input type="submit" value="Add" />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
