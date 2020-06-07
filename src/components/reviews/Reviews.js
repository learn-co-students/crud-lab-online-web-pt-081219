import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  generateReviews = () => {
    const associatedReviews = this.props.reviews.filter(r => r.restaurantId === this.props.restaurantId);

    return associatedReviews.map(r => {
      return <Review key={r.id} review={r} delete={this.props.delete}/>
    })
  }

  render() {
    return (
      <ul>
        {this.generateReviews()}
      </ul>
    );
  }
};

export default Reviews;