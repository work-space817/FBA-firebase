export interface IGoal {
  cost: string;
  expireDate: string;
  title: string;
  index: any;
  selectedCategories: string | React.ReactNode;
  id: string;
  isExpire: boolean;
}
export interface IGoalAdd {
  title: string;
  cost: string;
  isExpire: boolean;
}

export interface IGoalEdit {
  title: string;
  cost: string;
  expireDate: string;
}
