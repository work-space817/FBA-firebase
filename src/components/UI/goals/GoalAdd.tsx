import InputComponent from "../../common/input/InputComponent";
import * as yup from "yup";
import { useFormik } from "formik";
import DatePicker from "react-datepicker";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import setGoalsData from "../../../api/goals/setGoalsData";
import {
  ISelectCategories,
  GoalListActionType,
} from "../../../store/reducers/types";
import SelectCategories from "../../common/select/SelectCategories";
import { IGoalAdd } from "./types";
import SelectCategoriesSVG from "../../../helpers/selectorsSVG/SelectCategoriesSVG";

const GoalAdd = () => {
  const init: IGoalAdd = {
    title: "",
    cost: "",
    expireDate: "",
  };
  const { selectedCategories } = useSelector(
    (store: any) => store.selectCategories as ISelectCategories
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmitHandler = async (values: IGoalAdd) => {
    try {
      const currentCategory = { ...values, selectedCategories };
      setGoalsData(currentCategory);
      const updateGoalList = dispatch({
        type: GoalListActionType.UPDATE_GOALS_LIST,
      });
      console.log("Нова ціль успішно створена.");
    } catch (error: any) {
      console.log("Bad request", error);
    }
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
        label="Enter your title*"
        field="title"
        value={values.title}
        onChange={handleChange}
        error={errors.title}
        touched={touched.title}
      />
      <InputComponent
        label="Enter goals' cost*"
        field="cost"
        value={values.cost}
        onChange={handleChange}
        error={errors.cost}
        touched={touched.cost}
      />
      <InputComponent
        label="Expire date*"
        type="date"
        field="expireDate"
        value={values.expireDate}
        onChange={handleChange}
        error={errors.expireDate}
        touched={touched.expireDate}
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
        Add goal
      </button>
    </form>
  );
};

export default GoalAdd;