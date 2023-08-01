import React, { useEffect, useState } from "react";
import ArrowsSVG from "../../../helpers/selectorsSVG/UI/ArrowsSVG";
import { IGoalOperation } from "../../operations/types";
import { getDocs, collection, doc } from "firebase/firestore";
import { auth, firestore } from "../../../api/config";
import { getAdditionalUserInfo } from "firebase/auth";
import Goal from "./Goal";
import setAuthToken from "../../../api/setAuthToken";
import getUserId from "../../../api/getUserId";

const GoalSlider: React.FC = () => {
  const [goalsList, setGoalsList] = useState<IGoalOperation[]>([]);
  const [currentIndex, setCurrentIndex] = useState(1);

  useEffect(() => {
    const userId = getUserId();
    const fetchUserGoals = async () => {
      try {
        const userGoalsRef = doc(collection(firestore, "goals"), `${userId}`);
        console.log("userId: ", userId);

        const querySnapshot = await getDocs(collection(userGoalsRef, "goal"));
        const goalsData = querySnapshot.docs.map(
          (doc) => doc.data() as IGoalOperation
        );
        setGoalsList(goalsData);
        console.log("Цілі успішно отримані з Firestore:", goalsData);
        getVisibleItems();
      } catch (error) {
        console.error(
          "Сталася помилка при отриманні цілей користувача:",
          error
        );
      }
    };

    fetchUserGoals();
  }, []);

  const handlePreviousGoal = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + goalsList.length) % goalsList.length
    );
  };
  const handleNextGoal = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % goalsList.length);
  };

  function getVisibleItems() {
    const visibleItems = [];
    const itemsToShow = Math.min(goalsList.length, 3);

    for (let i = 0; i < itemsToShow; i++) {
      const itemIndex =
        currentIndex + i >= goalsList.length
          ? currentIndex + i - goalsList.length
          : currentIndex + i;
      visibleItems.push(goalsList[itemIndex]);
    }

    return visibleItems;
  }

  const goalViewList = getVisibleItems().map((goal, index) => (
    <Goal
      key={index}
      title={goal?.title}
      cost={goal?.cost}
      date={goal?.expireDate}
    />
  ));
  return (
    <div className="col ">
      <div className="d-flex justify-content-evenly align-items-center">
        <button
          onClick={handlePreviousGoal}
          className="bg-transparent border-0"
        >
          <ArrowsSVG id="ArrowLeft" />
        </button>
        {goalViewList}
        <button onClick={handleNextGoal} className="bg-transparent border-0">
          <ArrowsSVG id="ArrowRight" />
        </button>
      </div>
    </div>
  );
};

export default GoalSlider;
