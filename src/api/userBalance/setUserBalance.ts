import { ISetUserBalance } from "./types";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import getUserId from "../userInfo/getUserId";
import { firestore } from "../config";
import getUserInformation from "../userInfo/getUserInformation";
import { useDispatch } from "react-redux";

const setUserBalance = async (values: ISetUserBalance) => {
  const userId = getUserId();
  console.log(values);
  const getUserBalance = (await getUserInformation()).currentBalance;

  const userBalanceRef = doc(collection(firestore, "userBalance"), `${userId}`);
  const balanceData = setDoc(userBalanceRef, values);
  console.log(values);
  return balanceData;
};

export default setUserBalance;
