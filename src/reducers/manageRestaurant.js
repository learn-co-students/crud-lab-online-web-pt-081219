import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state={restaurants: [], reviews: []}, action) {
    
    switch (action.type) {

        case 'ADD_RESTAURANT':
            console.log('hit ADD_RESTAURANT', action)
            const restaurant = {
                id: cuid(),
                text: action.text
            }
            return { ...state, restaurants: [...state.restaurants, restaurant] }

        case 'DELETE_RESTAURANT':
            console.log('hit DELETE_RESTAURANT', action)
            return { ...state, restaurants: state.restaurants.filter(restaurant => restaurant.id !== action.id) };

        case 'ADD_REVIEW':
            console.log('hit ADD_REVIEW', action)
            const review = {
                // restaurantId: action.id,
                id: cuid(),
                text: action.text
            }
            return { ...state, reviews: [...state.reviews, review] }

        default: 
            return state;
    }
}