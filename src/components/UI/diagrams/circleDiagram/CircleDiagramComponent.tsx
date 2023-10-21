import React, { useState } from "react";
import CircleDiagramUI from "./CircleDiagramUI";
import CircleDiagramItem from "./CircleDiagramItem";
import OutcomingList from "../OutcomingList";
import { ITransaction } from "../../transactions/types";
import { IOutcomingList } from "./types";

const CircleDiagramComponent = () => {
  const transactionList = OutcomingList();
  const transactionPercent: any[] = [];
  const getPercent = (percent: number) => {
    console.log(percent);

    transactionPercent.push(percent);
    // console.log("transactionPercent: ", transactionPercent);
  };

  const visibleTransactionList = transactionList.map(
    (transaction: IOutcomingList, index) => (
      <CircleDiagramItem
        key={index}
        category={transaction.summaryCategory}
        countOfTransaction={transaction.summaryCount}
        valueOfTransaction={transaction.summaryValue}
        percentOfTransaction={0}
      />
    )
  );
  return (
    <>
      <CircleDiagramUI getPercent={getPercent} />
      <div>{visibleTransactionList}</div>
    </>
  );
};

export default CircleDiagramComponent;
