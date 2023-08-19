import React, { ChangeEvent, useEffect, useState } from "react";
import { IGoalOperation } from "./types";
import InputComponent from "../common/input/Input";
import { auth, firestore } from "../../api/config";
import { addDoc, collection, doc } from "firebase/firestore";
import getUserId from "../../api/getUserId";
import * as yup from "yup";
import { useFormik } from "formik";
import DatePicker from "react-datepicker";

const NewGoalOperation = () => {
  const init: IGoalOperation = {
    id: "",
    title: "",
    cost: "",
    expireDate: "",
  };
  const onSubmitHandler = async (values: IGoalOperation) => {
    try {
      const userId = getUserId();
      const userGoalsRef = doc(collection(firestore, "goals"), `${userId}`);
      await addDoc(collection(userGoalsRef, "goal"), {
        ...values,
      });

      console.log("Нова ціль успішно створена.");
      //?
      window.location.reload();
    } catch (error: any) {
      console.log("Bad request", error);
    }
  };
  const checkUpForm = yup.object({
    title: yup.string().required("indicate your target"),
    cost: yup
      .string()
      .matches(/[0-9]/, "Only number")
      .required("Поле не повинне бути пустим"),
    expireDate: yup.string().required("Поле не повинне бути пустим"),
  });
  const formik = useFormik({
    initialValues: init,
    onSubmit: onSubmitHandler,
    validationSchema: checkUpForm,
  });
  const { values, touched, errors, handleSubmit, handleChange } = formik;

  return (
    <form onSubmit={handleSubmit} className="col">
      <InputComponent
        label="Enter your title"
        field="title"
        value={values.title}
        onChange={handleChange}
        error={errors.title}
        touched={touched.title}
      />
      <InputComponent
        label="Enter goals' cost"
        field="cost"
        value={values.cost}
        onChange={handleChange}
        error={errors.cost}
        touched={touched.cost}
      />
      <InputComponent
        label="Expire date"
        type="date"
        field="expireDate"
        value={values.expireDate}
        onChange={handleChange}
        error={errors.expireDate}
        touched={touched.expireDate}
      />

      <button type="submit" className="btn btn-primary">
        Add goal
      </button>
    </form>
  );
};

export default NewGoalOperation;
