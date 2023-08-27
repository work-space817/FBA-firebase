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
}
export enum GoalListActionType {
  GOAL_LIST = "GOAL_LIST",
}

export interface IGoalSelect {
  selectedGoal: IGoal | null;
}
export enum GoalSelectActionType {
  GOAL_SELECT = "GOAL_SELECT",
}
export interface IGoalSelectCategories {
  isSelectedGoalCategories: boolean;
  selectedGoalCategories: string | null;
}
export enum GoalSelectCategoriesActionType {
  GOAL_SELECT_CATEGORIES = "GOAL_SELECT_CATEGORIES",
}
