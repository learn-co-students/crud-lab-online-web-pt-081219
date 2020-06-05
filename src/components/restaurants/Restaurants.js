import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {

  restaurantsList = () => this.props.restaurants.map(restaurant => <Restaurant key={restaurant.id} restaurant={restaurant} deleteRestaurant={this.props.deleteRestaurant} />)

  render() {
    return(
      <ul>
        {this.restaurantsList()}
      </ul>
    );
  }
};

export default Restaurants;