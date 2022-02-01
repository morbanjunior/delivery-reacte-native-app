import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import restaurantReducer from './reducer/restaurants';

const rootReducer = combineReducers({ restaurantReducer });

export const Store = createStore(rootReducer, applyMiddleware(thunk));