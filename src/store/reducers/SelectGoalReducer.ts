import { GoalEditActionType, IGoalSelect } from "./types";

const initState: IGoalSelect = {
  isGoalSelect: false,
};

export const SelectGoalReducer = (state = initState, action: any) => {
  switch (action.type) {
    case GoalEditActionType.GOAL_EDIT_OPEN: {
      return {
        ...state,
        isGoalSelect: true,
      };
    }
    case GoalEditActionType.GOAL_EDIT_CLOSE: {
      return {
        ...state,
        isGoalSelect: false,
      };
    }
  }
  return state;
};
