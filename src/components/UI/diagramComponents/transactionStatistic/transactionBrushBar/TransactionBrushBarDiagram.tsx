import React from "react";
import BrushBarDiagram from "../../../../../lib/recharts/brushBarDiagram/BrushBarDiagram";
import TransactionBrushBarDiagramList from "./TransactionBrushBarDiagramList";

const TransactionBrushBarDiagram = () => {
  const transactionList = TransactionBrushBarDiagramList();
  return (
    <>
      <BrushBarDiagram statisticData={transactionList}></BrushBarDiagram>
    </>
  );
};

export default TransactionBrushBarDiagram;
