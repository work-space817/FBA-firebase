import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { AuthUserActionType, IAuthUser } from "../../store/reducers/types";
import Card from "../../components/UI/Card";
import GoalSlider from "../../components/UI/goals/GoalSlider";
import getUserInformation from "../../api/userInfo/getUserInformation";
import { auth } from "../../api/config";
import TransactionTable from "../../components/UI/transactions/TransactionTable";
import OperationMenu from "../../components/UI/OperationMenu";

const Overview: FC = () => {
  const dispatch = useDispatch();
  const { isAuth } = useSelector((store: any) => store.auth as IAuthUser);

  return (
    <>
      <div className="col d-flex mb-5 gap-3 flex-column-lg ">
        <Card />
        <div className="col col-lg-6">
          <OperationMenu />
          <GoalSlider />
        </div>
      </div>
      <div className="col-7">
        <TransactionTable maxCountTransaction={5} />
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
