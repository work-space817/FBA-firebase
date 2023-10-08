import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ITransactionList,
  TransactionListActionType,
} from "../../../store/reducers/types";
import { ITransaction } from "./types";
import getTransactionData from "../../../api/transactions/getTransactionData";

const TransactionList = (currentPage: number) => {
  const [loading, setLoading] = useState<boolean>(false);
  const itemsPerPage = 10; // Кількість елементів на сторінці

  const dispatch = useDispatch();
  const { isUpdatedList } = useSelector(
    (store: any) => store.transactionList as ITransactionList
  );

  const fetchUserTransactions = async () => {
    try {
      setLoading(true);
      const fetchTransactions = await getTransactionData();
      const transactionData = fetchTransactions.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as ITransaction[];
      console.log("transactionData: ", transactionData);
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      const slicedData = transactionData.slice(startIndex, endIndex);

      console.log("slicedData: ", slicedData);
      const transactionList = dispatch({
        type: TransactionListActionType.TRANSACTION_LIST,
        payload: slicedData,
      });
      setLoading(false);
    } catch (error) {
      console.error(
        "Сталася помилка при отриманні транзакцій користувача:",
        error
      );
    }
  };

  useEffect(() => {
    fetchUserTransactions();
  }, [isUpdatedList, currentPage]);

  return loading;
};

export default TransactionList;
