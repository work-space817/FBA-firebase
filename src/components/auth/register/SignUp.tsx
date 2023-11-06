import { createUserWithEmailAndPassword, getIdToken } from "firebase/auth";
import * as yup from "yup";
import { useFormik } from "formik";
import { auth, firestore } from "../../../api/config";
import { ISignUp } from "./types";
import InputComponent from "../../common/input/InputComponent";
import setAuthToken from "../../../api/firebase/userInfo/setAuthToken";
import { doc, setDoc } from "firebase/firestore";
import { IBalance } from "../../../api/firebase/userBalance/types";
import setUserBalance from "../../../api/firebase/userBalance/setUserBalance";
import { useNavigate } from "react-router-dom";
import { AuthUserActionType } from "../../../store/reducers/types";
import { useDispatch } from "react-redux";

const SignUp = () => {
  const init: ISignUp = {
    email: "",
    password: "",
    currentBalance: 0,
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onSubmitHandler = async (values: ISignUp) => {
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
      dispatch({ type: AuthUserActionType.LOGIN_USER });

      console.log("signed up");
      navigate("/");
      const userId = user.uid;
      const additionalUserInformation = doc(firestore, "users", userId);
      await setDoc(additionalUserInformation, {
        ...values,
      });

      const userBalance: IBalance = {
        currentBalance: +values.currentBalance,
        incomingBalance: 0,
        outcomingBalance: 0,
      };
      setUserBalance(userBalance);
    } catch (error: any) {
      console.log("Bad request", error);
    }
  };
  const checkUpForm = yup.object({
    email: yup.string().required("Field should not be empty"),
    password: yup.string().required("Field should not be empty"),
    currentBalance: yup
      .number()
      .positive("Value can not be less than 0")
      .required("Field should not be empty"),
  });
  const formik = useFormik({
    initialValues: init,
    onSubmit: onSubmitHandler,
    validationSchema: checkUpForm,
  });

  const { values, handleSubmit, handleChange, setFieldValue } = formik;

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
          onFocus={() => {
            setFieldValue("currentBalance", "");
          }}
        />
        <button type="submit" className="btn btn-primary">
          Sign up
        </button>
      </form>
    </>
  );
};

export default SignUp;
