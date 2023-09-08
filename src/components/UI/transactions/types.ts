export interface ITransactionAdd {
  incomeTitle: string;
  incomeValue: number;
  incomeTime: string;
  incomeDate: string;
}
export interface ITransaction {
  incomeTitle: string;
  incomeValue: number;
  incomeTime: string;
  incomeDate: string;
  transactionType: string;
  index: any;
  selectedCategories: string | React.ReactNode;
  id: string;
}
