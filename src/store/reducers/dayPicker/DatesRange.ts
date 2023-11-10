import { DatesRangeActionType, IDatesRange } from "../types";

const initState: IDatesRange = {
  ranges: { from: 0, to: 0 },
};

export const DatesRange = (state = initState, action: any) => {
  switch (action.type) {
    case DatesRangeActionType.SET_DATES_RANGE: {
      return {
        ...state,
        ranges: action.payload,
      };
    }
  }
  return state;
};
