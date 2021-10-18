import {
  SET_ACTIVE_FILTER,
  SET_SEARCH_IS_FOCUSED,
  SET_SEARCH_TEXT,
} from "./constants";

export const filterActions = {
  setActiveFilter(filter) {
    return {
      type: SET_ACTIVE_FILTER,
      payload: filter,
    };
  },
};

export const searchActions = {
  setSearchIsFocused(isFocudsed) {
    return {
      type: SET_SEARCH_IS_FOCUSED,
      payload: isFocudsed,
    };
  },
  setSearchText(text) {
    return {
      type: SET_SEARCH_TEXT,
      payload: text,
    };
  },
};
