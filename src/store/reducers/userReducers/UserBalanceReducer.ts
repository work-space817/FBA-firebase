import { IUserBalance, UserBalanceActionType } from "../types";

const initState: IUserBalance = {
  currentBalance: null,
  incomingBalance: 0,
  outcomingBalance: 0,
};
export const UserBalanceReducer = (
  state = initState,
  action: any
): IUserBalance => {
  switch (action.type) {
    case UserBalanceActionType.SET_CURRENT_BALANCE: {
      return {
        ...state,
        currentBalance: action.payload,
      };
    }
    default:
      return state;
  }
};
