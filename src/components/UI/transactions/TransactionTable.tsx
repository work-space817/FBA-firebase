import React, { FC } from "react";
import { ITransactionList } from "../../../store/reducers/types";
import { useSelector } from "react-redux";
import TransactionList from "./TransactionList";
import Transaction from "./Transaction";
import GoalSVG from "../../../helpers/selectorsSVG/UI/GoalSVG";
import TransactionEmpty from "./TransactionEmpty";

interface ITransactionTable {
  maxCountTransaction?: number;
}

const TransactionTable: FC<ITransactionTable> = ({ maxCountTransaction }) => {
  const fetchTransactionsData = TransactionList();
  const { transactionList } = useSelector(
    (store: any) => store.transactionList as ITransactionList
  );
  const sortTransactionTable = (e: React.MouseEvent<HTMLElement>) => {
    console.dir(e.target);
  };
  // console.log("transactionList", transactionList);
  const visibleTransactionList = transactionList
    .slice(0, maxCountTransaction)
    .map((transaction, index) => (
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
          <div className="d-flex justify-content-between align-items-center">
            <h3 className="py-2">Transactions history</h3>
          </div>
          <table className="table w-100">
            <thead>
              <tr onClick={sortTransactionTable}>
                <th scope="col"></th>
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
