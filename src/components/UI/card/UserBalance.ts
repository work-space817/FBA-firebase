import React, { useEffect, useState } from "react";
import { IGetUserBalance } from "../../../api/userBalance/types";
import { ISignUp } from "../../auth/register/types";
import { useDispatch, useSelector } from "react-redux";
import getUserBalance from "../../../api/userBalance/getUserBalance";
import {
  IUserBalance,
  UserBalanceActionType,
} from "../../../store/reducers/types";

const UserBalance = () => {
  const [a, seta] = useState<IGetUserBalance>();
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch();
  const { isUpdatedBalance } = useSelector(
    (store: any) => store.userBalance as IUserBalance
  );
  const fetchUserBalances = async () => {
    try {
      const fetchUserBalance = await getUserBalance();
      console.log(fetchUserBalance);
      seta(fetchUserBalance);
      // const b = dispatch({
      //   type: UserBalanceActionType.SET_BALANCE,
      //   payload: fetchUserBalance.currentBalance,
      // });
      // console.log("b", b);
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
  // return loading;
  return a;
};

export default UserBalance;
