import InputComponent from "../../common/input/CommonInput";
import * as yup from "yup";
import { useFormik } from "formik";
import { useSelector, useDispatch } from "react-redux";
import setGoalsData from "../../../api/firebase/goals/setGoalsData";
import {
  ISelectCategories,
  GoalListActionType,
  ModalCloserActionType,
} from "../../../store/reducers/types";
import SelectCategories from "../../common/selectCategories/SelectCategories";
import { IGoalAdd } from "./types";
import SelectCategoriesSVG from "../../../helpers/selectorsSVG/common/SelectCategoriesSVG";
import { format } from "date-fns";
import { useCallback, useMemo, useState } from "react";
import { DayPicker } from "react-day-picker";
const GoalAdd = () => {
  const init: IGoalAdd = {
    title: "",
    cost: 0,
  };
  const { selectedCategories } = useSelector(
    (store: any) => store.selectCategories as ISelectCategories
  );
  const dispatch = useDispatch();
  const today = new Date();
  const [selectedDay, setSelectedDay] = useState<Date | undefined>(today);
  const expireDate = selectedDay?.toLocaleDateString();
  const footer = selectedDay ? (
    <p>You selected {format(selectedDay, "PPP")}.</p>
  ) : (
    <p>Please pick a day.</p>
  );

  const onSubmitHandler = async (values: IGoalAdd) => {
    try {
      const currentCategory = {
        ...values,
        selectedCategories,
        expireDate,
      };
      console.log(currentCategory);
      setGoalsData(currentCategory);
      handleReset(values);
      const updateGoalList = dispatch({
        type: GoalListActionType.UPDATE_GOALS_LIST,
      });
      const modalCloser = dispatch({
        type: ModalCloserActionType.MODAL_CLOSE,
        payload: true,
      });

      console.log("Нова ціль успішно створена.");
    } catch (error: any) {
      console.log("Bad request", error);
    }
  };

  const checkUpForm = yup.object({
    title: yup.string().required("Field should not be empty"),
    cost: yup
      .number()
      .positive("Value can not be less than 0")
      .required("Field should not be empty"),
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
  const iconsList = useMemo(
    () => [
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
      { item: <SelectCategoriesSVG id={""} />, id: "Other" },
    ],
    []
  );
  const handleFocus = useCallback(() => {
    setFieldValue("cost", "");
  }, [setFieldValue]);
  return (
    <form
      onSubmit={handleSubmit}
      className="d-flex align-items-center flex-column"
    >
      <DayPicker
        fromDate={today}
        mode="single"
        required
        ISOWeek
        selected={selectedDay}
        onSelect={setSelectedDay}
        footer={footer}
        className="rounded-4 d-flex justify-content-center shadow col p-3 p-md-2 col-md-8"
      />
      <div className="col-12">
        <InputComponent
          label="Enter your title*"
          field="title"
          value={values.title}
          onChange={handleChange}
          clientSideError={errors.title}
          touched={touched.title}
        />
        <InputComponent
          label="Enter goals' cost*"
          field="cost"
          type={"number"}
          value={values.cost}
          onChange={handleChange}
          onFocus={handleFocus}
          clientSideError={errors.cost}
          touched={touched.cost}
        />
        <SelectCategories
          title="Select category of goal"
          iconsHover={false}
          icons={iconsList}
        />
        <button type="submit" className="btn btn-primary">
          Add goal
        </button>
      </div>
    </form>
  );
};

export default GoalAdd;
