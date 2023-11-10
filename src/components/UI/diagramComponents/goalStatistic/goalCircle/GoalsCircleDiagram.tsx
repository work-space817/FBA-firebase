import TwoLevelPieDiagram from "../../../../../lib/recharts/circleDiagram/TwoLevelPieDiagram";
import { IGoal } from "../../../goals/types";
import CircleDiagramItem from "../../CircleDiagramItem";
import { IGoalByCategory } from "../types";
import GoalCircleStatisticList from "./GoalCircleStatisticList";

const GoalsCircleDiagram = () => {
  const goalList = GoalCircleStatisticList();

  const visiblePieChartList: IGoalByCategory[] = [];
  const innerData = goalList.map((doc: any, index) => {
    return doc.goalsByCategory.map((goal: any) =>
      visiblePieChartList.push(goal)
    );
  });
  const visibleList = (state: boolean) => {
    const visibleActiveGoalList = goalList
      .filter((goal: any, index) => goal.isExpire === state)
      .map((goal, index) => {
        const goals = goal.goalsByCategory.map((goal: IGoalByCategory) => {
          return (
            <CircleDiagramItem
              // key={}
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
      <TwoLevelPieDiagram
        outterData={goalList}
        innerData={visiblePieChartList}
      />
      <div className="d-flex">
        <div className="visibleCircleList px-3 col-6">
          <h5>Active goals</h5>
          {visibleList(false).length > 0 ? (
            visibleList(false)
          ) : (
            <h5 className="text-center">No one goals was created</h5>
          )}
        </div>
        <div className="visibleCircleList px-3 col-6">
          <h5>Expired goals</h5>
          {visibleList(true).length > 0 ? (
            visibleList(true)
          ) : (
            <h5 className="text-center">No one goals was created</h5>
          )}
        </div>
      </div>
    </>
  );
};

export default GoalsCircleDiagram;
