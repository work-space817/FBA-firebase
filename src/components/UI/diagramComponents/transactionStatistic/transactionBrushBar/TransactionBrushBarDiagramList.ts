import React from "react";
import { useSelector } from "react-redux";
import DateFormater from "../../../../../helpers/functions/DateFormater";
import {
  ITransactionList,
  IMonthAndYearRange,
} from "../../../../../store/reducers/types";
import TransactionList from "../../../transactions/TransactionList";

const TransactionBrushBarDiagramList = () => {
  const fetchTransactionsData = TransactionList();
  const { transactionList } = useSelector(
    (store: any) => store.transactionList as ITransactionList
  );
  const { selectedMonthAndYear } = useSelector(
    (store: any) => store.monthAndYearRange as IMonthAndYearRange
  );
  const getDaysInMonth = new Date(
    selectedMonthAndYear.year,
    selectedMonthAndYear.month,
    0,
    23,
    59,
    59
  );
  const rangeFrom = new Date(
    selectedMonthAndYear.year,
    selectedMonthAndYear.month - 1,
    1
  );
  const rangeTo = getDaysInMonth;
  const sortList = transactionList.filter(
    (transaction) =>
      rangeFrom.getTime() <= DateFormater(transaction.transactionDate) &&
      DateFormater(transaction.transactionDate) <= rangeTo.getTime()
  );
  const mergedTransactions = sortList.reduce(
    (result: any[], currentTransaction) => {
      const { transactionType, transactionDate, transactionValue } =
        currentTransaction;
      const date = new Date(DateFormater(transactionDate)).getDate();
      const dateIndex = result.findIndex((item) => item.summaryDate === date);

      if (dateIndex === -1) {
        result.push({
          summaryDate: date,
          summaryType: {
            [transactionType]: {
              summaryCount: 1,
              summaryValue: transactionValue,
              transactions: [currentTransaction],
            },
          },
        });
      } else {
        if (!result[dateIndex].summaryType[transactionType]) {
          result[dateIndex].summaryType[transactionType] = {
            summaryCount: 1,
            summaryValue: transactionValue,
            transactions: [currentTransaction],
          };
        } else {
          result[dateIndex].summaryType[transactionType].summaryCount++;
          result[dateIndex].summaryType[transactionType].summaryValue +=
            transactionValue;
          result[dateIndex].summaryType[transactionType].transactions.push(
            currentTransaction
          );
        }
      }
      return result;
    },
    []
  );
  const mergedData = mergedTransactions.map((date) => {
    return {
      day: date.summaryDate,
      income: date.summaryType["Income transaction"]?.summaryValue || 0,
      outcome: date.summaryType["Outcome transaction"]?.summaryValue || 0,
    };
  });

  for (let i = 1; i <= getDaysInMonth.getDate(); i++) {
    const existingData = mergedData.find((docs) => docs.day == i);
    if (!existingData) {
      mergedData.push({
        day: i,
        income: 0,
        outcome: 0,
      });
    }
  }
  const statisticData = mergedData.sort((a, b) => a.day - b.day);
  return statisticData;
};

export default TransactionBrushBarDiagramList;
