import DateSelector from "../../components/UI/DateSelector";
import TransactionBrushBarDiagram from "../../components/UI/diagramComponents/transactionStatistic/transactionBrushBar/TransactionBrushBarDiagram";
import TransactionCircleDiagram from "../../components/UI/diagramComponents/transactionStatistic/transactionCircle/TransactionCircleDiagram";
import TransactionSynchronizedAreaDiagram from "../../components/UI/diagramComponents/transactionStatistic/transactionSynchronizedArea/TransactionSynchronizedAreaDiagram";

const StatisticPage = () => {
  return (
    <>
      <div className="d-flex gap-4 flex-column flex-xxl-row align-items-center align-items-xxl-end mb-4">
        <div className="">
          <h4 className="ms-2 mb-3">Select date's</h4>
          <DateSelector />
        </div>
        <div className="d-flex flex-column flex-lg-row align-items-center col-12 col-xxl-8 gap-3 justify-content-evenly">
          <div className="rounded-5 shadow col-12 col-sm-8 col-md-7 col-lg-5 col-xxl-6">
            <div className="py-3">
              <h4 className="ms-3 mb-3">Income transactions</h4>
              <TransactionCircleDiagram
                circleColor={"#82ca9d"}
                transactionType={"Income transaction"}
              />
            </div>
          </div>
          <div className="rounded-5 shadow col-12 col-sm-8 col-md-7 col-lg-5 col-xxl-6">
            <div className="py-3">
              <h4 className="ms-3 mb-3">Expense transaction</h4>
              <TransactionCircleDiagram
                circleColor={"#ed3737"}
                transactionType={"Outcome transaction"}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-5 shadow mb-5">
        <div className="py-3 px-2">
          <h4 className="ms-3 mb-3">Brush Bar Diagram</h4>
          <TransactionBrushBarDiagram />
        </div>
      </div>
      <div className="mb-5 col rounded-5 shadow">
        <div className="p-3">
          <h4 className="ms-3">Area Diagram</h4>
          <TransactionSynchronizedAreaDiagram />
        </div>
      </div>
    </>
  );
};

export default StatisticPage;
