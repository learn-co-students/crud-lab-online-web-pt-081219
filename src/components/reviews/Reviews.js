import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  renderReviews = () => this.props.reviews.map(r => {
    return (r.restaurantId === this.props.restaurant.id) ? <Review key={r.id} review={r} delete={this.props.delete} /> : null
    })

  render() {
    return (
      <ul>
        {this.renderReviews()}
      </ul>
    )
  }
}

export default Reviews