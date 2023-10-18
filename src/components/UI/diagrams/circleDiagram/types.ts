import { ITransaction } from "../../transactions/types";

export interface ICircleDiagramItem {
  category: string;
  countOfTransaction: number;
  valueOfTransaction: number;
  percentOfTransaction: number;
}
export interface IOutcomingList {
  summaryPercent?: number;
  summaryCategory: string;
  summaryValue: number;
  summaryCount: number;
  transactions: ITransaction[];
}
