import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  reviewsList = () => this.props.reviews.map(review => {
    if (review.restaurantId === this.props.restaurant.id){
      return <Review key={review.id} review={review} deleteReview={this.props.deleteReview} />
    }
  })

  render() {
    return (
      <ul>
        {this.reviewsList()}
      </ul>
    );
  }
};

export default Reviews;