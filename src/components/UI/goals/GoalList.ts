import React, { useEffect, useState } from "react";
import { IGoal } from "./types";
import getGoalsData from "../../../api/goals/getGoalsData";
import { useDispatch, useSelector } from "react-redux";
import {
  GoalListActionType,
  IGoalList,
  IGoalSelect,
} from "../../../store/reducers/types";
import { deleteDoc } from "firebase/firestore";
import { setGoals } from "../../../store/reducers/actions";

const GoalList = () => {
  const [goalsList, setGoalsList] = useState<IGoal[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch();
  const fetchUserGoals = async () => {
    try {
      setLoading(true);
      const fetchGoals = await getGoalsData();
      const goalsData = fetchGoals.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as IGoal[];
      //
      setGoalsList(goalsData);
      dispatch(setGoals(goalsData));

      setLoading(false);
    } catch (error) {
      console.error("Сталася помилка при отриманні цілей користувача:", error);
    }
  };
  useEffect(() => {
    fetchUserGoals();
  }, [setGoalsList]);
};

export default GoalList;
