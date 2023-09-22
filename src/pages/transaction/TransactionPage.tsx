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
      <div className="d-flex justify-content-end gap-3 pe-4 pt-4">
        <div className=" d-flex align-items-center rounded-4 shadow">
          <div className="p-3">
            <ArrowsSVG id="ArrowLeft" />
            <span className="px-2">Previous</span>
          </div>
        </div>
        <div className=" d-flex align-items-center rounded-4 shadow">
          <div className="p-3">
            <span className="px-2">Next</span>
            <ArrowsSVG id="ArrowRight" />
          </div>
        </div>
      </div>
    </>
  );
};

export default TransactionPage;
