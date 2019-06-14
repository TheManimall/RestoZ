import axios from 'axios';

import * as Types from '../types';

//ADD DISH
const addDishRequest = () => ({
  type: Types.ADD_DISH_REQUEST
});

const addDishSuccess = data => ({
  type: Types.ADD_DISH_SUCCESS,
  payload: data
});

const addDishFailure = err => ({
  type: Types.ADD_DISH_FAILURE,
  err
});

export const addDish = data => async dispatch => {
  dispatch(addDishRequest);
  try {
    const res = await axios.post('/api/dish/add', data);
    dispatch(addDishSuccess(res.data));
  } catch (err) {
    dispatch(addDishFailure(err));
  }
};
//END

//GET
const getDishRequest = () => ({
  type: Types.GET_DISH_REQUEST
});

const getDishSuccess = data => ({
  type: Types.GET_DISH_SUCCESS,
  payload: data
});

const getDishFailure = err => ({
  type: Types.GET_DISH_FAILURE,
  err
});

export const getDish = value => async dispatch => {
  dispatch(getDishRequest());
  try {
    const res = await axios.get(`api/dish/get/${value}`);
    dispatch(getDishSuccess(res.data));
  } catch (err) {
    console.error(err.response);
    dispatch(getDishFailure(err));
  }
};
//END

const deleteDishRequest = () => ({
  type: Types.DELETE_DISH_REQUEST
});

const deleteDishSuccess = data => ({
  type: Types.DELETE_DISH_SUCCESS,
  payload: data
});

const deleteDishFailure = err => ({
  type: Types.DELETE_DISH_FAILURE,
  err
});

export const deleteDish = value => async dispatch => {
  dispatch(deleteDishRequest());
  try {
    const res = await axios.get(`api/dish/delete/${value}`);
    dispatch(deleteDishSuccess(res.data));
  } catch (err) {
    console.error(err.response);

    dispatch(deleteDishFailure(err));
  }
};
