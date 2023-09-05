import GoalSlider from "../../components/UI/goals/GoalSlider";
import GoalEdit from "../../components/UI/goals/GoalEdit";
import TransactionTable from "../../components/UI/transactions/TransactionTable";

const TransactionPage = () => {
  return (
    <>
      <div className=" d-flex flex-row align-items-center gap-3 pb-5 ">
        <GoalSlider />
        <GoalEdit />
      </div>
      <TransactionTable />
    </>
  );
};

export default TransactionPage;
