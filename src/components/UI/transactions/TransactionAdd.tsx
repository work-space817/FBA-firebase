import InputComponent from "../../common/input/InputComponent";
import * as yup from "yup";
import { useFormik } from "formik";
import { useSelector, useDispatch } from "react-redux";
import {
  ISelectCategories,
  IUserBalance,
  ModalCloserActionType,
  TransactionListActionType,
  UserBalanceActionType,
} from "../../../store/reducers/types";
import SelectCategories from "../../common/selectCategories/SelectCategories";
import SelectCategoriesSVG from "../../../helpers/selectorsSVG/SelectCategoriesSVG";
import { ITransactionAdd } from "./types";
import setTransactionData from "../../../api/transactions/setTransactionData";
import { FC, useState } from "react";
import setUserBalance from "../../../api/userBalance/setUserBalance";

interface ITransactionType {
  transactionType: string;
}

const TransactionAdd: FC<ITransactionType> = ({ transactionType }) => {
  const [currentDateTimeState, setCurrentDateTimeState] = useState(false);
  const [handleDateTimeState, setHandleDateTimeState] = useState(false);
  const [currentTime, setCurrentTime] = useState("");
  const [currentDate, setCurrentDate] = useState("");
  const [iconsHover, setIconsHover] = useState(false);
  const init: ITransactionAdd = {
    transactionTitle: "",
    transactionValue: 0,
    transactionTime: "",
    transactionDate: "",
  };
  const { selectedCategories } = useSelector(
    (store: any) => store.selectCategories as ISelectCategories
  );
  const { balance } = useSelector(
    (store: any) => store.userBalance as IUserBalance
  );

  const dispatch = useDispatch();

  const getCurrentDateTime = () => {
    setCurrentDateTimeState(true);
    setHandleDateTimeState(false);
    const now = new Date();

    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const formattedTime = `${hours}:${minutes}`;
    const formattedDate = now.toLocaleDateString();
    setCurrentDate(formattedDate);
    setCurrentTime(formattedTime);
    values.transactionDate = formattedDate;
    values.transactionTime = formattedTime;
  };
  const handleDateTime = () => {
    setCurrentDateTimeState(false);
    setHandleDateTimeState(true);
  };
  const userBalance = () => {
    if (transactionType == "Income transaction") {
      console.log("updated");
      const changedBalance = {
        currentBalance: balance.currentBalance + values.transactionValue,
        incomingBalance: balance.incomingBalance + values.transactionValue,
        outcomingBalance: balance.outcomingBalance,
      };
      setUserBalance(changedBalance);
    }
    if (transactionType == "Outcome transaction") {
      console.log("updated");
      const changedBalance = {
        currentBalance: balance.currentBalance - values.transactionValue,
        incomingBalance: balance.incomingBalance,
        outcomingBalance: balance.outcomingBalance + values.transactionValue,
      };
      setUserBalance(changedBalance);
    }
  };

  const onSubmitHandler = async (values: ITransactionAdd) => {
    try {
      setCurrentDateTimeState(false);
      setHandleDateTimeState(false);
      setIconsHover(false);
      userBalance();

      const transactionData = {
        ...values,
        selectedCategories,
        transactionType,
      };
      setTransactionData(transactionData);

      console.log("transactionData: ", transactionData);
      console.log("Нова транзакція успішно створена.");
      const updateTransactionList = dispatch({
        type: TransactionListActionType.UPDATE_TRANSACTION_LIST,
      });
      const updateBalance = dispatch({
        type: UserBalanceActionType.UPDATE_BALANCE,
      });

      const modalCloser = dispatch({
        type: ModalCloserActionType.MODAL_CLOSE,
        payload: true,
      });

      handleReset(values);
    } catch (error: any) {
      console.log("Bad request", error);
    }
  };
  const checkUpForm = yup.object({
    transactionTitle: yup.string().required("Field should not be empty"),
    transactionValue: yup
      .number()
      .positive("Value can not be less than 0")
      .required("Field should not be empty"),
    transactionTime: yup.string().required("Field should not be empty"),
    transactionDate: yup.string().required("Field should not be empty"),
  });
  const formik = useFormik({
    initialValues: init,
    onSubmit: onSubmitHandler,
    validationSchema: checkUpForm,
  });
  const {
    values,
    touched,
    errors,
    handleSubmit,
    handleChange,
    handleReset,
    setFieldValue,
  } = formik;
  return (
    <form onSubmit={handleSubmit} className="col">
      <InputComponent
        label="Enter your title*"
        field="transactionTitle"
        value={values.transactionTitle}
        onChange={handleChange}
        error={errors.transactionTitle}
        touched={touched.transactionTitle}
      />
      <InputComponent
        label="Enter your value*"
        type={"number"}
        field="transactionValue"
        value={values.transactionValue}
        onFocus={() => {
          setFieldValue("transactionValue", "");
        }}
        onChange={handleChange}
        error={errors.transactionValue}
        touched={touched.transactionValue}
      />
      <label htmlFor="input">Choose the way*</label>
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
          onClick={handleDateTime}
          className="btn text-white bg-primary h-25"
        >
          Handle time and date
        </button>
      </div>

      {handleDateTimeState ? (
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
      ) : null}

      {currentDateTimeState ? (
        <div className="d-flex gap-3 border rounded-3 py-2 mb-2 ps-2">
          <p className="m-0">Current time: {currentTime}</p>
          <p className="m-0">Current date: {currentDate}</p>
        </div>
      ) : null}
      {transactionType == "Income transaction" ? (
        <SelectCategories
          title="Select category of transaction"
          iconsHover={iconsHover}
          icons={[
            { item: <SelectCategoriesSVG id={"Salary"} />, id: "Salary" },
            {
              item: <SelectCategoriesSVG id={"Social payment"} />,
              id: "Social payment",
            },
            { item: <SelectCategoriesSVG id={""} />, id: "Other" },
          ]}
        />
      ) : (
        <SelectCategories
          title="Select category of goal"
          iconsHover={iconsHover}
          icons={[
            { item: <SelectCategoriesSVG id={"Transport"} />, id: "Transport" },
            { item: <SelectCategoriesSVG id={"Shopping"} />, id: "Shopping" },
            { item: <SelectCategoriesSVG id={"Travels"} />, id: "Travels" },
            {
              item: <SelectCategoriesSVG id={"Renovation"} />,
              id: "Renovation",
            },
            { item: <SelectCategoriesSVG id={"Holidays"} />, id: "Holidays" },
            {
              item: <SelectCategoriesSVG id={"Entertainment"} />,
              id: "Entertainment",
            },
            { item: <SelectCategoriesSVG id={"Other"} />, id: "Other" },
          ]}
        />
      )}

      <button type="submit" className="btn text-white bg-primary">
        Add transaction
      </button>
    </form>
  );
};

export default TransactionAdd;
