import GoalSlider from "../../components/UI/goals/GoalSlider";
import GoalEdit from "../../components/UI/goals/GoalEdit";
import TransactionTable from "../../components/UI/transactions/TransactionTable";
import ArrowsSVG from "../../helpers/selectorsSVG/UI/ArrowsSVG";

const TransactionPage = () => {
  return (
    <>
      <div className=" d-flex flex-column flex-md-row  align-items-center gap-3 pb-5 ">
        <GoalSlider />
        <GoalEdit />
      </div>
      <TransactionTable />
    </>
  );
};

export default TransactionPage;
