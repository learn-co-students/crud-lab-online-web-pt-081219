import React, { Component } from 'react';
import Restaurant from './Restaurant';

class Restaurants extends Component {
  generateRestaurants = () => {
    return this.props.restaurants.map(r => {
      return <Restaurant key={r.id} restaurant={r} delete={this.props.delete} />
    })
  }

  render() {
    return(
      <ul>
        {this.generateRestaurants()}
      </ul>
    );
  }
};

export default Restaurants;