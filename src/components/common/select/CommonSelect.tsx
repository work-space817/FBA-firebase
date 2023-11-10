import React, { FC } from "react";

interface ICommonSelect {
  options: any[];
  defaultValue?: string;
}
const CommonSelect: FC<ICommonSelect> = ({ options, defaultValue }) => {
  return (
    <select className="form-select w-25 mb-4 rounded-5">
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default CommonSelect;
