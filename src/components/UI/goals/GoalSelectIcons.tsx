import { FC } from "react";
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
  const dispatch = useDispatch();
  const selectIcon = (e: React.MouseEvent<HTMLDivElement>) => {
    const seletedCategories = e.currentTarget.textContent;
    dispatch({
      type: GoalSelectCategoriesActionType.GOAL_SELECT_CATEGORIES,
      payload: seletedCategories,
    });
  };

  return (
    <>
      <label className="form-label">{title}</label>
      <div className="d-flex flex-wrap gap-2 pb-3">
        {icons.map((icon, index) => (
          <div className="rounded-3 shadow" key={index}>
            <div className="d-flex gap-2 p-2" onClick={selectIcon}>
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
