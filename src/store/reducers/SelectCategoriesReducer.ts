import { SelectCategoriesActionType, ISelectCategories } from "./types";

const initState: ISelectCategories = {
  selectedCategories: null,
};
export const SelectCategoriesReducer = (
  state = initState,
  action: any
): ISelectCategories => {
  switch (action.type) {
    case SelectCategoriesActionType.SELECT_CATEGORIES: {
      return {
        ...state,
        selectedCategories: action.payload,
      };
    }
    default:
      return state;
  }
};
