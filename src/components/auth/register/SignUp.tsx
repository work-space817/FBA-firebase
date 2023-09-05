import { createUserWithEmailAndPassword, getIdToken } from "firebase/auth";
import * as yup from "yup";
import { useFormik } from "formik";
import { auth, firestore } from "../../../api/config";
import { ISignUp } from "./types";
import InputComponent from "../../common/input/InputComponent";
import setAuthToken from "../../../api/userInfo/setAuthToken";
import { useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
import setUserBalance from "../../../api/userBalance/setUserBalance";
import { useDispatch } from "react-redux";
import { UserBalanceActionType } from "../../../store/reducers/types";

const SignUp = () => {
  const init: ISignUp = {
    email: "",
    password: "",
    currentBalance: 0,
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onSubmitHandler = async (values: any) => {
    try {
      const SignUpResult = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      const user = SignUpResult.user;
      const userToken = (await getIdToken(user)) as string;
      const uid = auth.currentUser?.uid as string;
      setAuthToken(userToken, uid);

      const userId = user.uid;
      const additionalUserInformation = doc(firestore, "users", userId);
      await setDoc(additionalUserInformation, {
        ...values,
      });

      const currentBalance = dispatch({
        type: UserBalanceActionType.SET_CURRENT_BALANCE,
        payload: values.currentBalance,
      });
      await setUserBalance(currentBalance.payload);
      console.log(currentBalance);
      console.log("Новий користувач створений", values);
      // navigate("/");
    } catch (error: any) {
      console.log("Bad request", error);
    }
  };

  const checkUpForm = yup.object({
    email: yup.string().required("Field should not be empty"),
    password: yup.string().required("Field should not be empty"),
    currentBalance: yup.number().required("Field should not be empty"),
  });
  const formik = useFormik({
    initialValues: init,
    onSubmit: onSubmitHandler,
    validationSchema: checkUpForm,
  });

  const { values, touched, errors, handleSubmit, handleChange, setFieldValue } =
    formik;

  return (
    <>
      <h1 className="text-center">Реєстрація на сайт</h1>
      <form onSubmit={handleSubmit} className="col-md-6">
        <InputComponent
          label="Електронна адреса"
          type="email"
          field="email"
          value={values.email}
          onChange={handleChange}
        />
        <InputComponent
          label="Пароль"
          type="password"
          field="password"
          value={values.password}
          onChange={handleChange}
        />
        <InputComponent
          label="Current balance"
          field="currentBalance"
          value={values.currentBalance}
          onChange={handleChange}
        />
        <button type="submit" className="btn btn-primary">
          Sign up
        </button>
      </form>
    </>
  );
};

export default SignUp;
