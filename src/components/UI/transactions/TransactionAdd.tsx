import { ITransactionAdd } from "./types";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import { useFormik } from "formik";
import SelectCategoriesSVG from "../../../helpers/selectorsSVG/SelectCategoriesSVG";
import { ISelectCategories } from "../../../store/reducers/types";
import InputComponent from "../../common/input/InputComponent";
import SelectCategories from "../../common/select/SelectCategories";

const TransactionAdd = () => {
  const init: ITransactionAdd = {
    income: "",
  };
  const { selectedCategories } = useSelector(
    (store: any) => store.selectCategories as ISelectCategories
  );
  const dispatch = useDispatch();

  const onSubmitHandler = async (values: ITransactionAdd) => {
    try {
      // const currentCategory = { ...values, selectedCategories };
      // setGoalsData(currentCategory);
      console.log("Нова ціль успішно створена.");
    } catch (error: any) {
      console.log("Bad request", error);
    }
  };

  const checkUpForm = yup.object({
    income: yup.string().required("Field should not be empty"),
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
        label="Enter your income*"
        field="income"
        value={values.income}
        onChange={handleChange}
        error={errors.income}
        touched={touched.income}
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

export default TransactionAdd;
