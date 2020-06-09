import React, { Component } from 'react'
import RestaurantInput from '../components/restaurants/RestaurantInput'
import Restaurants from '../components/restaurants/Restaurants'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'

class RestaurantsContainer extends Component {

  render() {
    return (
      <div>
        <RestaurantInput addRestaurant={this.props.addRestaurant}/>
        <Restaurants restaurants={this.props.restaurants}
        deleteRestaurant={this.props.deleteRestaurant} />
      </div>
    )
  }
}

const mapStateToProps = state => ({restaurants: state.restaurants})

const mapDispatchToProps = dispatch => ({
  addRestaurant: text => dispatch ({type: 'ADD_RESTAURANT', text}),
  deleteRestaurant: key => dispatch({type: 'DELETE_RESTAURANT', key})
})

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer)
