import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import { AuthReducer } from "./reducers/AuthReducer";
import { SelectGoalReducer } from "./reducers/SelectGoalReducer";
import { GoalSelectCategoriesReducer } from "./reducers/GoalSelectCategoriesReducer";
import { GoalListReducer } from "./reducers/GoalListReducer";

export const rootReducer = combineReducers({
  auth: AuthReducer,
  selectGoal: SelectGoalReducer,
  goalSelectCategories: GoalSelectCategoriesReducer,
  goalList: GoalListReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: [thunk],
});
