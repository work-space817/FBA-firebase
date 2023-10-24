import React, { FC } from "react";
import SelectCategoriesSVG from "../../../../helpers/selectorsSVG/SelectCategoriesSVG";
import { ICircleDiagramItem } from "./types";

const CircleDiagramItem: FC<ICircleDiagramItem> = ({
  category,
  countOfTransaction,
  valueOfTransaction,
  percentOfTransaction,
}) => {
  return (
    <div className="d-flex justify-content-between align-items-center border-bottom  pt-2 pb-2">
      <div className="d-flex align-items-center gap-2 ">
        <SelectCategoriesSVG id={category} />

        <div className="d-flex flex-column">
          <span className="fs--1">{category}</span>
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
