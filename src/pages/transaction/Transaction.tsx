import React from "react";
import TransactionHistory from "../../components/UI/TransactionHistory";
import GoalSlider from "../../components/UI/goals/GoalSlider";
import GoalEdit from "../../components/UI/goals/GoalEdit";
import { useDispatch, useSelector } from "react-redux";
import { IGoalSelect } from "../../store/reducers/types";

const Transaction = () => {
  // const { isGoalSelect } = useSelector(
  //   (store: any) => store.selectGoal as IGoalSelect
  // );
  return (
    <>
      <div className=" d-flex flex-row align-items-center gap-3 pb-5 ">
        <GoalSlider />
        <GoalEdit />
        {/* {isGoalEdit ? (
          <>
            <GoalEdit />
          </>
        ) : (
          <></>
        )} */}
      </div>

      <TransactionHistory />
    </>
  );
};

export default Transaction;
