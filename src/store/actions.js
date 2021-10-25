import {
  SET_ACTIVE_FILTER,
  SET_SEARCH_IS_FOCUSED,
  SET_SEARCH_TEXT,
  OPEN_NOTE_FORM,
  CLOSE_NOTE_FORM,
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

export const noteFormActions = {
  openNoteForm() {
    return {
      type: OPEN_NOTE_FORM,
    };
  },
  closeNoteForm() {
    return {
      type: CLOSE_NOTE_FORM,
    };
  },
};
