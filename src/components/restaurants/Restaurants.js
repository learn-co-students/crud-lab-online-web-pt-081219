import React, { Component } from 'react';
import Restaurant from './Restaurant';

class Restaurants extends Component {
  renderRestaurants = () => {
    return (
      this.props.restaurants.map(restaurant => <Restaurant key={restaurant.id} {...restaurant} restaurant={restaurant} deleteRestaurant={this.props.deleteRestaurant} addReview={this.props.addReview} />)
    )
  }

  render() {
    return(
      <ul>
        {this.renderRestaurants()}
      </ul>
    );
  }
};

export default Restaurants;