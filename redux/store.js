import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import restaurantReducer from './reducer/restaurants';
import cartReducer from './reducer/cart';

const rootReducer = combineReducers({ restaurantReducer, cartReducer });

export const Store = createStore(rootReducer, applyMiddleware(thunk));