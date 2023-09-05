import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ITransaction } from "./types";
import getTransactionData from "../../../api/transactions/getTransactionData";

const Transaction: FC<ITransaction> = ({
  incomeTitle,
  incomeValue,
  incomeDate,
  index,
  selectedCategories,
  id,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const selectTransaction = async () => {
  //   navigate("/transactions");
  //   const fetchTransactions = await getTransactionData();
  //   const fetchCurrentGoal = fetchTransactions.find((doc, docIndex) =>
  //     docIndex + 1 == index ? doc.data() : null
  //   );
  //   const currentGoalData = { ...fetchCurrentGoal?.data(), id };
  //   console.log("currentGoalData: ", currentGoalData);
  // dispatch({
  //   type: GoalSelectActionType.GOAL_SELECT,
  //   payload: currentGoalData,
  // });
  // };
  return (
    <>
      <tr>
        <th scope="row">{incomeTitle}</th>
        <td>{incomeValue}</td>
        <td>{incomeDate} </td>
        <td>{selectedCategories}</td>
      </tr>
    </>
  );
};

export default Transaction;
