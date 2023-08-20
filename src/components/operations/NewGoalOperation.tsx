import { IGoalOperation } from "./types";
import InputComponent from "../common/input/Input";
import { firestore } from "../../api/config";
import { addDoc, collection, doc } from "firebase/firestore";
import getUserId from "../../api/userInfo/getUserId";
import * as yup from "yup";
import { useFormik } from "formik";
import DatePicker from "react-datepicker";
import setGoalsData from "../../api/goals/setGoalsData";

const NewGoalOperation = () => {
  const init: IGoalOperation = {
    title: "",
    cost: "",
    expireDate: "",
  };
  const onSubmitHandler = async (values: IGoalOperation) => {
    try {
      // const userId = getUserId();
      // const userGoalsRef = doc(collection(firestore, "goals"), `${userId}`);
      // await addDoc(collection(userGoalsRef, "goal"), {
      //   ...values,
      // });
      const goalData = setGoalsData(values);

      console.log("Нова ціль успішно створена.");
    } catch (error: any) {
      console.log("Bad request", error);
    }
    //!
    window.location.reload();
  };
  const checkUpForm = yup.object({
    title: yup.string().required("Field should not be empty"),
    cost: yup
      .string()
      .matches(/[0-9]/, "Only number")
      .required("Field should not be empty"),
    expireDate: yup.string().required("Field should not be empty"),
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

      <button type="submit" className="btn text-white bg-custom">
        Add goal
      </button>
    </form>
  );
};

export default NewGoalOperation;
