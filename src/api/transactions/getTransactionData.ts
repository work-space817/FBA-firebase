import { collection, doc, getDocs } from "firebase/firestore";
import { firestore } from "../config";
import getUserId from "../userInfo/getUserId";

const getTransactionData = async () => {
  const userId = getUserId();

  const userTransactionsRef = doc(
    collection(firestore, "transactions"),
    `${userId}`
  );
  const querySnapshot = await getDocs(
    collection(userTransactionsRef, "transaction")
  );
  const transactionsData = querySnapshot.docs;

  return transactionsData;
};

export default getTransactionData;
