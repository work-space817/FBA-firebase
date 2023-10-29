import React, { useState } from "react";
import { useSelector } from "react-redux";
import { IDatesRange, ITransactionList } from "../../../store/reducers/types";
import TransactionList from "../transactions/TransactionList";
import { ITransactionStatisticList } from "../diagramComponents/transactionStatistic/transactionCircle/types";
import { parse } from "date-fns";

const TransactionStatisticList = () => {
  const fetchTransactionsData = TransactionList();
  const { transactionList } = useSelector(
    (store: any) => store.transactionList as ITransactionList
  );
  const dateFormater = (transactionDate: string) => {
    const dateInMilliseconds = parse(
      transactionDate,
      "dd.MM.yyyy",
      new Date()
    ).getTime();
    return dateInMilliseconds;
  };
  const { ranges } = useSelector(
    (store: any) => store.datesRange as IDatesRange
  );
  const sortList = transactionList.filter(
    (transaction) =>
      ranges.from <= dateFormater(transaction.transactionDate) &&
      dateFormater(transaction.transactionDate) <= ranges.to
  );
  const mergedTransactions = sortList.reduce(
    (result: ITransactionStatisticList[], transaction) => {
      const category = transaction.selectedCategories;
      const existingCategory = result.find(
        (group) => group.summaryCategory === category
      );

      if (existingCategory) {
        existingCategory.transactions.push(transaction);
        existingCategory.summaryValue += transaction.transactionValue;
        existingCategory.summaryCount = existingCategory.transactions.length;
      } else {
        const summary = {
          summaryCategory: category,
          summaryValue: transaction.transactionValue,
          summaryType: transaction.transactionType,
          summaryCount: 1,
          transactions: [transaction],
        };
        result.push(summary);
      }
      return result;
    },
    []
  );
  console.log(mergedTransactions);
  return mergedTransactions;
};

export default TransactionStatisticList;