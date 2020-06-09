import React, { Component } from 'react';
import Restaurant from './Restaurant';

class Restaurants extends Component {

  render() {
    const {restaurants, deleteRestaurant} = this.props
    const restList = restaurants.map(restaurant => {
      return(
        <Restaurant
        key={restaurant.id}
        restaurant={restaurant}
        deleteRestaurant={deleteRestaurant}
        />
      )
    })

    return( 
      <div>
        <ul>
          {restList}
        </ul>
        
      </div>
    );
  }
};

export default Restaurants;