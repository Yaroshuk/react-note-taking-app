import { COLOR_FILTER, OPEN_NOTE_FORM, CLOSE_NOTE_FORM } from "./constants";

const initialState = {
  isOpen: false,
  text: "",
  colorFilter: COLOR_FILTER.none,
};

const noteFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_NOTE_FORM:
      return { ...state, isOpen: true };
    case CLOSE_NOTE_FORM:
      return { ...initialState };
    default:
      return state;
  }
};

export default noteFormReducer;
