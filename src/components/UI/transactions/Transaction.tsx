import { FC } from "react";
import { useDispatch } from "react-redux";
import { ITransaction } from "./types";
import SelectCategoriesSVG from "../../../helpers/selectorsSVG/SelectCategoriesSVG";
import TransactionSVG from "../../../helpers/selectorsSVG/UI/TransactionSVG";
import { TransactionListActionType } from "../../../store/reducers/types";
import getTransactionData from "../../../api/transactions/getTransactionData";
import { deleteDoc } from "firebase/firestore";
import GoalSVG from "../../../helpers/selectorsSVG/UI/GoalSVG";

const Transaction: FC<ITransaction> = ({
  transactionTitle,
  transactionValue,
  transactionTime,
  transactionDate,
  index,
  selectedCategories,
  transactionType,
  id,
}) => {
  const dispatch = useDispatch();
  const transactionDelete = async () => {
    try {
      const fetchTransactions = await getTransactionData();

      const fetchCurrentTransaction = fetchTransactions.find((doc, docIndex) =>
        docIndex + 1 == index ? doc.data() : null
      );
      const currentTransactionData = { ...fetchCurrentTransaction?.data(), id };

      const currentTransactions = fetchTransactions.map((doc) =>
        doc.id === currentTransactionData.id ? deleteDoc(doc.ref) : null
      );

      const updateTransactionList = dispatch({
        type: TransactionListActionType.UPDATE_TRANSACTION_LIST,
      });
    } catch (error) {
      console.error("Сталася помилка при видаленні цілі:", error);
    }
  };
  return (
    <>
      <tr>
        <td>
          <TransactionSVG id={transactionType} />
        </td>
        <td>{index + 1}</td>
        <td scope="row">{transactionTitle}</td>
        <td className="text-black-50  d-flex gap-2">
          <SelectCategoriesSVG id={selectedCategories as string} />
          {selectedCategories}
        </td>
        <td className="text-black-50">{transactionTime}</td>
        <td className="text-black-50">{transactionDate}</td>

        <td className="">{transactionValue} UAH</td>
        <td onClick={transactionDelete}>
          <GoalSVG id="Delete" />
        </td>
      </tr>
    </>
  );
};

export default Transaction;
