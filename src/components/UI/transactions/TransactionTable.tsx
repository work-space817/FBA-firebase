import React, { memo, useEffect, useMemo, useState } from "react";
import { ITransactionList } from "../../../store/reducers/types";
import { useSelector } from "react-redux";
import TransactionList from "./TransactionList";
import Transaction from "./Transaction";
import GoalSVG from "../../../helpers/selectorsSVG/UI/GoalSVG";
import ArrowsSVG from "../../../helpers/selectorsSVG/UI/ArrowsSVG";

const TransactionTable = memo(() => {
  const [searchTransactionList, setSearchTransactionList] = useState("");
  const fetchTransactionsData = TransactionList();
  const { transactionList } = useSelector(
    (store: any) => store.transactionList as ITransactionList
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [sortedList, setSortedList] = useState([...transactionList]);
  const itemsPerPage = 5;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const sortTransactionTable = (currentTableHeader: string) => {
    const sortedData = [...sortedList].sort((a: any, b: any) => {
      if (currentTableHeader === "transactionValue") {
        return a.transactionValue - b.transactionValue;
      } else {
        return a[currentTableHeader]?.localeCompare(b[currentTableHeader]);
      }
    });
    setSortedList(sortedData);
  };
  const searchTransaction = useMemo(() => {
    return sortedList.filter((transaction) =>
      transaction.transactionTitle
        .toLowerCase()
        .includes(searchTransactionList.toLowerCase())
    );
  }, [searchTransactionList, sortedList]);
  useEffect(() => {
    setSortedList(transactionList);
  }, [transactionList]);
  useEffect(() => {
    sortTransactionTable("transactionDate");
  }, [fetchTransactionsData]);

  const slicedData = searchTransaction.slice(startIndex, endIndex);

  const visibleTransactionList = slicedData.map((transaction, index) => (
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
          {/* {fetchTransactionsData ? <>{<Loading />}</> : <></>} */}
          <div className="d-flex justify-content-between align-items-center">
            <h4 className="p-2">Transactions history</h4>
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
                <tr>
                  <td colSpan={100} className="text-center">
                    No one transaction was exist
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      <div className="d-flex justify-content-end align-items-center gap-3 p-4 ps-0">
        <div
          className={`d-flex align-items-center rounded-4 shadow ${
            currentPage === 1 ? "d-none" : ""
          }`}
        >
          <div
            className={`p-2`}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            <ArrowsSVG id="ArrowLeft" width={"1rem"} height={"1rem"} />
            <span className="px-2">Previous</span>
          </div>
        </div>
        <div className="rounded-circle border px-2">{currentPage}</div>
        <div
          className={`d-flex align-items-center rounded-4 shadow ${
            transactionList.length >= startIndex &&
            transactionList.length <= endIndex
              ? "d-none"
              : ""
          }`}
        >
          <div className="p-2" onClick={() => setCurrentPage(currentPage + 1)}>
            <span className="px-2">Next</span>
            <ArrowsSVG id="ArrowRight" width={"1rem"} height={"1rem"} />
          </div>
        </div>
      </div>
    </>
  );
});

export default TransactionTable;
