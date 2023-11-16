import { memo, useCallback, useMemo } from "react";
import TwoLevelPieDiagram from "../../../../../lib/recharts/circleDiagram/TwoLevelPieDiagram";
import CircleDiagramItem from "../../CircleDiagramItem";
import { IGoalByCategory, IGoalCircleStatisticList } from "../types";
import GoalCircleStatisticList from "./GoalCircleStatisticList";

const GoalsCircleDiagram = memo(() => {
  const goalList = GoalCircleStatisticList();

  // console.log("goalList: ", goalList);

  const visiblePieChartList: IGoalByCategory[] = [];
  const innerData = goalList.map((doc: IGoalCircleStatisticList) => {
    return doc.goalsByCategory.map((goal: any) =>
      visiblePieChartList.push(goal)
    );
  });
  const visibleList = (state: boolean) => {
    const visibleActiveGoalList = goalList
      .filter((goal: IGoalCircleStatisticList) => goal.isExpire === state)
      .map((goal: any) => {
        const goals = goal.goalsByCategory.map((goal: IGoalByCategory) => {
          const goalKey = goal.goals.map((id) => id.id);
          // console.log(goalKey);
          return (
            <CircleDiagramItem
              key={goalKey[0]}
              category={goal.summaryGoalCategory as string}
              count={goal.summaryGoalCount}
              value={goal.summaryGoalValue}
              typeOfAction={"goals"}
            />
          );
        });
        return goals;
      });
    return visibleActiveGoalList;
  };

  return (
    <>
      {goalList.length > 0 ? (
        <TwoLevelPieDiagram
          outterData={goalList}
          innerData={visiblePieChartList}
        />
      ) : null}
      <div className="d-flex">
        <div className="visibleCircleList px-3 col-6 border-end">
          <h5>Active goals</h5>
          {visibleList(false).length > 0 ? (
            visibleList(false)
          ) : (
            <h5 className="pt-3">Goal wasn't created</h5>
          )}
        </div>
        <div className="visibleCircleList px-3 col-6 ">
          <h5>Expired goals</h5>
          {visibleList(true).length > 0 ? (
            visibleList(true)
          ) : (
            <h5 className="pt-3">Goal wasn't created</h5>
          )}
        </div>
      </div>
    </>
  );
});

export default GoalsCircleDiagram;
