import { createUserWithEmailAndPassword } from "firebase/auth";
import * as yup from "yup";
import { useFormik } from "formik";
import { auth } from "../../../api/firebase/config";
import { ISignUp } from "./types";
import InputComponent from "../../common/input/CommonInput";
import { IBalance } from "../../../api/firebase/user/userBalance/types";
import setUserBalance from "../../../api/firebase/user/userBalance/setUserBalance";
import { useNavigate } from "react-router-dom";
import { AuthUserActionType } from "../../../store/reducers/types";
import { useDispatch } from "react-redux";
import setUserAuth from "../../../api/firebase/user/userInfo/setUserAuth";

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
      const setAuth = await setUserAuth(values, SignUpResult);
      dispatch({ type: AuthUserActionType.LOGIN_USER });
      const userBalance: IBalance = {
        currentBalance: +values.currentBalance,
        incomingBalance: 0,
        outcomingBalance: 0,
      };
      setUserBalance(userBalance);
      navigate("/");
    } catch (error: any) {
      console.log("error: ", error);
      const code = error.code;
      switch (code) {
        case "auth/email-already-in-use":
          setFieldError("email", "Account is already exist");
          break;
        case "auth/invalid-email":
          setFieldError("email", "Bad email adress");
          break;
        case "auth/weak-password":
          setFieldError("password", "Weak password");
          break;
        case "auth/missing-email":
          setFieldError("email", "Email have not to enter");
          break;
        case "auth/user-disabled":
          setFieldError("email", "Account was deleted");
          break;
        default:
          break;
      }
    }
  };

  const checkUpForm = yup.object({
    email: yup
      .string()
      .required("Field should not be empty")
      .email("Enter corrent email"),
    password: yup
      .string()
      .required("Field should not be empty")
      .min(6, "Password must have at least 6 symbols")
      .matches(/[0-9a-zA-Z]/, "Enter only number & eng characters"),
    currentBalance: yup
      .number()
      .positive("Value can not be less than 0")
      .typeError("Please enter numbers")
      .required("Field should not be empty"),
  });
  const formik = useFormik({
    initialValues: init,
    onSubmit: onSubmitHandler,
    validationSchema: checkUpForm,
  });

  const {
    touched,
    errors,
    values,
    handleSubmit,
    handleChange,
    setFieldValue,
    setFieldError,
  } = formik;

  return (
    <>
      <h1 className="text-center">Sign up</h1>
      <form onSubmit={handleSubmit} className="col-md-6">
        <InputComponent
          label="Email"
          type="email"
          field="email"
          value={values.email}
          onChange={handleChange}
          clientSideError={errors.email} //?used formik object "errors"
          touched={touched.email}
          placeholder={"exampleMail@mail.com"}
        />
        <InputComponent
          label="Password"
          type="password"
          field="password"
          value={values.password}
          autoComplete={"current-password"}
          onChange={handleChange}
          clientSideError={errors.password} //?used formik object "errors"
          touched={touched.password}
        />
        <InputComponent
          label="Current balance"
          field="currentBalance"
          value={values.currentBalance}
          onChange={handleChange}
          onFocus={() => {
            setFieldValue("currentBalance", "");
          }}
          clientSideError={errors.currentBalance} //?used formik object "errors"
          touched={touched.currentBalance}
        />
        <button type="submit" className="btn btn-primary">
          Sign up
        </button>
      </form>
    </>
  );
};

export default SignUp;
