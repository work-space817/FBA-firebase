import React, { ChangeEvent, useEffect, useState } from "react";
import { IGoalOperation, IRegisterError } from "./types";
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
  const [error, setError] = useState<IRegisterError>();

  const onChangeHandler = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const onSubmitHandler = async (e: any) => {
    e.preventDefault();
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
  // const checkUp = yup.object({
  //   title: yup.string().required("indicate your target"),
  //   cost: yup
  //     .string()
  //     .matches(/[0-9]/, "Only number")
  //     .required("Поле не повинне бути пустим"),
  //   expireDate: yup.string().required("Поле не повинне бути пустим"),
  // });
  // const formik = useFormik({
  //   initialValues: init,
  //   onSubmit: onSubmitHandler,
  //   validationSchema: checkUp,
  // });
  // const { touched, errors } = formik;
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
        // errors={error?.title}
        // error={errors.title}
        // touched={touched.title}
      />
      <InputComponent
        label="Enter goals' cost"
        field="cost"
        value={data.cost}
        onChange={onChangeHandler}
        // errors={error?.cost}
        // error={errors.cost}
        // touched={touched.cost}
      />
      <InputComponent
        label="Expire date (dd/mm/yyyy)"
        field="expireDate"
        value={data.expireDate}
        onChange={onChangeHandler}
        // errors={error?.expireDate}
        // error={errors.expireDate}
        // touched={touched.expireDate}
      />

      <button type="submit" className="btn btn-primary">
        Вхід
      </button>
    </form>
  );
};

export default NewGoalOperation;
