import React, { useEffect, useRef, useState } from "react";
import ArrowsSVG from "../../../helpers/selectorsSVG/UI/ArrowsSVG";
import { IGoalOperation } from "../../operations/types";
import { getDocs, collection, doc } from "firebase/firestore";
import { auth, firestore } from "../../../api/config";
import { getAdditionalUserInfo } from "firebase/auth";
import Goal from "./Goal";
import setAuthToken from "../../../api/setAuthToken";
import getUserId from "../../../api/getUserId";
import Loading from "../../common/loading/Loading";
import GoalSVG from "../../../helpers/selectorsSVG/UI/GoalSVG";
import GoalEmpty from "./GoalEmpty";

const GoalSlider: React.FC = () => {
  const [goalsList, setGoalsList] = useState<IGoalOperation[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const goalWidth = 160;
  const spacing = 15;
  const [visibleGoals, setVisibleGoals] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const userId = getUserId();
    const fetchUserGoals = async () => {
      setLoading(true);
      try {
        const userGoalsRef = doc(collection(firestore, "goals"), `${userId}`);

        const querySnapshot = await getDocs(collection(userGoalsRef, "goal"));
        const goalsData = querySnapshot.docs.map(
          (doc) => doc.data() as IGoalOperation
        );
        setGoalsList(goalsData);
        console.log("Цілі успішно отримані з Firestore:", goalsData);
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
        date={goal?.expireDate}
        index={index + currentIndex + 1}
      />
    ));

  return (
    <div className="col" ref={sliderRef}>
      <div className="d-flex justify-content-evenly align-items-center ">
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
