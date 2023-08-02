import React from "react";
import TransactionHistory from "../../components/UI/TransactionHistory";
import GoalSlider from "../../components/UI/goals/GoalSlider";

const Transaction = () => {
  return (
    <>
      <GoalSlider />
      <TransactionHistory />
    </>
  );
};

export default Transaction;
