import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    return (
      <ul>
        Reviews
        {this.props.reviews.filter(review => review.restaurantId === this.props.id).map(review => <Review deleteReview={this.props.deleteReview} review={review}/>)}
      </ul>
    );
  }
};

export default Reviews;