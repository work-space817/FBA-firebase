export interface IGoal {
  cost: string;
  date: string;
  title: string;
  index: any;
  selectGoals?: (currentGoal: any) => void;
}
