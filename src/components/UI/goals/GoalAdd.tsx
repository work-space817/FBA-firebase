import InputComponent from "../../common/input/InputComponent";
import * as yup from "yup";
import { useFormik } from "formik";
import DatePicker from "react-datepicker";
import setGoalsData from "../../../api/goals/setGoalsData";
import GoalSelectCategories from "./GoalSelectIcons";
import { useSelector } from "react-redux";
import { IGoalSelectCategories } from "../../../store/reducers/types";
import { IGoalAdd } from "./types";
import GoalSelectSVG from "../../../helpers/selectorsSVG/UI/GoalSelectSVG";
import { useNavigate } from "react-router-dom";

const GoalAdd = () => {
  const init: IGoalAdd = {
    title: "",
    cost: "",
    expireDate: "",
  };
  const { selectedGoalCategories, isSelectedGoalCategories } = useSelector(
    (store: any) => store.goalSelectCategories as IGoalSelectCategories
  );
  const navigate = useNavigate();
  const onSubmitHandler = async (values: IGoalAdd) => {
    try {
      const currentGoalCategory = { ...values, selectedGoalCategories };
      setGoalsData(currentGoalCategory);
      // console.log("setGoalsData: ", currentGoalCategory);
      console.log("Нова ціль успішно створена.");
      navigate("/transactions");
    } catch (error: any) {
      console.log("Bad request", error);
    }
    //!
    // window.location.reload();
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
      <GoalSelectCategories
        title="Select category of goal"
        icons={[
          { item: <GoalSelectSVG id={"Transport"} />, id: "Transport" },
          { item: <GoalSelectSVG id={"Shopping"} />, id: "Shopping" },
          { item: <GoalSelectSVG id={"Travels"} />, id: "Travels" },
          { item: <GoalSelectSVG id={"Renovation"} />, id: "Renovation" },
          { item: <GoalSelectSVG id={"Holidays"} />, id: "Holidays" },
          {
            item: <GoalSelectSVG id={"Entertainment"} />,
            id: "Entertainment",
          },
          { item: <GoalSelectSVG id={""} />, id: "Other" },
        ]}
      />

      <button type="submit" className="btn text-white bg-primary">
        Add goal
      </button>
    </form>
  );
};

export default GoalAdd;
