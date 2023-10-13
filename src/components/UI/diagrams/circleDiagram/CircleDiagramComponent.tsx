import React, { useState } from "react";
import CircleDiagramList from "./CircleDiagramList";
import CircleDiagramUI from "./CircleDiagramUI";
import CircleDiagramItem from "./CircleDiagramList";
import { useSelector } from "react-redux";
import { ITransactionList } from "../../../../store/reducers/types";
import TransactionList from "../../transactions/TransactionList";
import { ITransaction } from "../../transactions/types";

export interface ICircleDiagramComponent {
  value: number;
  category: string | React.ReactNode;
  count: number;
}

const CircleDiagramComponent = () => {
  const fetchTransactionsData = TransactionList();
  const { transactionList } = useSelector(
    (store: any) => store.transactionList as ITransactionList
  );
  const getTransactionInfo = transactionList.filter(
    (transaction) => transaction.transactionType === "Outcome transaction"
  );
  const sumOfTransaction = getTransactionInfo.reduce(
    (accumulator: ITransaction[], current) => {
      const existingItem = accumulator.find(
        (item) => item.selectedCategories === current.selectedCategories
      );
      if (existingItem) {
        existingItem.transactionValue += current.transactionValue;
        // existingItem.count++;
      } else {
        accumulator.push(current);
      }
      return accumulator;
    },
    []
  );

  const getPercent = (percent: number) => {
    console.log(percent);
  };

  const visibleTransactionList = sumOfTransaction.map((transaction, index) => (
    <CircleDiagramItem
      key={index}
      categoryId={transaction.selectedCategories as string}
      countOfTransaction={0}
      valueOfTransaction={transaction.transactionValue}
      percentOfTransaction={0}
    />
  ));
  return (
    <>
      <CircleDiagramUI
        getPercent={getPercent}
        // outcomingList={sumOfTransaction}
      />
      <div>{visibleTransactionList}</div>
    </>
  );
};

export default CircleDiagramComponent;
