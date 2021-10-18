import { createStore, combineReducers } from "redux";
import notesReducer from "./notes-reducer";
import filterReducer from "./filter-reducer";

export const store = createStore(combineReducers({
  notes: notesReducer,
  filter: filterReducer
}));
