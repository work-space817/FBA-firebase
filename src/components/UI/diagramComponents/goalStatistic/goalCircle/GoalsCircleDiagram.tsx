import TwoLevelPieDiagram from "../../../../../lib/recharts/circleDiagram/TwoLevelPieDiagram";
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
  return (
    <>
      <TwoLevelPieDiagram
        outterData={goalList}
        innerData={visiblePieChartList}
      />
      {/* <div>{visibleTransactionList}</div> */}
    </>
  );
};

export default GoalsCircleDiagram;
