import OutcomingList from "../diagrams/OutcomingList";
import CircleDiagramItem from "../diagrams/circleDiagram/CircleDiagramItem";
import CustomActiveShapePieDiagram from "../diagrams/circleDiagram/CustomActiveShapePieDiagram";
import { IOutcomingList } from "../diagrams/circleDiagram/types";

const TransactionCircleDiagram = () => {
  const transactionList = OutcomingList();

  const visibleTransactionList = transactionList.map(
    (transaction: IOutcomingList, index) => (
      <CircleDiagramItem
        key={index}
        category={transaction.summaryCategory}
        countOfTransaction={transaction.summaryCount}
        valueOfTransaction={transaction.summaryValue}
        percentOfTransaction={0}
      />
    )
  );
  return (
    <>
      <CustomActiveShapePieDiagram />
      <div className="px-3">{visibleTransactionList}</div>
    </>
  );
};

export default TransactionCircleDiagram;
