import React, { FC, useState } from "react";
import GoalSVG from "../../../helpers/selectorsSVG/UI/GoalSVG";
import { useNavigate } from "react-router-dom";

interface IGoal {
  cost: string;
  date: string;
  title: string;
  index?: any;
}

const Goal: FC<IGoal> = ({ cost, date, title, index }) => {
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
          <div
            className="text-bg-secondary current-goal-index position-absolute translate-middle badge rounded-pill "
            // onClick={toggleDropdown}
          >
            <div className="position-relative d-flex flex-column text-bg-secondary">
              {/* <GoalSVG id="Edit" /> */}
              {index}
              {/* {isOpen && (
                <div className="done-delete-items dropdown-content position-absolute d-flex flex-column text-bg-secondary p-1">
                  <div className=""></div>
                  <div className="">
                    <GoalSVG id="Access" />
                  </div>
                  <div className="">
                    <GoalSVG id="Delete" />
                  </div>
                </div> 
              )}*/}
            </div>
          </div>

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
