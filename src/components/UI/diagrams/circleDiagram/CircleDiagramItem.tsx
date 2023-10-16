import React, { FC } from "react";
import SelectCategoriesSVG from "../../../../helpers/selectorsSVG/SelectCategoriesSVG";
import { ICircleDiagramItem } from "./types";
import { useSelector } from "react-redux";
import { ITransactionList } from "../../../../store/reducers/types";
import TransactionList from "../../transactions/TransactionList";

const CircleDiagramItem: FC<ICircleDiagramItem> = ({
  categoryId,
  countOfTransaction,
  valueOfTransaction,
  percentOfTransaction,
}) => {
  return (
    <div className="d-flex justify-content-between align-items-center border-bottom  pt-2 pb-2">
      <div className="d-flex align-items-center gap-2 ">
        <SelectCategoriesSVG id={categoryId[0]} />

        <div className="d-flex flex-column">
          <span className="fs--1">{categoryId}</span>
          <span className="fs--1">{countOfTransaction} transaction</span>
        </div>
      </div>
      <div className="text-end d-flex flex-column">
        <span className="fs--1">{valueOfTransaction} $</span>
        <span className="fs--1">{percentOfTransaction}%</span>
      </div>
    </div>
  );
};

export default CircleDiagramItem;
