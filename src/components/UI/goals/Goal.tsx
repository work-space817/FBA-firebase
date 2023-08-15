import React, { FC, useEffect, useRef, useState } from "react";
import GoalSVG from "../../../helpers/selectorsSVG/UI/GoalSVG";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import getUserId from "../../../api/getUserId";
import { collection, doc, getDocs } from "firebase/firestore";
import { firestore } from "../../../api/config";

interface IGoal {
  cost: string;
  date: string;
  title: string;
  index: any;
}

const Goal: FC<IGoal> = ({ cost, date, title, index }) => {
  const goalRef = useRef<HTMLDivElement>(null);

  const navigate = useNavigate();
  const userId = getUserId();
  const goalEdit = async () => {
    try {
      navigate("/transactions");
      const userGoalsRef = doc(collection(firestore, "goals"), `${userId}`);
      const querySnapshot = await getDocs(collection(userGoalsRef, "goal"));
      const goalsData = querySnapshot.docs.find((doc, docIndex) => {
        if (docIndex + 1 == index) {
          return doc.data();
        }
      });
      console.log(goalsData?.data());
    } catch (error) {
      console.error("Сталася помилка при отриманні цілей користувача:", error);
    }
  };

  return (
    <>
      <div
        className="col-3 d-flex flex-column rounded-5 shadow"
        style={{ width: "10rem" }}
        onClick={goalEdit}
        ref={goalRef}
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
