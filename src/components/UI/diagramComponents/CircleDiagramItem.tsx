import React, { FC } from "react";
import SelectCategoriesSVG from "../../../helpers/selectorsSVG/SelectCategoriesSVG";
interface ICircleDiagramItem {
  category: string;
  count: number;
  value: number;
  percent: number;
  typeOfAction: string;
}
const CircleDiagramItem: FC<ICircleDiagramItem> = ({
  category,
  count,
  value,
  percent,
  typeOfAction,
}) => {
  return (
    <div className="d-flex justify-content-between align-items-center border-bottom  pt-2 pb-2">
      <div className="d-flex align-items-center gap-2 ">
        <SelectCategoriesSVG id={category} />

        <div className="d-flex flex-column">
          <span className="fs--1">{category}</span>
          <span className="fs--1">
            {count} {typeOfAction}
          </span>
        </div>
      </div>
      <div className="text-end d-flex flex-column">
        <span className="fs--1">{value} $</span>
        <span className="fs--1">{percent}%</span>
      </div>
    </div>
  );
};

export default CircleDiagramItem;
