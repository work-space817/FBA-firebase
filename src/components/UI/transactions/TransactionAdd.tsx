import InputComponent from "../../common/input/InputComponent";
import * as yup from "yup";
import { useFormik } from "formik";
import DatePicker from "react-datepicker";
import { useSelector, useDispatch } from "react-redux";
import setGoalsData from "../../../api/goals/setGoalsData";
import {
  ISelectCategories,
  GoalListActionType,
  ModalCloserActionType,
  TransactionListActionType,
} from "../../../store/reducers/types";
import SelectCategories from "../../common/select/SelectCategories";
import SelectCategoriesSVG from "../../../helpers/selectorsSVG/SelectCategoriesSVG";
import { ITransactionAdd } from "./types";
import setTransactionData from "../../../api/transactions/setTransactionData";

const TransactionAdd = () => {
  const init: ITransactionAdd = {
    incomeTitle: "",
    incomeValue: 0,
    incomeDate: "",
  };
  const { selectedCategories } = useSelector(
    (store: any) => store.selectCategories as ISelectCategories
  );
  const dispatch = useDispatch();

  const onSubmitHandler = async (values: ITransactionAdd) => {
    try {
      const currentCategory = { ...values, selectedCategories };
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
    incomeTitle: yup.string().required("Field should not be empty"),
    incomeValue: yup
      .string()
      .matches(/[0-9]/, "Only number")
      .required("Field should not be empty"),
    incomeDate: yup.string().required("Field should not be empty"),
  });
  const formik = useFormik({
    initialValues: init,
    onSubmit: onSubmitHandler,
    validationSchema: checkUpForm,
  });
  const { values, touched, errors, handleSubmit, handleChange, handleReset } =
    formik;

  return (
    <form onSubmit={handleSubmit} className="col">
      <InputComponent
        label="Enter your income title*"
        field="incomeTitle"
        value={values.incomeTitle}
        onChange={handleChange}
        error={errors.incomeTitle}
        touched={touched.incomeTitle}
      />
      <InputComponent
        label="Enter your income value*"
        field="incomeValue"
        value={values.incomeValue}
        onChange={handleChange}
        error={errors.incomeValue}
        touched={touched.incomeValue}
      />
      <InputComponent
        label="Enter date, when it was*"
        type="date"
        field="incomeDate"
        value={values.incomeDate}
        onChange={handleChange}
        error={errors.incomeDate}
        touched={touched.incomeDate}
      />
      <SelectCategories
        title="Select category of goal"
        icons={[
          { item: <SelectCategoriesSVG id={"Transport"} />, id: "Transport" },
          { item: <SelectCategoriesSVG id={"Shopping"} />, id: "Shopping" },
          { item: <SelectCategoriesSVG id={"Travels"} />, id: "Travels" },
          { item: <SelectCategoriesSVG id={"Renovation"} />, id: "Renovation" },
          { item: <SelectCategoriesSVG id={"Holidays"} />, id: "Holidays" },
          {
            item: <SelectCategoriesSVG id={"Entertainment"} />,
            id: "Entertainment",
          },
          { item: <SelectCategoriesSVG id={""} />, id: "Other" },
        ]}
      />
      <button type="submit" className="btn text-white bg-primary">
        Add income transaction
      </button>
    </form>
  );
};

export default TransactionAdd;
