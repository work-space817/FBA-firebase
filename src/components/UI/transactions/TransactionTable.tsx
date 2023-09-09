import React from "react";
import { ITransactionList } from "../../../store/reducers/types";
import { useSelector } from "react-redux";
import TransactionList from "./TransactionList";
import Transaction from "./Transaction";
import GoalSVG from "../../../helpers/selectorsSVG/UI/GoalSVG";
import TransactionEmpty from "./TransactionEmpty";

const TransactionTable = () => {
  const fetchTransactionsData = TransactionList();
  const { transactionList } = useSelector(
    (store: any) => store.transactionList as ITransactionList
  );
  console.log("transactionList", transactionList);
  const visibleTransactionList = transactionList.map((transaction, index) => (
    <Transaction
      key={index}
      transactionTitle={transaction.transactionTitle}
      transactionValue={transaction.transactionValue}
      transactionTime={transaction.transactionTime}
      transactionDate={transaction.transactionDate}
      transactionType={transaction.transactionType}
      index={index}
      selectedCategories={transaction.selectedCategories}
      id={transaction.id}
    />
  ));
  return (
    <>
      <div className="col d-flex flex-column rounded-5 shadow">
        <div className="p-3">
          <h3 className="py-2">Transactions history</h3>
          <table className="table w-100">
            <thead>
              <tr>
                <th scope="col"> </th>
                <th scope="col">№</th>
                <th scope="col">Reciever</th>
                <th scope="col">Type</th>
                <th scope="col">Time</th>
                <th scope="col">Date</th>
                <th scope="col">Amount</th>
                <th scope="col">
                  <GoalSVG id="Edit" />
                </th>
              </tr>
            </thead>
            <tbody>
              {transactionList.length > 0 ? (
                <>{visibleTransactionList}</>
              ) : (
                <TransactionEmpty />
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default TransactionTable;
