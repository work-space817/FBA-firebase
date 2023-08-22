import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { AuthReducer } from "./reducers/AuthReducer";
import { SelectGoalReducer } from "./reducers/SelectGoalReducer";
import { GoalSelectCategoriesReducer } from "./reducers/GoalSelectCategoriesReducer";

export const rootReducer = combineReducers({
  auth: AuthReducer,
  selectGoal: SelectGoalReducer,
  goalSelectCategories: GoalSelectCategoriesReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: [thunk],
});
