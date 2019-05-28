import axios from 'axios';

import * as Types from '../types';

const addDishSuccess = data => ({
  type: Types.ADD_DISH_SUCCESS,
  payload: data,
});

const addDishFailure = err => ({
  type: Types.ADD_DISH_FAILURE,
  err,
});

export const addDish = data => async dispatch => {
  try {
    const res = await axios.post('/api/dish/add', data);
    dispatch(addDishSuccess(res.data));
  } catch (err) {
    dispatch(addDishFailure(err));
  }
};
