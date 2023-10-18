import React, { useState } from "react";
import { useSelector } from "react-redux";
import { ITransactionList } from "../../../../store/reducers/types";
import TransactionList from "../../transactions/TransactionList";
import { ITransaction } from "../../transactions/types";
import { IOutcomingList } from "./types";

const OutcomingList = () => {
  const fetchTransactionsData = TransactionList();
  const { transactionList } = useSelector(
    (store: any) => store.transactionList as ITransactionList
  );
  const getOutcomingList = transactionList.filter(
    (transaction) => transaction.transactionType === "Outcome transaction"
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
