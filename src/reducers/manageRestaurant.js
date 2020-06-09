import { combineReducers } from 'redux'

import cuid from 'cuid';
export const cuidFn = cuid;

const rootReducer = combineReducers({
  restaurants: manageRestaurants,
  reviews: manageReviews
})

export default rootReducer

export function manageRestaurants(state = [], action) {

  switch (action.type) {
    case 'ADD_RESTAURANT': 
      const restaurant = { text: action.restaurant, id: cuid() }
      return [...state, restaurant]

    case 'DELETE_RESTAURANT':
      return [...state.filter(r => r.id !== action.id)]

    default:
      return state  
  }
}

export function manageReviews(state = [], action) {

  switch (action.type) {
    case 'ADD_REVIEW':
      const review = { ...action.payload, id: cuid() }
      console.log(review) 
      return [...state, review]

    case 'DELETE_REVIEW':
      return [...state.filter(r => r.id !== action.id)]

    default:
      return state  
  }
}

