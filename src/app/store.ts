// Import Third Party Libraries
import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

// Import Redux Slices
import BoardSlice from "../components/Board/BoardSlice";
// Combine Reducers
export const rootReducer = combineReducers({
  details: BoardSlice
});

// Configure Store
export const store = configureStore({
  reducer: rootReducer
});