import { SET_SEARCH_IS_FOCUSED, SET_SEARCH_TEXT } from "./constants";

const initialState = {
  isFocused: false,
  text: "",
};

const searchReducer = (state, action) => {
  switch (action.type) {
    case SET_SEARCH_IS_FOCUSED:
      return { ...state, isFocused: action.payload };
    case SET_SEARCH_TEXT:
      return { ...state, text: action.payload };
    default:
      return state;
  }
};

export default searchReducer;
