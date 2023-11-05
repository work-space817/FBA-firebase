import { FC, useState } from "react";
import TransactionCircleDiagramItem from "./TransactionCircleDiagramItem";
import TransactionStatisticList from "./TransactionStatisticList";
import { ITransactionStatisticList } from "../types";
import CustomActiveShapePieDiagram from "../../../../../lib/recharts/circleDiagram/CustomActiveShapePieDiagram";

interface ITransactionCircleDiagram {
  circleColor: string;
  transactionType: string;
}

const TransactionCircleDiagram: FC<ITransactionCircleDiagram> = ({
  circleColor,
  transactionType,
}) => {
  console.log(TransactionStatisticList());
  const transactionList = TransactionStatisticList().filter(
    (transaction) => transaction.summaryType === transactionType
  );
  const visibleTransactionList = transactionList
    .sort((a: any, b: any) => b.summaryValue - a.summaryValue)
    .map((transaction: ITransactionStatisticList, index) => (
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
        statisticData={transactionList}
      />
      <div className="visibleTransactionList px-3">
        {transactionList.length > 0 ? (
          visibleTransactionList
        ) : (
          <h5 className="text-center">No one transaction was done</h5>
        )}
      </div>
    </>
  );
};

export default TransactionCircleDiagram;
