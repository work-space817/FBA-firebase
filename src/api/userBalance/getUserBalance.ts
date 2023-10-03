import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { firestore } from "../config";
import getUserId from "../userInfo/getUserId";
import { useDispatch } from "react-redux";
import { IGetUserBalance } from "./types";

const getUserBalance = async () => {
  const userId = getUserId();
  const userBalanceRef = doc(collection(firestore, "userBalance"), `${userId}`);
  const querySnapshot = await getDoc(userBalanceRef);
  const balanceData = querySnapshot.data() as IGetUserBalance;

  return balanceData;
};

export default getUserBalance;
