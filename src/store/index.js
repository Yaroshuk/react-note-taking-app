import { createStore, combineReducers } from "redux";
import notesReducer from "./notes-reducer";
import filterReducer from "./filter-reducer";
import searchReducer from "./search-reducer";
import noteFormReducer from "./note-form-reducer";

export const store = createStore(
  combineReducers({
    notes: notesReducer,
    filter: filterReducer,
    search: searchReducer,
    noteForm: noteFormReducer,
  })
);
