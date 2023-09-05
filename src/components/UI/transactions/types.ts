export interface ITransactionAdd {
  incomeTitle: string;
  incomeValue: number;
  incomeDate: string;
}
export interface ITransaction {
  incomeTitle: string;
  incomeValue: number;
  incomeDate: string;
  index: any;
  selectedCategories: string | React.ReactNode;
  id: string;
}
