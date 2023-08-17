import React, { FC, useEffect, useRef, useState } from "react";
import GoalSVG from "../../../helpers/selectorsSVG/UI/GoalSVG";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DocumentData, collection, doc, getDocs } from "firebase/firestore";
import getGoalsData from "../../../api/getGoalsData";

export interface IGoal {
  cost: string;
  date: string;
  title: string;
  index: any;
  selectGoals?: (currentGoal: any) => void;
}

const Goal: FC<IGoal> = ({ cost, date, title, index, selectGoals }) => {
  const dispatch = useDispatch();
  const [currentGoal, setCurrentGoal] = useState<DocumentData>();
  const navigate = useNavigate();
  selectGoals = async () => {
    navigate("/transactions");
    const fetchGoals = await getGoalsData();
    const fetchCurrentGoal = fetchGoals.find((doc, docIndex) =>
      docIndex + 1 == index ? doc.data() : null
    );
    const currentGoalData = fetchCurrentGoal?.data();
    setCurrentGoal(currentGoalData);
  };
  // console.log(currentGoal);
  return (
    <>
      <div
        className="col-3 d-flex flex-column rounded-5 shadow"
        style={{ width: "10rem" }}
        onClick={selectGoals}
      >
        <div className="p-3 position-relative">
          <div className="text-bg-secondary current-goal-index position-absolute translate-middle badge rounded-pill ">
            <div className="position-relative d-flex flex-column text-bg-secondary">
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
