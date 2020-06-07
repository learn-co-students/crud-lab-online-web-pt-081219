import React, { Component } from 'react'
import { connect } from 'react-redux';
import RestaurantInput from '../components/restaurants/RestaurantInput'
import Restaurants from '../components/restaurants/Restaurants'

class RestaurantsContainer extends Component {

  render() {
    return (
      <div>
        <RestaurantInput 
          addRestaurant={this.props.addRestaurant}/>
        <Restaurants 
          restaurants={this.props.restaurants}
          delete={this.props.deleteRestaurant}/>
      </div>
    )
  }
}

const mapStateToProps = ({ restaurants }) => ({ restaurants })

const mapDispatchToProps = dispatch => {
  return {
    addRestaurant: payload => {dispatch({ type: "ADD_RESTAURANT", payload })},
    deleteRestaurant: id => {dispatch({ type: "DELETE_RESTAURANT", id })}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer)