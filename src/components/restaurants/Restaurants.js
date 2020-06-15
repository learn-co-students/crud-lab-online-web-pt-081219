import React, { Component } from 'react';
import Restaurant from './Restaurant'


class Restaurants extends Component {
  renderRestaurants = () => {
    return this.props.restaurants.map(r => <Restaurant key={r.id} restaurant={r} deleteRestaurant={this.props.deleteRestaurant}/> )
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