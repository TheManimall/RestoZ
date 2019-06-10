<<<<<<< HEAD
import { createStore, combineReducers } from 'redux';
import restaurant from './reducers/restaurantReducer';

const rootReducer = combineReducers({
  restaurant: restaurant,
=======
import { createStore, combineReducers } from "redux";
import { reducer as form } from "redux-form";
import restaurant from "./reducers/restaurant";

const rootReducer = combineReducers({
  restaurant,
  form
>>>>>>> 6d7ec5ab382e31e18199adcfe372aa94d38ea3fc
});

const configureStore = () => {
  return createStore(rootReducer);
};

export default configureStore;
