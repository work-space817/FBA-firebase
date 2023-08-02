import React, { FC } from "react";
import GoalSVG from "../../../helpers/selectorsSVG/UI/GoalSVG";
import { useNavigate } from "react-router-dom";

interface IGoal {
  cost: string;
  date: string;
  title: string;
  goalSVG: React.ReactNode;
}

const Goal: FC<IGoal> = ({ cost, date, title, goalSVG }) => {
  const navigate = useNavigate();

  const goalEdit = () => {
    navigate("/transactions");
  };
  return (
    <>
      <div
        className="col-3 d-flex flex-column rounded-5 shadow"
        onClick={goalEdit}
        // style={{ width: "10rem" }}
      >
        <div className="p-3 position-relative">
          <span className="current-goal-index position-absolute translate-middle badge text-bg-warning  rounded-pill ">
            <GoalSVG id="Edit" />
          </span>
          <h4>{cost}</h4>
          <span>{date}</span>
        </div>
        <div className="p-3 d-flex flex-column">
          <>
            <GoalSVG id="Holidays" />
            {goalSVG}
          </>
          <span className="mt-1">{title}</span>
        </div>
      </div>
    </>
  );
};

export default Goal;
