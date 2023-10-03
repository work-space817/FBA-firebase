export interface ISetUserBalance {
  currentBalance: number;
  incomingBalance?: number;
  outcomingBalance?: number;
}
export interface IGetUserBalance {
  currentBalance: number;
  incomingBalance: number;
  outcomingBalance: number;
}
