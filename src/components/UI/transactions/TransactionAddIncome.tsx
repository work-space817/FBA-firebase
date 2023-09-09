import InputComponent from "../../common/input/InputComponent";
import * as yup from "yup";
import { useFormik } from "formik";
import DatePicker from "react-datepicker";
import { useSelector, useDispatch } from "react-redux";
import {
  ISelectCategories,
  ModalCloserActionType,
  TransactionListActionType,
} from "../../../store/reducers/types";
import SelectCategories from "../../common/select/SelectCategories";
import SelectCategoriesSVG from "../../../helpers/selectorsSVG/SelectCategoriesSVG";
import { ITransactionAdd } from "./types";
import setTransactionData from "../../../api/transactions/setTransactionData";

const TransactionAddIncome = () => {
  const init: ITransactionAdd = {
    transactionTitle: "",
    transactionValue: 0,
    transactionTime: "",
    transactionDate: "",
  };
  const { selectedCategories } = useSelector(
    (store: any) => store.selectCategories as ISelectCategories
  );
  const dispatch = useDispatch();

  const getCurrentDateTime = () => {
    const now = new Date();

    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const day = now.getDate().toString().padStart(2, "0");
    const month = (now.getMonth() + 1).toString().padStart(2, "0");
    const year = now.getFullYear();

    const transactionTime = `${hours}:${minutes}`;
    const transactionDate = `${day}/${month}/${year}`;
    return (
      (values.transactionDate = transactionDate) &&
      (values.transactionTime = transactionTime)
    );
  };
  const onSubmitHandler = async (values: ITransactionAdd) => {
    try {
      const transactionType = "IncomeTransaction";

      values.transactionDate = getCurrentDateTime();
      values.transactionTime = getCurrentDateTime();
      const currentCategory = {
        ...values,
        selectedCategories,
        transactionType,
      };
      setTransactionData(currentCategory);
      handleReset(values);

      console.log("currentCategory: ", currentCategory);
      console.log("Нова транзакція успішно створена.");
      const updateTransactionList = dispatch({
        type: TransactionListActionType.UPDATE_TRANSACTION_LIST,
      });
      const modalCloser = dispatch({
        type: ModalCloserActionType.MODAL_CLOSE,
        payload: true,
      });
    } catch (error: any) {
      console.log("Bad request", error);
    }
  };
  const checkUpForm = yup.object({
    transactionTitle: yup.string().required("Field should not be empty"),
    transactionValue: yup
      .string()
      .matches(/[0-9]/, "Only number")
      .required("Field should not be empty"),
    transactionDate: yup.string().required("Field should not be empty"),
  });
  const formik = useFormik({
    initialValues: init,
    onSubmit: onSubmitHandler,
    validationSchema: checkUpForm,
  });
  const { values, touched, errors, handleSubmit, handleChange, handleReset } =
    formik;
  console.log(values);
  return (
    <form onSubmit={handleSubmit} className="col">
      <InputComponent
        label="Enter your income title*"
        field="transactionTitle"
        value={values.transactionTitle}
        onChange={handleChange}
        error={errors.transactionTitle}
        touched={touched.transactionTitle}
      />
      <InputComponent
        label="Enter your income value*"
        field="transactionValue"
        value={values.transactionValue}
        onChange={handleChange}
        error={errors.transactionValue}
        touched={touched.transactionValue}
      />
      <label htmlFor="input">Choose the way</label>
      <div className="d-flex justify-content-between align-items-center  mb-3 mt-1">
        <button
          type="button"
          onClick={getCurrentDateTime}
          className="btn text-white bg-primary h-25"
        >
          Current time and date
        </button>
        <h6 className="m-0">OR</h6>
        <button
          type="button"
          onClick={getCurrentDateTime}
          className="btn text-white bg-primary h-25"
        >
          Handle time and date
        </button>
      </div>

      <div className="d-flex gap-2 align-items-center">
        <InputComponent
          label="Enter handle time*"
          type="time"
          field="transactionTime"
          value={values.transactionTime}
          onChange={handleChange}
          error={errors.transactionTime}
          touched={touched.transactionTime}
        />
        <InputComponent
          label="Enter handle date*"
          type="date"
          field="transactionDate"
          value={values.transactionDate}
          onChange={handleChange}
          error={errors.transactionDate}
          touched={touched.transactionDate}
        />
      </div>

      <SelectCategories
        title="Select category of goal"
        icons={[
          { item: <SelectCategoriesSVG id={""} />, id: "Salary" },
          { item: <SelectCategoriesSVG id={""} />, id: "Scholarship" },
          { item: <SelectCategoriesSVG id={""} />, id: "Social payment" },
          { item: <SelectCategoriesSVG id={""} />, id: "Other" },
        ]}
      />
      <button type="submit" className="btn text-white bg-primary">
        Add income transaction
      </button>
    </form>
  );
};

export default TransactionAddIncome;
