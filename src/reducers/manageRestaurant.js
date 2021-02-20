import cuid from 'cuid';
import { combineReducers } from "redux";

let idGen = () => cuid()

const rootReducer = combineReducers({
    restaurants: manageRestaurants,
    reviews: manageReviews
})
export default rootReducer


function manageRestaurants(state=[], action) {
    switch(action.type){
        case 'ADD_RESTAURANT':
            // debugger
            return [...state, {name:action.payload, id:cuid()}]
        case 'REMOVE_RESTAURANT':
            // debugger
            return state.filter(r=>r.id !== action.payload)
        
        default:
            return state
    }
}

function manageReviews(state=[], action){
    switch(action.type){
        case 'ADD_REVIEW':
            console.log(idGen())
            // debugger
            return [...state, {text: action.payload, restaurantId: action.restId, id:idGen()}]
        case 'REMOVE_REVIEW' :
            return state.filter(review=> review.id != action.payload)
        default:
            return state
    }

}
