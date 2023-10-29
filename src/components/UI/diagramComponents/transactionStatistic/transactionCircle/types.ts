import { ITransaction } from "../../../transactions/types";

export interface ITransactionCircleDiagramItem {
  category: string;
  countOfTransaction: number;
  valueOfTransaction: number;
  percentOfTransaction: number;
}
export interface ITransactionStatisticList {
  summaryPercent?: number;
  summaryCategory: string;
  summaryType: string;
  summaryValue: number;
  summaryCount: number;
  transactions: ITransaction[];
}
