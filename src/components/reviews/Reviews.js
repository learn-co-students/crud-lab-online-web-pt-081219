import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  
  
  renderReviews = () => {

    return this.props.reviews.filter(r => r.restaurantId === this.props.restaurantId).map(r => <Review key={r.id} review={r} deleteReview={this.props.deleteReview}/> )
  }
  
  
  render() {
    
    return (
      <ul>
        {this.renderReviews()}
      </ul>
    );
  }
};

export default Reviews;