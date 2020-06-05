
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
    restaurants: [],
    reviews: []
}, action) {

    // let restaurantId
    // let restaurant

    switch (action.type) {
        case 'ADD_RESTAURANT':
            
            const restaurant = {
                text: action.text,
                id: cuid()
            }

            console.log(restaurant)

            return { ...state, restaurants: [...state.restaurants, restaurant] }

        case 'DELETE_RESTAURANT':

            return { ...state, restaurants: state.restaurants.filter(restaurant => restaurant.id !== action.id) } 


        case 'ADD_REVIEW':

            console.log(action.restaurant)

            return { ...state, reviews: [...state.reviews, action.review] }

            // console.log(action.review)
            // restaurantId = state.restaurants.findIndex(restaurant => restaurant.id === action.review.restaurantId)
            // restaurant = state[restaurantId]

            // return [
            //     ...state.slice(0, restaurantId),
            //     Object.assign({}, restaurant, { reviews: restaurant.reviews.concat(action.review) }),
            //     ...state.slice(restaurantId + 1)
            // ];

        case 'DELETE_REVIEW':
            
            return { ...state, reviews: state.reviews.filter(review => review.id !== action.id) }

        default:
            return state;
    }
};
