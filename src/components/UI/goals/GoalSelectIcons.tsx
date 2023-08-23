import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { GoalSelectCategoriesActionType } from "../../../store/reducers/types";

interface IGoalSelectCategoriesProps {
  icons: any[];
  title: string;
}

const GoalSelectCategories: FC<IGoalSelectCategoriesProps> = ({
  icons,
  title,
}) => {
  const [isActive, setisActive] = useState<number | null>(null);
  const dispatch = useDispatch();
  const selectIcon = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    const seletedCategories = e.currentTarget.textContent;
    setisActive(index);
    dispatch({
      type: GoalSelectCategoriesActionType.GOAL_SELECT_CATEGORIES,
      isSelectedGoalCategories: true,
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

export default GoalSelectCategories;
