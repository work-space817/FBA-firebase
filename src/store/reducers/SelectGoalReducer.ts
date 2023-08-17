import { IGoal } from "./../../components/UI/goals/Goal";
import { GoalEditActionType, IGoalSelect } from "./types";

const initState: IGoalSelect = {
  selectGoal: null,
};

export const SelectGoalReducer = (state = initState, action: any) => {
  switch (action.type) {
    case "SELECT_GOAL": {
      return {
        ...state,
        selectGoal: action.payload,
      };
    }
    default:
      return state;
  }
};
