import CircleDiagramItem from "../transactionStatistic/transactionCircle/TransactionCircleDiagramItem";
import OutcomingList from "../../diagrams/TransactionStatisticList";
import { ITransactionStatisticList } from "../transactionStatistic/transactionCircle/types";
import DefaultCircleDiagramUI from "../../diagrams/circleDiagram/DefaultCircleDiagramUI";
import TransactionStatisticList from "../../diagrams/TransactionStatisticList";

const GoalsCircleDiagram = () => {
  const transactionList = TransactionStatisticList();

  const visibleTransactionList = transactionList.map(
    (transaction: ITransactionStatisticList, index) => (
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
      <DefaultCircleDiagramUI />
      <div>{visibleTransactionList}</div>
    </>
  );
};

export default GoalsCircleDiagram;
