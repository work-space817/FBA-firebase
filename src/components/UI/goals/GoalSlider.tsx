import React, { useEffect, useRef, useState } from "react";
import ArrowsSVG from "../../../helpers/selectorsSVG/UI/ArrowsSVG";
import Goal from "./Goal";
import Loading from "../../common/loading/Loading";
import GoalEmpty from "./GoalEmpty";
import getGoalsData from "../../../api/goals/getGoalsData";
import { IGoal } from "./types";

const GoalSlider: React.FC = () => {
  const [goalsList, setGoalsList] = useState<IGoal[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [visibleGoals, setVisibleGoals] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchUserGoals = async () => {
      setLoading(true);
      try {
        const fetchGoals = await getGoalsData();
        const goalsData = fetchGoals.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as IGoal[];
        setGoalsList(goalsData);
        console.log("goalsData: ", goalsData);
        setLoading(false);
      } catch (error) {
        console.error(
          "Сталася помилка при отриманні цілей користувача:",
          error
        );
      }
    };

    fetchUserGoals();
  }, []);

  const goalWidth = 160;
  const spacing = 15;
  useEffect(() => {
    const sliderElement = sliderRef.current;
    const updateVisibleGoals = () => {
      if (sliderElement) {
        const sliderWidth = sliderElement.offsetWidth;
        const calculatedVisibleGoals = Math.floor(
          sliderWidth / (goalWidth + spacing)
        );
        setVisibleGoals(calculatedVisibleGoals);
      }
    };

    updateVisibleGoals();

    window.addEventListener("resize", updateVisibleGoals);
  }, []);
  const handleNextGoal = () => {
    if (currentIndex + visibleGoals < goalsList.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePreviousGoal = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const visibleGoalsList = goalsList
    .slice(currentIndex, currentIndex + visibleGoals)
    .map((goal, index) => (
      <Goal
        key={index}
        title={goal?.title}
        cost={goal?.cost}
        expireDate={goal?.expireDate}
        index={index + currentIndex + 1}
        id={goal.id}
      />
    ));

  return (
    <div className="col" ref={sliderRef}>
      <div className="d-flex justify-content-around align-items-center ">
        {loading && <Loading />}
        <button
          onClick={handlePreviousGoal}
          className="bg-transparent border-0"
        >
          <ArrowsSVG id="ArrowLeft" />
        </button>
        {goalsList.length < 3 ? (
          <>
            {visibleGoalsList}
            <GoalEmpty />
          </>
        ) : (
          <>{visibleGoalsList}</>
        )}

        <button onClick={handleNextGoal} className="bg-transparent border-0">
          <ArrowsSVG id="ArrowRight" />
        </button>
      </div>
    </div>
  );
};

export default GoalSlider;
