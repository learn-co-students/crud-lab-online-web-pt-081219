import React, { Component } from 'react'
import Restaurant from './Restaurant'

class Restaurants extends Component {
  render() {
    console.log(this.props.restaurants)
    return(
      <div> 
        <h3>Restaurants</h3>
        <ul>
         {this.props.restaurants.map(r => <Restaurant key={r.id} restaurant={r} delete={this.props.delete} />)}
        </ul>
      </div>
    );
  }
};

export default Restaurants;