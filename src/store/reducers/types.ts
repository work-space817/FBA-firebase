import { IGoal } from "../../components/UI/goals/types";

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
}
export enum SelectCategoriesActionType {
  SELECT_CATEGORIES = "SELECT_CATEGORIES",
}
export interface IModalCloser {
  isModalClose: boolean;
}
export enum ModalCloserActionType {
  MODAL_CLOSE = "MODAL_CLOSE",
}
