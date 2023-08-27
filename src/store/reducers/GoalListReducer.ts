import { IGoal } from "../../components/UI/goals/types";
import { GoalListActionType, IGoalList } from "./types";

const initState: IGoalList = {
  goalList: [],
};
type Action = { type: "SET_GOALS"; payload: { goals: IGoal[] } };

export const GoalListReducer = (
  state = initState,
  action: Action
): IGoalList => {
  switch (action.type) {
    case "SET_GOALS":
      return {
        ...state,
        goalList: action.payload.goals,
      };
    default:
      return state;
  }
};
