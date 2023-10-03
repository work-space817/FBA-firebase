import { IUserBalance, UserBalanceActionType } from "../types";

const initState: IUserBalance = {
  isUpdatedBalance: false,
  currentBalance: 0,
  incomingBalance: 0,
  outcomingBalance: 0,
  totalIncomingBalance: 0,
  totalOutcomingBalance: 0,
};
export const UserBalanceReducer = (
  state = initState,
  action: any
): IUserBalance => {
  switch (action.type) {
    case UserBalanceActionType.SET_BALANCE: {
      return {
        ...state,
        currentBalance: action.payload,
        // currentBalance: state.currentBalance + action.payload,
        // incomingBalance: action.payload,
        // outcomingBalance: action.payload,
        // totalIncomingBalance: state.incomingBalance + action.payload,
        // totalOutcomingBalance: state.outcomingBalance + action.payload,
      };
    }
    case UserBalanceActionType.SET_INCOME_BALANCE: {
      return {
        ...state,
        currentBalance: state.currentBalance + action.payload,
        incomingBalance: action.payload,
        totalIncomingBalance: state.incomingBalance + action.payload,
      };
    }
    case UserBalanceActionType.SET_OUTCOME_BALANCE: {
      return {
        ...state,
        currentBalance: state.currentBalance - action.payload,
        outcomingBalance: action.payload,
        totalOutcomingBalance: state.outcomingBalance + action.payload,
      };
    }
    case UserBalanceActionType.UPDATE_BALANCE:
      return {
        ...state,
        isUpdatedBalance: true,
      };
    default:
      return state;
  }
};
