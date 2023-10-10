import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { AuthUserActionType, IAuthUser } from "../../store/reducers/types";
import Card from "../../components/UI/card/Card";
import GoalSlider from "../../components/UI/goals/GoalSlider";
import getUserInformation from "../../api/userInfo/getUserInformation";
import { auth } from "../../api/config";
import TransactionTable from "../../components/UI/transactions/TransactionTable";
import OperationMenu from "../../components/UI/OperationMenu";
import RadarDiagram from "../../components/UI/diagrams/radarDiagram/RadarDiagram";
import LineDiagram from "../../components/UI/diagrams/lineDiagram/LineDiagram";

const Overview: FC = () => {
  const dispatch = useDispatch();
  const { isAuth } = useSelector((store: any) => store.auth as IAuthUser);

  return (
    <>
      <div className="col d-flex mb-5 gap-3 flex-column-lg border">
        <Card />
        <div className="col col-lg-6">
          <OperationMenu />
          <GoalSlider />
        </div>
      </div>
      {/* <div className="col col-lg-6">
        <TransactionTable maxCountTransaction={5} />
      </div> */}

      <div className="col-6 rounded-5 shadow">
        <div className="p-3">
          <h4 className="ms-3 mb-3">Line Diagram</h4>
          <LineDiagram />
        </div>
      </div>

      <div>
        {isAuth ? (
          <>
            <button>
              <Link
                to="/auth"
                onClick={(e) => {
                  localStorage.removeItem("token");
                  localStorage.removeItem("uid");
                  dispatch({ type: AuthUserActionType.LOGOUT_USER });
                }}
              >
                вихід
              </Link>
            </button>
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default Overview;
