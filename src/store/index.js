import { createStore, combineReducers } from "redux";
import notesReducer from "./notes-reducer";
import filterReducer from "./filter-reducer";
import searchReducer from "./search-reducer";

export const store = createStore(
  combineReducers({
    notes: notesReducer,
    filter: filterReducer,
    search: searchReducer,
  })
);
