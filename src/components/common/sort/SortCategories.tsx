import { FC, useState } from "react";

interface ISortCategoriesProps {
  icons: any[];
  title: string;
}

const SortCategories: FC<ISortCategoriesProps> = ({ icons, title }) => {
  return (
    <>
      <div className="col-2">
        <select
          disabled
          className="form-select"
          aria-label="Default select example"
        >
          <option value="">Sort by</option>
          <option value="">Index</option>
          <option value="">Reciever</option>
          <option value="">Type</option>
          <option value="">Time</option>
          <option value="">Date</option>
          <option value="">Amount</option>
        </select>
      </div>
    </>
  );
};

export default SortCategories;
