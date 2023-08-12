import React from "react";
import TransactionHistory from "../../components/UI/TransactionHistory";
import GoalSlider from "../../components/UI/goals/GoalSlider";
import GoalEdit from "../../components/UI/goals/GoalEdit";

const Transaction = () => {
  return (
    <>
      <div className="d-flex align-items-center gap-3 pb-5">
        <GoalSlider />
        <GoalEdit />
      </div>

      <TransactionHistory />
    </>
  );
};

export default Transaction;
