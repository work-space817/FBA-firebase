import React, { useEffect, useState } from "react";
import { IGoal } from "./types";
import getGoalsData from "../../../api/goals/getGoalsData";
import { useDispatch, useSelector } from "react-redux";
import { GoalListActionType, IGoalList } from "../../../store/reducers/types";

const GoalList = () => {
  const [goalsList, setGoalsList] = useState<IGoal[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch();
  const { isUpdatedGoaliList } = useSelector(
    (store: any) => store.goalList as IGoalList
  );

  const fetchUserGoals = async () => {
    try {
      setLoading(true);
      const fetchGoals = await getGoalsData();
      const goalsData = fetchGoals.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as IGoal[];
      setGoalsList(goalsData);
      console.log("goalsData: ", goalsData);
      const setGoalList = dispatch({
        type: GoalListActionType.GOAL_LIST,
        payload: goalsData,
      });
      setLoading(false);
    } catch (error) {
      console.error("Сталася помилка при отриманні цілей користувача:", error);
    }
  };
  useEffect(() => {
    fetchUserGoals();
  }, [isUpdatedGoaliList]);
  return loading;
};

export default GoalList;
