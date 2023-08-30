import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { SelectCategoriesActionType } from "../../../store/reducers/types";

interface ISelectCategoriesProps {
  icons: any[];
  title: string;
}

const SelectCategories: FC<ISelectCategoriesProps> = ({ icons, title }) => {
  const [isActive, setisActive] = useState<number | null>(null);
  const dispatch = useDispatch();
  const selectIcon = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    const seletedCategories = e.currentTarget.textContent;
    console.log(seletedCategories);
    setisActive(index);
    dispatch({
      type: SelectCategoriesActionType.SELECT_CATEGORIES,
      payload: seletedCategories,
    });
  };

  return (
    <>
      <label className="form-label">{title}</label>
      <div className="d-flex flex-wrap gap-2 pb-3">
        {icons.map((icon, index) => (
          <div
            key={index}
            className={`rounded-3 shadow ${
              isActive === index ? "bg-custom-hover text-white" : ""
            }`}
            onClick={(e) => selectIcon(e, index)}
          >
            <div className="d-flex align-items-center gap-2 p-2">
              {icon.item}
              {icon.id}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SelectCategories;
