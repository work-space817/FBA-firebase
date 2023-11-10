import React, { useState } from "react";
import { useSelector } from "react-redux";

import GoalList from "../../../goals/GoalList";
import { IGoalList } from "../../../../../store/reducers/types";
import DateFormater from "../../../../../helpers/functions/DateFormater";
import { IGoalCircleStatisticList } from "../types";

const GoalCircleStatisticList = () => {
  const fetchGoalsData = GoalList();
  const { goalList } = useSelector((store: any) => store.goalList as IGoalList);
  const now = new Date().getTime();
  const mergedGoals = goalList.reduce(
    (result: IGoalCircleStatisticList[], goal) => {
      const formattedExpireDate = DateFormater(goal.expireDate);
      const category = goal.selectedCategories;

      const isExpireGroup = result.find(
        (group) => group.isExpire === now > formattedExpireDate
      );

      if (isExpireGroup) {
        const existingCategory = isExpireGroup.goalsByCategory.find(
          (goals: any) => goals.summaryGoalCategory === category
        );
        if (existingCategory) {
          existingCategory.goals.push(goal);
          existingCategory.summaryGoalValue += goal.cost;
          existingCategory.summaryGoalCount = existingCategory.goals.length;
        } else {
          const summary = {
            summaryGoalCategory: category,
            summaryGoalValue: goal.cost,
            summaryGoalCount: 1,
            goals: [goal],
          };
          isExpireGroup.goalsByCategory.push(summary);
        }
        isExpireGroup.summaryCount += 1;
      } else {
        const group = {
          isExpire: now > formattedExpireDate,
          summaryCount: 1,
          goalsByCategory: [
            {
              summaryGoalCategory: category,
              summaryGoalValue: goal.cost,
              summaryGoalCount: 1,
              goals: [goal],
            },
          ],
        };
        result.push(group);
      }

      return result;
    },
    []
  );
  // console.log("mergedGoals", mergedGoals);
  return mergedGoals;
};

export default GoalCircleStatisticList;
