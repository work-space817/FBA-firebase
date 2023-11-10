import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import getGoalsData from "../../../api/firebase/goals/getGoalsData";
import { GoalSelectActionType } from "../../../store/reducers/types";
import { IGoal } from "./types";
import GoalSVG from "../../../helpers/selectorsSVG/UI/GoalSVG";
import SelectCategoriesSVG from "../../../helpers/selectorsSVG/common/SelectCategoriesSVG";
import DateFormater from "../../../helpers/functions/DateFormater";

const Goal: FC<IGoal> = ({
  cost,
  expireDate,
  title,
  index,
  selectedCategories,
  id,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const now = new Date().getTime();
  const formattedExpireDate = DateFormater(expireDate);

  const selectGoal = async () => {
    navigate("/transactions");
    const fetchGoals = await getGoalsData();
    const fetchCurrentGoal = fetchGoals.find((doc, docIndex) =>
      docIndex + 1 === index ? doc.data() : null
    );
    const currentGoalData = { ...fetchCurrentGoal?.data(), id };
    console.log("currentGoalData: ", currentGoalData);
    dispatch({
      type: GoalSelectActionType.GOAL_SELECT,
      payload: currentGoalData,
    });
  };
  return (
    <>
      <div
        className={`shadow rounded-5 ${
          now > formattedExpireDate ? "border border-danger" : ""
        }`}
        style={{ width: "9rem" }}
        onClick={selectGoal}
      >
        <div className="p-3 position-relative">
          <div className="text-bg-secondary current-goal-index position-absolute translate-middle badge rounded-pill ">
            <div className="position-relative d-flex flex-column text-bg-secondary">
              {index}
            </div>
          </div>

          <h4>{cost} UAH</h4>
          <span
            className={` ${
              now > formattedExpireDate ? "text-danger" : "text-black-50"
            }`}
          >
            {expireDate}
            <GoalSVG id="Clock" />
          </span>
        </div>
        <div className="p-3 d-flex flex-column">
          <>
            <SelectCategoriesSVG id={selectedCategories as string} />
          </>
          <span className="mt-1">{title}</span>
        </div>
      </div>
    </>
  );
};

export default Goal;
