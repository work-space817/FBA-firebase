import { IGoal } from "../../components/UI/goals/types";

export const setGoals = (goals: IGoal[]) => ({
  type: "SET_GOALS",
  payload: { goals },
});
