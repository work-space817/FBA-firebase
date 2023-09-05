import { addDoc, collection, doc } from "firebase/firestore";
import getUserId from "../userInfo/getUserId";
import { firestore } from "../config";

const setUserBalance = async (values: any) => {
  const userId = getUserId();

  const userGoalsRef = doc(collection(firestore, "userBalance"), `${userId}`);
  const goalsData = await addDoc(collection(userGoalsRef, "balance"), {
    ...values,
  });

  return goalsData;
};

export default setUserBalance;
