import { IMonthAndYearRange, MonthAndYearRangeActionType } from "../types";

const initState: IMonthAndYearRange = {
  selectedMonthAndYear: {
    month: 0,
    year: 0,
  },
};

export const MonthAndYearRange = (state = initState, action: any) => {
  switch (action.type) {
    case MonthAndYearRangeActionType.SET_MONTH_AND_YEAR: {
      return {
        ...state,
        selectedMonthAndYear: action.payload,
      };
    }
  }
  return state;
};
