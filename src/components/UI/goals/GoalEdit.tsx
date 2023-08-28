import InputComponent from "../../common/input/InputComponent";
import Goal from "./Goal";
import { useDispatch, useSelector } from "react-redux";
import { GoalListActionType, IGoalSelect } from "../../../store/reducers/types";
import { deleteDoc, updateDoc } from "firebase/firestore";
import getGoalsData from "../../../api/goals/getGoalsData";
import * as yup from "yup";
import { useFormik } from "formik";
import { IGoalEdit } from "./types";
import GoalSVG from "../../../helpers/selectorsSVG/UI/GoalSVG";
import GoalSelectSVG from "../../../helpers/selectorsSVG/UI/GoalSelectSVG";
const GoalEdit: React.FC = () => {
  const dispatch = useDispatch();
  const { selectedGoal } = useSelector(
    (store: any) => store.selectGoal as IGoalSelect
  );

  const init: IGoalEdit = {
    title: "",
    cost: "",
    expireDate: "",
  };

  const onSubmitHandler = async (values: any) => {
    try {
      const fetchGoals = await getGoalsData();
      const fetchCurrentGoal = fetchGoals.map((doc) =>
        doc.id === selectedGoal?.id ? updateDoc(doc.ref, values) : null
      );
      const updateGoalList = dispatch({
        type: GoalListActionType.UPDATE_GOALS_LIST,
      });
      console.log("updateGoalList", updateGoalList);
    } catch (error: any) {
      console.log("Bad request", error);
    }
  };

  const goalDoneDelete = async () => {
    try {
      const fetchGoals = await getGoalsData();
      const fetchCurrentGoal = fetchGoals.map((doc) =>
        doc.id === selectedGoal?.id ? deleteDoc(doc.ref) : null
      );
      const updateGoalList = dispatch({
        type: GoalListActionType.UPDATE_GOALS_LIST,
      });
    } catch (error) {
      console.error("Сталася помилка при видаленні цілі:", error);
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
    <>
      <div className="col-5 d-flex rounded-5 shadow align-items-center ">
        <div className="p-3 d-flex flex-column align-items-center col-6 gap-3">
          <h4 className="me-xxl-5 me-0">Edit your goal</h4>
          {selectedGoal?.id ? (
            <Goal
              id={selectedGoal.id}
              cost={selectedGoal.cost}
              expireDate={selectedGoal.expireDate}
              title={selectedGoal.title}
              index={<GoalSVG id="Edit" />}
              selectedGoalCategories={selectedGoal.selectedGoalCategories}
            />
          ) : (
            <Goal
              id={""}
              cost={"$$$"}
              expireDate={"Expire date"}
              title={"Your title"}
              index={<GoalSVG id="Edit" />}
              selectedGoalCategories={<GoalSelectSVG id={""} />}
            />
          )}
          <div className="d-flex justify-content-evenly col-12 mt-1">
            <button
              type="submit"
              className="btn btn-secondary d-flex align-items-center gap-2"
              onClick={goalDoneDelete}
            >
              {/* <GoalSVG id="Success" /> */}

              <p className="m-0 ">Done</p>
            </button>
            <button
              type="submit"
              className="btn btn-secondary d-flex align-items-center gap-2"
              onClick={goalDoneDelete}
            >
              {/* <GoalSVG id="Delete" /> */}

              <p className="m-0 ">Delete</p>
            </button>
          </div>
        </div>
        <div className="">
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
            <button
              type="submit"
              className="btn btn-primary border-0 bg-custom"
            >
              Update goal
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
export default GoalEdit;
