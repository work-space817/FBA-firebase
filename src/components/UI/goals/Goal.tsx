import React, { FC } from "react";
import GoalSVG from "../../../helpers/selectorsSVG/UI/GoalSVG";
import { useNavigate } from "react-router-dom";

interface IGoal {
  cost: string;
  date: string;
  title: string;
}

const Goal: FC<IGoal> = ({ cost, date, title }) => {
  const navigate = useNavigate();

  const goalEdit = () => {
    navigate("/transactions");
  };
  return (
    <>
      <div
        className="col-3 d-flex flex-column rounded-5 shadow"
        onClick={goalEdit}
        style={{ width: "10rem" }}
      >
        <div className="p-3 position-relative">
          <span className="current-goal-index position-absolute translate-middle badge text-bg-warning  rounded-pill ">
            <GoalSVG id="Edit" />
          </span>
          <h4>{cost} UAH</h4>
          <span>
            {date}
            <GoalSVG id="Clock" />
          </span>
        </div>
        <div className="p-3 d-flex flex-column">
          <>
            <GoalSVG id="Holidays" />
          </>
          <span className="mt-1">{title}</span>
        </div>
      </div>
    </>
  );
};

export default Goal;
