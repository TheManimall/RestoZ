import * as Types from '../types';

const initialState = {
  dishes: [],
  loaded: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_DISH_REQUEST:
      return {
        ...state,
        loaded: false
      };
    case Types.GET_DISH_SUCCESS:
      return {
        ...state,
        dishes: action.payload,
        loaded: true
      };
    case Types.GET_DISH_FAILURE:
      return {
        ...state,
        loaded: true
      };
    case Types.DELETE_DISH_REQUEST:
      return {
        ...state
      };
    case Types.DELETE_DISH_SUCCESS:
      const {
        payload: { id }
      } = action;
      return {
        ...state,
        dishes: state.dishes.filter(el => el._id !== id && el)
      };
    case Types.DELETE_DISH_FAILURE:
      return {
        ...state
      };

    default:
      return state;
  }
};
