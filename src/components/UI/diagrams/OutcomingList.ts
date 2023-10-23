import React, { useState } from "react";
import { useSelector } from "react-redux";
import { IDatesRange, ITransactionList } from "../../../store/reducers/types";
import TransactionList from "../transactions/TransactionList";
import { ITransaction } from "../transactions/types";
import { IOutcomingList } from "./circleDiagram/types";
import { parse } from "date-fns";

const OutcomingList = () => {
  const fetchTransactionsData = TransactionList();
  const { transactionList } = useSelector(
    (store: any) => store.transactionList as ITransactionList
  );
  //! selector ranges
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
  const getOutcomingList = transactionList.filter(
    (transaction) =>
      // transaction.transactionType === "Outcome transaction" &&
      ranges.from <= dateFormater(transaction.transactionDate) &&
      dateFormater(transaction.transactionDate) <= ranges.to
  );
  const mergedTransactions = getOutcomingList.reduce(
    (result: IOutcomingList[], transaction) => {
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
          summaryCount: 1,
          transactions: [transaction],
        };
        result.push(summary);
      }
      return result;
    },
    []
  );

  // console.log(mergedTransactions);
  return mergedTransactions;
};

export default OutcomingList;
