import React, { useEffect, useState } from "react";
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
  const [currentIndex, setCurrentIndex] = useState(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  console.log("windowWidth: ", windowWidth);
  const [minVisibleItem, setMinVisibleItem] = useState(3);

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
        getVisibleItems();
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

  const handlePreviousGoal = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + goalsList.length) % goalsList.length
    );
  };
  const handleNextGoal = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % goalsList.length);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    if (windowWidth > 1450) {
      setMinVisibleItem(3);
    } else if (windowWidth < 1450 && windowWidth > 900) {
      setMinVisibleItem(2);
    } else {
      setMinVisibleItem(1);
    }
  }, [windowWidth]);

  // useEffect(() => {
  //   if (windowWidth < 1200) {
  //     alert("Ширина вікна менше 1200px");
  //   }
  // }, [windowWidth]);

  function getVisibleItems() {
    const visibleItems = [];
    const itemsToShow = Math.min(goalsList.length, minVisibleItem);

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
    <div className="col">
      <div className="d-flex justify-content-evenly align-items-center pb-5">
        {loading && <Loading />}
        <button
          onClick={handlePreviousGoal}
          className="bg-transparent border-0"
        >
          <ArrowsSVG id="ArrowLeft" />
        </button>
        {goalsList.length < 3 ? (
          <>
            {goalViewList}
            <GoalEmpty />
          </>
        ) : (
          // <div className="d-flex px-3 gap-3">{goalViewList}</div>
          <>{goalViewList}</>
        )}
        <button onClick={handleNextGoal} className="bg-transparent border-0">
          <ArrowsSVG id="ArrowRight" />
        </button>
      </div>
    </div>
  );
};

export default GoalSlider;
