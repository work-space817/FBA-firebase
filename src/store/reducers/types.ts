import { IGoal } from "../../components/UI/goals/types";
import { ITransaction } from "../../components/UI/transactions/types";
import { ISignUp } from "../../components/auth/register/types";

export interface IAuthUser {
  isAuth: boolean;
}
export enum AuthUserActionType {
  LOGIN_USER = "AUTH_LOGIN_USER",
  LOGOUT_USER = "AUTH_LOGOUT_USER",
}
export interface IGoalList {
  goalList: IGoal[];
  isUpdatedGoaliList: boolean;
}
export enum GoalListActionType {
  GOAL_LIST = "GOAL_LIST",
  UPDATE_GOALS_LIST = "UPDATE_GOALS_LIST",
}
export interface IGoalSelect {
  selectedGoal: IGoal | null;
}
export enum GoalSelectActionType {
  GOAL_SELECT = "GOAL_SELECT",
}
export interface ISelectCategories {
  selectedCategories: string | null;
  isSelected: boolean;
}
export enum SelectCategoriesActionType {
  SELECT_CATEGORIES = "SELECT_CATEGORIES",
  UNSELECT_CATEGORIES = "UNSELECT_CATEGORIES",
}
export interface IModalCloser {
  isModalClose: boolean;
}
export enum ModalCloserActionType {
  MODAL_CLOSE = "MODAL_CLOSE",
}
export interface IUserBalance {
  isUpdatedBalance: boolean;
  currentBalance: number;
  incomingBalance?: number;
  outcomingBalance?: number;
  totalIncomingBalance?: number;
  totalOutcomingBalance?: number;
}
export enum UserBalanceActionType {
  SET_BALANCE = "SET_BALANCE",
  SET_CURRENT_BALANCE = "SET_CURRENT_BALANCE",
  SET_INCOME_BALANCE = "SET_INCOME_BALANCE",
  SET_OUTCOME_BALANCE = "SET_OUTCOME_BALANCE",
  UPDATE_BALANCE = "UPDATE_BALANCE",
}
export interface ITransactionList {
  transactionList: ITransaction[];
  isUpdatedList: boolean;
}
export enum TransactionListActionType {
  TRANSACTION_LIST = "TRANSACTION_LIST",
  UPDATE_TRANSACTION_LIST = "UPDATE_TRANSACTION_LIST",
}
