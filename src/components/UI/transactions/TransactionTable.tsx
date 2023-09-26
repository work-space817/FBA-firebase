import React, { FC, useEffect, useMemo, useState } from "react";
import {
  ITransactionList,
  TransactionListActionType,
} from "../../../store/reducers/types";
import { useSelector } from "react-redux";
import TransactionList from "./TransactionList";
import Transaction from "./Transaction";
import GoalSVG from "../../../helpers/selectorsSVG/UI/GoalSVG";
import TransactionEmpty from "./TransactionEmpty";
import { useDispatch } from "react-redux";

interface ITransactionTable {
  maxCountTransaction?: number;
}

const TransactionTable: FC<ITransactionTable> = ({ maxCountTransaction }) => {
  const dispatch = useDispatch();
  const [searchTransactionList, setSearchTransactionList] = useState("");
  const fetchTransactionsData = TransactionList();
  const { transactionList } = useSelector(
    (store: any) => store.transactionList as ITransactionList
  );

  const sortTransactionTable = (currentTableHeader: string) => {
    const sortedList = [...transactionList].sort((a: any, b: any) =>
      a[currentTableHeader]?.localeCompare(b[currentTableHeader])
    );
    console.table(sortedList);
    const transactionSortedList = dispatch({
      type: TransactionListActionType.TRANSACTION_LIST,
      payload: sortedList,
    });
    console.log("transactionSortedList: ", transactionSortedList);
  };
  const searchTransaction = useMemo(() => {
    return transactionList.filter((transaction) =>
      transaction.transactionTitle.includes(searchTransactionList)
    );
  }, [searchTransactionList]);

  console.log(searchTransaction);

  const visibleTransactionList = (
    searchTransaction.length > 0 ? searchTransaction : transactionList
  )
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
        <div className="p-2 p-sm-3">
          <div className="d-flex justify-content-between align-items-center">
            <h3 className="p-2">Transactions history</h3>
            <input
              className="w-25 form-control"
              aria-describedby="emailHelp"
              value={searchTransactionList}
              onChange={(e) => setSearchTransactionList(e.target.value)}
              placeholder={"Search"}
            />
          </div>
          <table className="table w-100">
            <thead>
              <tr>
                <th scope="col"></th>
                <th
                  scope="col"
                  onClick={() => sortTransactionTable("transactionNumber")}
                >
                  №
                </th>
                <th
                  scope="col"
                  onClick={() => sortTransactionTable("transactionTitle")}
                >
                  Reciever
                </th>
                <th
                  scope="col"
                  onClick={() => sortTransactionTable("selectedCategories")}
                >
                  Category
                </th>
                <th
                  scope="col"
                  className="d-none d-sm-table-cell"
                  onClick={() => sortTransactionTable("transactionTime")}
                >
                  Time
                </th>
                <th
                  scope="col"
                  className="d-none d-sm-table-cell"
                  onClick={() => sortTransactionTable("transactionDate")}
                >
                  Date
                </th>
                <th
                  scope="col"
                  onClick={() => sortTransactionTable("transactionValue")}
                >
                  Amount
                </th>
                <th scope="col">
                  <GoalSVG id="Edit" />
                </th>
              </tr>
            </thead>
            <tbody>
              {visibleTransactionList.length > 0 ? (
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
