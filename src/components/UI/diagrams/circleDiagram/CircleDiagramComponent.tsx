import React from "react";
import CircleDiagramList from "./CircleDiagramList";
import CircleDiagramUI from "./CircleDiagramUI";
import CircleDiagramItem from "./CircleDiagramList";
import { useSelector } from "react-redux";
import { ITransactionList } from "../../../../store/reducers/types";
import TransactionList from "../../transactions/TransactionList";
import { ITransaction } from "../../transactions/types";

interface Iw {
  value: number;
  category: string | React.ReactNode;
}

const CircleDiagramComponent = () => {
  const fetchTransactionsData = TransactionList();
  const { transactionList } = useSelector(
    (store: any) => store.transactionList as ITransactionList
  );
  const getTransactionInfo = transactionList
    .map((transaction) => transaction)
    .filter(
      (transaction) => transaction.transactionType === "Outcome transaction"
    );

  const sumOfTransaction = () => {
    const sum: Iw[] = getTransactionInfo.map((transaction) => ({
      value: transaction.transactionValue,
      category: transaction.selectedCategories,
    }));
    const result: Iw[] = sum.reduce((accumulator: Iw[], current) => {
      const existingItem = accumulator.find(
        (item) => item.category === current.category
      );
      if (existingItem) {
        existingItem.value += current.value;
      } else {
        accumulator.push(current);
      }
      return accumulator;
    }, []);
    console.log("result", result);

    // .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    console.log("sum", sum);
    return result;
  };
  sumOfTransaction();

  const visibleTransactionList = sumOfTransaction().map(
    (transaction, index) => (
      <CircleDiagramItem
        key={index}
        categoryId={transaction.category as string}
        countOfTransaction={0}
        valueOfTransaction={transaction.value}
      />
    )
  );
  return (
    <>
      <CircleDiagramUI />
      <div>{visibleTransactionList}</div>
    </>
  );
};

export default CircleDiagramComponent;
