import GoalStatisticList from "./GoalStatisticList";
import DefaultCircleDiagramUI from "../../../../lib/recharts/circleDiagram/DefaultCircleDiagramUI";
import DateFormater from "../../../../helpers/DateFormater";
import TwoLevelPieDiagram from "../../../../lib/recharts/circleDiagram/TwoLevelPieDiagram";

const GoalsCircleDiagram = () => {
  const goalList = GoalStatisticList();

  return (
    <>
      <TwoLevelPieDiagram
        circleColor={["#FF0e42", "#36de22"]}
        statisticData={goalList}
      />
      {/* <div>{visibleTransactionList}</div> */}
    </>
  );
};

export default GoalsCircleDiagram;
