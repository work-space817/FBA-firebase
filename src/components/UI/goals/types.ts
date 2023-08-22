export interface IGoal {
  cost: string;
  expireDate: string;
  title: string;
  index: any;
  selectedGoalCategories: string | React.ReactNode;
  id: string;
}
export interface IGoalAdd {
  title: string;
  cost: string;
  expireDate: string;
}

export interface IGoalEdit {
  title: string;
  cost: string;
  expireDate: string;
}
