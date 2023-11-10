import InputComponent from "../../common/input/InputComponent";
import Goal from "./Goal";
import { useDispatch, useSelector } from "react-redux";
import {
  GoalListActionType,
  GoalSelectActionType,
  IGoalSelect,
} from "../../../store/reducers/types";
import { deleteDoc, updateDoc } from "firebase/firestore";
import getGoalsData from "../../../api/firebase/goals/getGoalsData";
import * as yup from "yup";
import { useFormik } from "formik";
import { IGoalEdit } from "./types";
import GoalSVG from "../../../helpers/selectorsSVG/UI/GoalSVG";
import { memo, useCallback, useMemo } from "react";
import SelectCategoriesSVG from "../../../helpers/selectorsSVG/common/SelectCategoriesSVG";

const GoalEdit = memo(() => {
  const dispatch = useDispatch();
  const { selectedGoal } = useSelector(
    (store: any) => store.selectGoal as IGoalSelect
  );
  const init: IGoalEdit = {
    title: "",
    cost: 0,
    expireDate: "",
  };

  const onSubmitHandler = async (values: any) => {
    try {
      const fetchGoals = await getGoalsData();
      const fetchCurrentGoal = fetchGoals.map((doc) =>
        doc.id === selectedGoal?.id ? updateDoc(doc.ref, values) : null
      );
      handleReset(values);
      const updateGoalList = dispatch({
        type: GoalListActionType.UPDATE_GOALS_LIST,
      });
      dispatch({
        type: GoalSelectActionType.GOAL_SELECT,
        selectedGoal: null,
      });
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
      dispatch({
        type: GoalSelectActionType.GOAL_SELECT,
        selectedGoal: null,
      });
    } catch (error) {
      console.error("Сталася помилка при видаленні цілі:", error);
    }
  };

  const checkUpForm = yup.object({
    title: yup.string().required("Field should not be empty"),
    cost: yup
      .number()
      .positive("Value can not be less than 0")
      .required("Field should not be empty"),
    expireDate: yup.string().required("Field should not be empty"),
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
  const handleFocus = useCallback(() => {
    setFieldValue("cost", "");
  }, [setFieldValue]);
  return (
    <>
      <div className="col-11 col-sm-8 col-md-5 d-flex rounded-5 shadow align-items-center ">
        <div className="p-3 d-flex flex-column align-items-center col-6 gap-3">
          <h4 className="me-xxl-3 me-0">Edit your goal</h4>
          {selectedGoal != null ? (
            <Goal
              id={selectedGoal.id}
              cost={selectedGoal.cost}
              expireDate={selectedGoal.expireDate}
              title={selectedGoal.title}
              index={<GoalSVG id="Edit" />}
              selectedCategories={selectedGoal.selectedCategories}
            />
          ) : (
            <button
              className="rounded-5 text-start"
              disabled={selectedGoal === null}
            >
              <Goal
                id={""}
                cost={0}
                expireDate={"Expire date"}
                title={"Your title"}
                index={<GoalSVG id="Edit" />}
                selectedCategories={<SelectCategoriesSVG id={""} />}
              />
            </button>
          )}
          <div className="d-flex justify-content-evenly col-12 mt-1">
            <button
              disabled={selectedGoal === null}
              type="submit"
              className="btn btn-secondary d-flex align-items-center gap-2"
              onClick={goalDoneDelete}
            >
              <p className="m-0 ">Done</p>
            </button>
            <button
              disabled={selectedGoal === null}
              type="submit"
              className="btn btn-secondary d-flex align-items-center gap-2"
              onClick={goalDoneDelete}
            >
              <p className="m-0 ">Delete</p>
            </button>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="col-5">
          <InputComponent
            label="Enter your title"
            field="title"
            value={values.title}
            onChange={handleChange}
            clientSideError={errors.title}
            touched={touched.title}
            disabled={selectedGoal === null}
          />
          <InputComponent
            label="Enter goals' cost"
            field="cost"
            type="number"
            value={values.cost}
            onChange={handleChange}
            clientSideError={errors.cost}
            touched={touched.cost}
            onFocus={handleFocus}
            disabled={selectedGoal === null}
          />
          <InputComponent
            label="Expire date"
            type="date"
            field="expireDate"
            value={values.expireDate}
            onChange={handleChange}
            clientSideError={errors.expireDate}
            touched={touched.expireDate}
            disabled={selectedGoal === null}
          />
          <button
            type="submit"
            className="btn btn-primary border-0 bg-custom"
            disabled={selectedGoal === null}
          >
            Update goal
          </button>
        </form>
      </div>
    </>
  );
});
export default GoalEdit;
