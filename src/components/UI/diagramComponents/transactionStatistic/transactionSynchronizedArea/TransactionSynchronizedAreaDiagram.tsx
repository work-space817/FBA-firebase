import { FC } from "react";
import TransactionStatisticList from "../transactionCircle/TransactionStatisticList";
import SynchronizedAreaChart from "../../../../../lib/recharts/areaDiagram/SynchronizedAreaChart";

const TransactionSynchronizedAreaDiagram = () => {
  const transactionList = TransactionStatisticList();
  return (
    <>
      <SynchronizedAreaChart circleColor={""} statisticData={[]} />
    </>
  );
};

export default TransactionSynchronizedAreaDiagram;
