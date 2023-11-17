import { signInWithEmailAndPassword } from "firebase/auth";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { AuthUserActionType } from "../../store/reducers/types";
import CommonInput from "../common/input/CommonInput";
import getUserInformation from "../../api/firebase/user/userInfo/getUserInformation";
import InputFileGroup from "../common/input/InputFileGroup";
import updateUserInformation from "../../api/firebase/user/userInfo/updateUserInformation";
import { auth } from "../../api/firebase/config";

const UserProfileSetting = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userData, setUserData] = useState<any>();
  useEffect(() => {
    const userInfo = async () => {
      const fetchUserInfo = await getUserInformation();
      setUserData(fetchUserInfo);
    };
    userInfo();
  }, []);
  // console.log("userData: ", userData);

  const init = {
    email: "",
    password: "",
    newPassword: "",
    photo: "",
  };
  const onSubmitHandler = async (values: any) => {
    try {
      const reauthenticateResult = await signInWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      // console.log("values: ", values);
      await updateUserInformation(values);
      handleReset(values);
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
    photo: yup.string(),
    email: yup
      .string()
      .required("Field should not be empty")
      .email("Enter corrent email"),
    password: yup
      .string()
      .required("Field should not be empty")
      .min(6, "Password must have at least 6 symbols")
      .matches(/[0-9a-zA-Z]/, "Enter only number & eng characters"),
    newPassword: yup
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
  const {
    touched,
    errors,
    values,
    handleSubmit,
    handleChange,
    setFieldError,
    handleReset,
    setFieldValue,
  } = formik;
  return (
    <div className="shadow rounded-5 col col-md-5">
      <div className="p-4">
        <h3 className="ms-0 mb-3">Edit profile</h3>
        <form onSubmit={handleSubmit} className="">
          <InputFileGroup
            label="Photo of profile"
            field="photo"
            onSelectFile={(base64) => {
              setFieldValue("photo", base64);
            }}
            // clientSideError={errors.photo}
            touched={touched.photo}
            sourceData={userData?.photo}
          />
          <div className="col">
            <CommonInput
              label="Enter current email"
              type="email"
              field="email"
              value={values.email}
              placeholder={userData?.email}
              onChange={handleChange}
              clientSideError={errors.email} //?used formik object "errors"
              touched={touched.email}
            />
            <CommonInput
              label="Enter current password"
              type="password"
              field="password"
              value={values.password}
              autoComplete={"current-password"}
              onChange={handleChange}
              clientSideError={errors.password} //?used formik object "errors"
              touched={touched.password}
            />
            <CommonInput
              label="Changed password"
              type="password"
              field="newPassword"
              value={values.newPassword}
              autoComplete={"current-newPassword"}
              onChange={handleChange}
              clientSideError={errors.newPassword} //?used formik object "errors"
              touched={touched.newPassword}
            />
            <div className="d-flex justify-content-between">
              <button type="submit" className="btn btn-primary">
                Apply changes
              </button>
              <button
                type="submit"
                className="btn btn-secondary"
                onClick={() => {
                  localStorage.removeItem("token");
                  localStorage.removeItem("uid");
                  dispatch({ type: AuthUserActionType.LOGOUT_USER });
                  navigate("/auth");
                }}
              >
                Log out
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserProfileSetting;
