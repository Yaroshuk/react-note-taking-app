import { COLOR_FILTER, SET_ACTIVE_FILTER } from "./constants";

const initialState = COLOR_FILTER.none;

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_FILTER:
      return action.payload;
    default:
      return state;
  }
};

export default filterReducer;
