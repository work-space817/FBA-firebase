import { FC, useState } from "react";
import CircleDiagramItem from "./TransactionCircleDiagramItem";
import CustomActiveShapePieDiagram from "../../../diagrams/circleDiagram/CustomActiveShapePieDiagram";
import TransactionStatisticList from "../../../diagrams/TransactionStatisticList";
import { ITransactionStatisticList } from "../types";

interface ITransactionCircleDiagram {
  circleColor: string;
  transactionType: string;
}

const TransactionCircleDiagram: FC<ITransactionCircleDiagram> = ({
  circleColor,
  transactionType,
}) => {
  const transactionList = TransactionStatisticList().filter(
    (transaction) => transaction.summaryType === transactionType
  );
  const visibleTransactionList = transactionList
    .sort((a: any, b: any) => b.summaryValue - a.summaryValue)
    .map((transaction: ITransactionStatisticList, index) => (
      <CircleDiagramItem
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
