import React from "react";
import TransactionHistory from "../../components/UI/TransactionHistory";
import GoalSlider from "../../components/UI/goals/GoalSlider";
import GoalEdit from "../../components/UI/goals/GoalEdit";

const Transaction = () => {
  return (
    <>
      {/* <GoalSlider>
        <GoalEdit/>
      </GoalSlider> */}
      <TransactionHistory />
    </>
  );
};

export default Transaction;
