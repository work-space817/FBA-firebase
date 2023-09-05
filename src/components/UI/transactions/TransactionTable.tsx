import React from "react";
import { ITransactionList } from "../../../store/reducers/types";
import { useSelector } from "react-redux";
import TransactionList from "./TransactionList";
import Transaction from "./Transaction";

const TransactionTable = () => {
  const fetchTransactionsData = TransactionList();
  const { transactionList } = useSelector(
    (store: any) => store.transactionList as ITransactionList
  );
  console.log("transactionList", transactionList);
  const visibleTransactionList = transactionList.map((transaction, index) => (
    <Transaction
      key={index}
      incomeTitle={transaction.incomeTitle}
      incomeValue={transaction.incomeValue}
      incomeDate={transaction.incomeDate}
      index={index}
      selectedCategories={transaction.selectedCategories}
      id={transaction.id}
    />
  ));
  return (
    <>
      <table className="table ">
        <thead>
          <tr>
            <th scope="col">Reciever</th>
            <th scope="col">Type</th>
            <th scope="col">Date</th>
            <th scope="col">Amount</th>
          </tr>
        </thead>
        <tbody>{visibleTransactionList}</tbody>
      </table>
    </>
  );
};

export default TransactionTable;
