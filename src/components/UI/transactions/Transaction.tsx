import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { ITransaction } from "./types";
import SelectCategoriesSVG from "../../../helpers/selectorsSVG/common/SelectCategoriesSVG";
import TransactionSVG from "../../../helpers/selectorsSVG/UI/TransactionSVG";
import { TransactionListActionType } from "../../../store/reducers/types";
import getTransactionData from "../../../api/firebase/transactions/getTransactionData";
import { deleteDoc } from "firebase/firestore";
import ModalWindow from "../../common/modal/CommonModal";

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

      const fetchCurrentTransaction = fetchTransactions.docs.find(
        (doc, docIndex) => (docIndex + 1 === index ? doc.data() : null)
      );
      const currentTransactionData = { ...fetchCurrentTransaction?.data(), id };

      const currentTransactions = fetchTransactions.docs.map((doc) =>
        doc.id === currentTransactionData.id ? deleteDoc(doc.ref) : null
      );

      const updateTransactionList = dispatch({
        type: TransactionListActionType.UPDATE_TRANSACTION_LIST,
      });
      console.log("updateTransactionList: ", updateTransactionList);
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

          <span className="d-none d-md-block">{selectedCategories}</span>
        </td>
        <td className="text-black-50 d-none d-sm-table-cell">
          {transactionTime}
        </td>
        <td className="text-black-50 d-none d-sm-table-cell">
          {transactionDate}
        </td>

        <td className="">{transactionValue} UAH</td>
        <td>
          <span onClick={transactionDelete} className="d-none d-sm-block">
            <TransactionSVG id="Delete" />
          </span>
          <span className="d-sm-none">
            <ModalWindow
              title={"Transaction information"}
              customActive={<TransactionSVG id="Information" />}
            >
              <table className="table w-100">
                <thead>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col">Reciever</th>
                    <th scope="col">Type</th>
                    <th scope="col">Time</th>
                    <th scope="col">Date</th>
                    <th scope="col">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <TransactionSVG id={transactionType} />
                    </td>
                    <td scope="row">{transactionTitle}</td>
                    <td className="text-black-50  d-flex gap-2">
                      <SelectCategoriesSVG id={selectedCategories as string} />

                      <span className="d-none d-md-block">
                        {selectedCategories}
                      </span>
                    </td>
                    <td className="text-black-50 ">{transactionTime}</td>
                    <td className="text-black-50 ">{transactionDate}</td>

                    <td className="">{transactionValue} UAH</td>
                  </tr>
                </tbody>
              </table>
            </ModalWindow>
          </span>
        </td>
      </tr>
    </>
  );
};

export default Transaction;
