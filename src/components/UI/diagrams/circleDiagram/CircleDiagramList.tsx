import React from "react";
import SelectCategoriesSVG from "../../../../helpers/selectorsSVG/SelectCategoriesSVG";

const CircleDiagramList = () => {
  return (
    <div className="d-flex justify-content-between align-items-center border-bottom  pt-2 pb-2">
      <div className="d-flex align-items-center gap-2 ">
        <SelectCategoriesSVG id={"Shopping"} />

        <div className="d-flex flex-column">
          <span className="fs--1">Shopping</span>
          <span className="fs--1">n transaction</span>
        </div>
      </div>
      <div className="text-end d-flex flex-column">
        <span className="fs--1">-650.00 $</span>
        <span className="fs--1">70%</span>
      </div>
    </div>
  );
};

export default CircleDiagramList;
