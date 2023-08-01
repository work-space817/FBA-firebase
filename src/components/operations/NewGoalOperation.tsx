import React, { ChangeEvent, useEffect, useState } from "react";
import { IGoalOperation } from "./types";
import InputComponent from "../common/input/Input";
import { auth, firestore } from "../../api/config";
import { addDoc, collection, doc } from "firebase/firestore";
import getUserId from "../../api/getUserId";

const NewGoalOperation = () => {
  const init: IGoalOperation = {
    title: "",
    cost: "",
    expireDate: "",
  };

  const [data, setData] = useState<IGoalOperation>(init);

  const onChangeHandler = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const onSubmitHandler = async (e: any) => {
    try {
      const userId = getUserId();
      const userGoalsRef = doc(collection(firestore, "goals"), `${userId}`);
      await addDoc(collection(userGoalsRef, "goal"), {
        ...data,
      });
      console.log("Нова ціль успішно створена.");
    } catch (err: any) {
      console.log("Bad request", err);
    }
  };
  return (
    <form onSubmit={onSubmitHandler} className="col">
      {/* {!!error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )} */}
      <InputComponent
        label="Enter your title"
        field="title"
        value={data.title}
        onChange={onChangeHandler}
      />
      <InputComponent
        label="Enter goals' cost"
        field="cost"
        value={data.cost}
        onChange={onChangeHandler}
      />
      <InputComponent
        label="Expire date (dd/mm/yyyy)"
        field="expireDate"
        value={data.expireDate}
        onChange={onChangeHandler}
      />

      <button type="submit" className="btn btn-primary">
        Вхід
      </button>
    </form>
  );
};

export default NewGoalOperation;
