import React, { useState } from "react";
import { useSelector } from "react-redux";
import { ITransactionList } from "../../../../store/reducers/types";
import TransactionList from "../../transactions/TransactionList";
import { ITransaction } from "../../transactions/types";

const OutcomingList = () => {
  const fetchTransactionsData = TransactionList();
  const { transactionList } = useSelector(
    (store: any) => store.transactionList as ITransactionList
  );
  const getOutcomingList = transactionList.filter(
    (transaction) => transaction.transactionType === "Outcome transaction"
  );
  const mergedTransactions = getOutcomingList.reduce(
    (result: any[], transaction) => {
      const existingCategory = result.find(
        (group) => group[0]?.category === transaction.selectedCategories
      );

      if (existingCategory) {
        existingCategory[0].summaryValue += transaction.transactionValue;
        existingCategory.push(transaction);
      } else {
        const newCategory = [
          {
            summaryValue: transaction.transactionValue,
            category: transaction.selectedCategories,
          },
          transaction,
        ];
        result.push(newCategory);
      }

      return result;
    },
    []
  );

  //   console.log(mergedTransactions);
  return mergedTransactions;
};

export default OutcomingList;
