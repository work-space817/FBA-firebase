import { IGoal } from "../../components/UI/goals/types";
export interface IAuthUser {
  isAuth: boolean;
}

export enum AuthUserActionType {
  LOGIN_USER = "AUTH_LOGIN_USER",
  LOGOUT_USER = "AUTH_LOGOUT_USER",
}

export interface IGoalSelect {
  isGoalSelect: boolean;
  goal?: IGoal;
}
export enum GoalEditActionType {
  GOAL_EDIT_OPEN = "GOAL_EDIT_OPEN",
  GOAL_EDIT_CLOSE = "GOAL_EDIT_CLOSE",
}
