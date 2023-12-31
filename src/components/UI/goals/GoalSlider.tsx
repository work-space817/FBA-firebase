import React, {
  memo,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import ArrowsSVG from "../../../helpers/selectorsSVG/UI/ArrowsSVG";
import Goal from "./Goal";
import Loading from "../../common/loading/Loading";
import GoalEmpty from "./GoalEmpty";
import GoalList from "./GoalList";
import { useSelector } from "react-redux";
import { IGoalList } from "../../../store/reducers/types";

const GoalSlider = memo(() => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [visibleGoals, setVisibleGoals] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const fetchGoalData = GoalList();
  const { goalList } = useSelector((store: any) => store.goalList as IGoalList);
  const goalWidth = 135;
  const spacing = 10;
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
    if (currentIndex + visibleGoals < goalList.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };
  const handlePreviousGoal = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const visibleGoalsList = goalList
    .slice(currentIndex, currentIndex + visibleGoals)
    .map((goal, index) => (
      <Goal
        key={index}
        title={goal.title}
        cost={goal.cost}
        expireDate={goal.expireDate}
        index={index + currentIndex + 1}
        id={goal.id}
        selectedCategories={goal.selectedCategories}
      />
    ));

  return (
    <div className="col-12 col-sm" ref={sliderRef}>
      <div className="d-flex justify-content-around align-items-center ">
        {fetchGoalData ? <>{<Loading />}</> : <></>}
        <button
          onClick={handlePreviousGoal}
          className="bg-transparent border-0"
        >
          <ArrowsSVG id="ArrowLeft" width={"1rem"} height={"2rem"} />
        </button>
        {goalList.length < 3 ? (
          <>
            {visibleGoalsList}
            <GoalEmpty />
          </>
        ) : (
          <>{visibleGoalsList}</>
        )}

        <button onClick={handleNextGoal} className="bg-transparent border-0">
          <ArrowsSVG id="ArrowRight" width={"1rem"} height={"2rem"} />
        </button>
      </div>
    </div>
  );
});

export default GoalSlider;
