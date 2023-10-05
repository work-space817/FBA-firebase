import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import getUserBalance from "../../../api/userBalance/getUserBalance";
import {
  IUserBalance,
  UserBalanceActionType,
} from "../../../store/reducers/types";

const UserBalance = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch();
  const { isUpdatedBalance } = useSelector(
    (store: any) => store.userBalance as IUserBalance
  );
  const fetchUserBalances = async () => {
    try {
      setLoading(true);
      const fetchUserBalance = await getUserBalance();
      console.log("fetchUserBalance", fetchUserBalance);
      dispatch({
        type: UserBalanceActionType.SET_BALANCE,
        payload: fetchUserBalance,
      });
      setLoading(false);
    } catch (error) {
      console.error(
        "Сталася помилка при отриманні балансу користувача:",
        error
      );
    }
  };
  useEffect(() => {
    fetchUserBalances();
  }, [isUpdatedBalance]);
  return loading;
};

export default UserBalance;
