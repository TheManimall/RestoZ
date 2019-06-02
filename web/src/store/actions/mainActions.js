import axios from 'axios';

import * as Types from '../types';

//ADD DISH
const addDishRequest = () => ({
  type: Types.ADD_DISH_REQUEST,
});

const addDishSuccess = data => ({
  type: Types.ADD_DISH_SUCCESS,
  payload: data,
});

const addDishFailure = err => ({
  type: Types.ADD_DISH_FAILURE,
  err,
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

//GET ALL
const getAllDishRequest = () => ({
  type: Types.GET_ALL_DISH_REQUEST,
});

const getAllDishSuccess = data => ({
  type: Types.GET_ALL_DISH_SUCCESS,
  payload: data,
});

const getAllDishFailure = err => ({
  type: Types.GET_ALL_DISH_FAILURE,
  err,
});

export const getAllDish = () => async dispatch => {
  dispatch(getAllDishRequest);
  try {
    const res = await axios.get('/api/dish/all');
    dispatch(getAllDishSuccess(res.data));
  } catch (err) {
    dispatch(getAllDishFailure(err));
  }
};
//END
