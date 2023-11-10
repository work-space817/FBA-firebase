import { ILogIn } from "./types";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AuthUserActionType } from "../../../store/reducers/types";
import InputComponent from "../../common/input/CommonInput";
import { getIdToken, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../api/firebase/config";
import setAuthToken from "../../../helpers/functions/setAuthToken";
import { useFormik } from "formik";
import setUserAuth from "../../../api/firebase/user/userInfo/setUserAuth";
const LogIn = () => {
  const init: ILogIn = {
    email: "",
    password: "",
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const onSubmitHandler = async (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   try {
  //     const logInResult = await signInWithEmailAndPassword(
  //       auth,
  //       data.email,
  //       data.password
  //     );
  //     const user = logInResult.user;
  //     const userToken = (await getIdToken(user)) as string;
  //     const uid = auth.currentUser?.uid as string;
  //     setAuthToken(userToken, uid);
  //     dispatch({ type: AuthUserActionType.LOGIN_USER });
  //     navigate("/");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  const onSubmitHandler = async (values: ILogIn) => {
    try {
      const logInResult = await signInWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      // const user = logInResult.user;
      // const userToken = (await getIdToken(user)) as string;
      // const uid = auth.currentUser?.uid as string;
      await setAuthToken(logInResult);
      dispatch({ type: AuthUserActionType.LOGIN_USER });
      navigate("/");
    } catch (error: any) {
      console.log(error);
      const code = error.code;
      console.log(code);
      switch (code) {
        case "auth/user-not-found":
          setFieldError("email", "User was not found");
          break;
        case "auth/wrong-password":
          setFieldError("password", "Wrong password");
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
  });
  const formik = useFormik({
    initialValues: init,
    onSubmit: onSubmitHandler,
    validationSchema: checkUpForm,
  });
  const { touched, errors, values, handleSubmit, handleChange, setFieldError } =
    formik;

  return (
    <>
      <h3 className="text-center">Log In</h3>

      <form onSubmit={handleSubmit} className="col-md-6">
        <InputComponent
          label="Email"
          type="email"
          field="email"
          value={values.email}
          onChange={handleChange}
          clientSideError={errors.email} //?used formik object "errors"
          touched={touched.email}
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

        <button type="submit" className="btn btn-primary">
          Log in
        </button>
      </form>
    </>
  );
};

export default LogIn;
