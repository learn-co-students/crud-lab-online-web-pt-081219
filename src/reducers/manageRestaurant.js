
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {restaurants: [], reviews: []}, action) {

    switch (action.type){
        case 'ADD_RESTAURANT':
            let restaurant = {
                text: action.text,
                id: cuid()
            }
            return {...state, restaurants: [...state.restaurants, restaurant]}
        case 'DELETE_RESTAURANT':
            console.log(state)
            return {...state, restaurants: state.restaurants.filter(restaurant => restaurant.id !== action.id), reviews: state.reviews.filter(review => review.restaurantId !== action.id)}
        case 'ADD_REVIEW':
            let review ={
                text: action.review.text,
                restaurantId: action.review.restaurantId,
                id: cuid()
            }

            return {...state, reviews: [...state.reviews, review]}
        case 'DELETE_REVIEW':
            return {...state, reviews: state.reviews.filter(review => review.id !== action.id)}

        default:
            return state
    }
}
