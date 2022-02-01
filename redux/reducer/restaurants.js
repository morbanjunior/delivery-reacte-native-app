import {  GET_RESTAURANT } from '../action/restaurants'

const initialState = {
    restaurants: [],
}

function restaurantReducer(state = initialState, action) {
    switch (action.type) {
        case GET_RESTAURANT:
            return { ...state, restaurants: action.payload };
        default:
            return state;
    }
}

export default restaurantReducer;