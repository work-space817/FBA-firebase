import AreaDiagram from "../../components/UI/diagrams/areaDiagram/SynchronizedAreaChart";
import BrushBarDiagram from "../../components/UI/diagrams/brushBarDiagram/BrushBarDiagram";
import DateSelector from "../../components/UI/DateSelector";
import TransactionCircleDiagram from "../../components/UI/diagramComponents/transactionStatistic/transactionCircle/TransactionCircleDiagram";
import SynchronizedAreaChart from "../../components/UI/diagrams/areaDiagram/SynchronizedAreaChart";
import TransactionSynchronizedAreaDiagram from "../../components/UI/diagramComponents/transactionStatistic/transactionSynchronizedArea/TransactionSynchronizedAreaDiagram";
import { DayPicker } from "react-day-picker";

const StatisticPage = () => {
  return (
    <>
      <div className="d-flex gap-4 flex-column flex-lg-row align-items-center align-items-sm-end mb-4">
        <div className="col-10 col-sm">
          <h4 className="ms-2 mb-3">Select date's</h4>
          <DateSelector />
        </div>
        <div className="rounded-5 shadow col-10 col-lg-4">
          <div className="py-3">
            <h4 className="ms-3 mb-3">Income transactions</h4>
            <TransactionCircleDiagram
              circleColor={"#82ca9d"}
              transactionType={"Income transaction"}
            />
          </div>
        </div>
        <div className="rounded-5 shadow col-10 col-lg-4">
          <div className="py-3">
            <h4 className="ms-3 mb-3">Expense transaction</h4>
            <TransactionCircleDiagram
              circleColor={"#ed3737"}
              transactionType={"Outcome transaction"}
            />
          </div>
        </div>
      </div>

      <div className="rounded-5 shadow mb-5">
        <div className="py-3 px-2">
          <h4 className="ms-3 mb-3">Circle Diagram</h4>
          <BrushBarDiagram />
        </div>
      </div>
      <div className="mb-5 col rounded-5 shadow">
        <div className="p-3">
          <h4 className="ms-3 mb-3">Area Diagram</h4>
          <TransactionSynchronizedAreaDiagram />
        </div>
      </div>
    </>
  );
};

export default StatisticPage;
