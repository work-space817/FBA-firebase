import { GoalSelectCategoriesActionType, IGoalSelectCategories } from "./types";

const initState: IGoalSelectCategories = {
  selectedGoalCategories: null,
};
export const GoalSelectCategoriesReducer = (
  state = initState,
  action: any
): IGoalSelectCategories => {
  switch (action.type) {
    case GoalSelectCategoriesActionType.GOAL_SELECT_CATEGORIES: {
      return {
        ...state,
        selectedGoalCategories: action.payload,
      };
    }
    default:
      return state;
  }
};
