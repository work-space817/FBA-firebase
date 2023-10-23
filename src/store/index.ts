import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import { AuthReducer } from "./reducers/AuthReducer";
import { SelectGoalReducer } from "./reducers/goalReducers/SelectGoalReducer";
import { SelectCategoriesReducer } from "./reducers/SelectCategoriesReducer";
import { GoalListReducer } from "./reducers/goalReducers/GoalListReducer";
import { ModalCloserReducer } from "./reducers/ModalCloserReducer";
import { UserBalanceReducer } from "./reducers/userReducers/UserBalanceReducer";
import { TransactionListReducer } from "./reducers/transactionReducers/TransactionListReducer";
import { DatesRange } from "./reducers/DatesRange";

export const rootReducer = combineReducers({
  auth: AuthReducer,
  selectCategories: SelectCategoriesReducer,
  selectGoal: SelectGoalReducer,
  goalList: GoalListReducer,
  transactionList: TransactionListReducer,
  modalClose: ModalCloserReducer,
  userBalance: UserBalanceReducer,
  datesRange: DatesRange,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: [thunk],
});
