import React, { FC } from "react";
interface ISelectComponentProps {
  title: string;
  options: any[];
  label: string;
  //   selectItems: React.ReactNode | string;
}
const SelectComponent: FC<ISelectComponentProps> = ({
  title,
  options,
  label,
}) => {
  return (
    <div className="mb-3">
      <label className="form-label">{label}</label>
      <select className="form-select" aria-label="Default select example">
        <option selected disabled>
          {title}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectComponent;
