import { FC, useState } from "react";
import TransactionCircleDiagramItem from "./TransactionCircleDiagramItem";
import CustomActiveShapePieDiagram from "../../../../../lib/recharts/circleDiagram/CustomActiveShapePieDiagram";
import TransactionCircleStatisticList from "./TransactionCircleStatisticList";
import { ITransactionCircleStatisticList } from "./types";

interface ITransactionCircleDiagram {
  circleColor: string;
  transactionType: string;
}
const TransactionCircleDiagram: FC<ITransactionCircleDiagram> = ({
  circleColor,
  transactionType,
}) => {
  const transactionList = TransactionCircleStatisticList();
  const transactionListByType = transactionList.filter(
    (transaction) => transaction.summaryType === transactionType
  );
  const visibleTransactionList = transactionListByType
    .sort((a: any, b: any) => b.summaryValue - a.summaryValue)
    .map((transaction: ITransactionCircleStatisticList, index) => (
      <TransactionCircleDiagramItem
        key={index}
        category={transaction.summaryCategory}
        countOfTransaction={transaction.summaryCount}
        valueOfTransaction={transaction.summaryValue}
        percentOfTransaction={0}
      />
    ));
  return (
    <>
      <CustomActiveShapePieDiagram
        circleColor={circleColor}
        statisticData={transactionListByType}
      />
      <div className="visibleTransactionList px-3">
        {transactionListByType.length > 0 ? (
          visibleTransactionList
        ) : (
          <h5 className="text-center">No one transaction was done</h5>
        )}
      </div>
    </>
  );
};

export default TransactionCircleDiagram;
