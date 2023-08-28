import {
  GoalSelectCategoriesActionType,
  IGoalSelectCategories,
} from "../types";

const initState: IGoalSelectCategories = {
  selectedGoalCategories: null,
  isSelectedGoalCategories: false,
};
export const GoalSelectCategoriesReducer = (
  state = initState,
  action: any
): IGoalSelectCategories => {
  switch (action.type) {
    case GoalSelectCategoriesActionType.GOAL_SELECT_CATEGORIES: {
      return {
        ...state,
        isSelectedGoalCategories: true,
        selectedGoalCategories: action.payload,
      };
    }
    default:
      return state;
  }
};
