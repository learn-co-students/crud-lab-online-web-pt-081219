
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(
    state = {
        restaurants: [],
        reviews: []
    }, 
    action) {
    
    let newObj;
    let newArr;

    switch(action.type) {
        case "ADD_RESTAURANT":
            newObj = { ...action.payload, id: cuid() }
            return { ...state, restaurants: [...state.restaurants, newObj ]}

        case "DELETE_RESTAURANT":
            newArr = state.restaurants.filter(r => r.id !== action.id)
            // DELETE ASSOCIATED REVIEWS
            return { ...state, restaurants: newArr}

        case "ADD_REVIEW":
            newObj = { ...action.payload, id: cuid() }
            return { ...state, reviews: state.reviews.concat(newObj) }

        case "DELETE_REVIEW":
            newArr = state.reviews.filter(r => r.id !== action.id)
            return { ...state, reviews: newArr}

        default:
            return state;
    }
}
