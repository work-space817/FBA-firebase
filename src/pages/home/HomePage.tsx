import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AuthUserActionType, IAuthUser } from "../../store/reducers/types";
import Card from "../../components/UI/card/Card";
import GoalSlider from "../../components/UI/goals/GoalSlider";
import OperationMenu from "../../components/UI/OperationMenu";
import GoalsCircleDiagram from "../../components/UI/diagramComponents/goalStatistic/goalCircle/GoalsCircleDiagram";
import RateLiniarDiagram from "../../components/UI/diagramComponents/rateStatistic/RateLiniarDiagram";

const HomePage = () => {
  return (
    <>
      <div className="col d-flex mb-5 gap-3 flex-column-reverse flex-lg-row ">
        <Card />
        <div className="col col-lg-6">
          <OperationMenu />
          <GoalSlider />
          <div className="col rounded-5 shadow mt-5">
            <div className="p-3 d-flex justify-content-between align-items-center">
              <h4 className="m-0">Current exchange rate</h4>
              <span>1/39/30</span>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex flex-column flex-lg-row col gap-3">
        <div className="col rounded-5 shadow">
          <div className="p-3">
            <RateLiniarDiagram />
          </div>
        </div>
        <div className="col rounded-5 shadow mb-5 mb-sm-0">
          <div className="p-3">
            <h4 className="ms-3">Goals Status Diagram</h4>
            <GoalsCircleDiagram />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
