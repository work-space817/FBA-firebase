import React, { useState } from "react";
import CircleDiagramUI from "./CircleDiagramUI";
import CircleDiagramItem from "./CircleDiagramItem";
import OutcomingList from "./OutcomingList";

const CircleDiagramComponent = () => {
  const transactionList = OutcomingList();

  console.log("transactionList: ", transactionList);

  const getPercent = (percent: number) => {
    // console.log(percent);
  };

  const visibleTransactionList = transactionList.map((transaction, index) => (
    <CircleDiagramItem
      key={index}
      categoryId={transaction.map((doc: any) => doc.category)}
      countOfTransaction={transaction.length - 1}
      valueOfTransaction={transaction.map((doc: any) => doc.summaryValue)}
      percentOfTransaction={0}
    />
  ));
  return (
    <>
      <CircleDiagramUI getPercent={getPercent} />
      <div>{visibleTransactionList}</div>
    </>
  );
};

export default CircleDiagramComponent;
