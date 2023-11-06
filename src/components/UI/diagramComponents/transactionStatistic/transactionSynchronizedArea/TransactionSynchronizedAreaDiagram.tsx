import { FC } from "react";
import SynchronizedAreaChart from "../../../../../lib/recharts/areaDiagram/SynchronizedAreaChart";
import TransactionSynchronizedAreaList from "./TransactionSynchronizedAreaList";

const TransactionSynchronizedAreaDiagram = () => {
  const transactionList = TransactionSynchronizedAreaList();
  return (
    <>
      <SynchronizedAreaChart statisticData={transactionList} />
    </>
  );
};

export default TransactionSynchronizedAreaDiagram;
