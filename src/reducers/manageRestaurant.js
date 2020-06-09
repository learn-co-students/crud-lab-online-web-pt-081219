import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state={restaurants: [], reviews: []}, action) {
    
    switch (action.type) {

        case 'ADD_RESTAURANT':
            // console.log('hit ADD_RESTAURANT', action)
            const restaurant = {
                id: cuid(),
                text: action.text
            }
            return { ...state, restaurants: [...state.restaurants, restaurant] }

        case 'DELETE_RESTAURANT':
            // console.log('hit DELETE_RESTAURANT', action)
            return { ...state, restaurants: state.restaurants.filter(restaurant => restaurant.id !== action.id) };

        case 'ADD_REVIEW':
            // console.log('hit ADD_REVIEW', action)
            const review = {
                restaurantId: action.review.restaurantId,
                id: cuid(),
                text: action.review.text
            }
            return { ...state, reviews: [...state.reviews, review] }

        case 'DELETE_REVIEW':
            // console.log('hit DELETE_REVIEW', action)
            return { ...state, reviews: state.reviews.filter(review => review.id !== action.id )}

        default: 
            return state;
    }
}