import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ITransactionList,
  TransactionListActionType,
} from "../../../store/reducers/types";
import { ITransaction } from "./types";
import getTransactionData from "../../../api/transactions/getTransactionData";

const TransactionList = () => {
  const [transactionList, setTransactionList] = useState<ITransaction[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch();
  const { isUpdatedList } = useSelector(
    (store: any) => store.transactionList as ITransactionList
  );

  const fetchUserTransactions = async () => {
    try {
      setLoading(true);
      const fetchTransactions = await getTransactionData();
      const transactionData = fetchTransactions.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as ITransaction[];
      setTransactionList(transactionData);
      console.log("transactionData: ", transactionData);
      const transactionList = dispatch({
        type: TransactionListActionType.TRANSACTION_LIST,
        payload: transactionData,
      });
      setLoading(false);
    } catch (error) {
      console.error("Сталася помилка при отриманні цілей користувача:", error);
    }
  };
  useEffect(() => {
    fetchUserTransactions();
  }, [isUpdatedList]);
  return loading;
};

export default TransactionList;