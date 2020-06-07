import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    return (
      <ul>
        {this.props.reviews.filter(review => review.restaurantId === this.props.restaurant.id).map( review => <Review key={review.id} review={review} deleteReview={this.props.deleteReview}/>)}
      </ul>
    );
  }
};

export default Reviews;