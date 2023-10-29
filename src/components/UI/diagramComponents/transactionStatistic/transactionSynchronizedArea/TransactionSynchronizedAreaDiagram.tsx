import { FC } from "react";
import AreaDiagram from "../../../diagrams/areaDiagram/SynchronizedAreaChart";
import TransactionStatisticList from "../../../diagrams/TransactionStatisticList";
import SynchronizedAreaChart from "../../../diagrams/areaDiagram/SynchronizedAreaChart";

// interface ITransactionSynchronizedAreaDiagram {
//   circleColor: string;
//   transactionType: string;
// }
// const TransactionSynchronizedAreaDiagram: FC<
//   ITransactionSynchronizedAreaDiagram
// > = ({ circleColor, transactionType }) => {
//   const transactionList = TransactionStatisticList().filter(
//     (transaction) => transaction.summaryType === transactionType
//   );

const TransactionSynchronizedAreaDiagram = () => {
  const transactionList = TransactionStatisticList();
  return (
    <>
      <SynchronizedAreaChart circleColor={""} statisticData={[]} />
    </>
  );
};

export default TransactionSynchronizedAreaDiagram;
