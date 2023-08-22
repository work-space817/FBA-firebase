import {
  createUserWithEmailAndPassword,
  getIdToken,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { ChangeEvent, useState } from "react";
import { auth, firestore } from "../../../api/config";
import { ISignUp } from "./types";
import InputComponent from "../../common/input/InputComponent";
import setAuthToken from "../../../api/userInfo/setAuthToken";
import { useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";

const SignUp = () => {
  const init: ISignUp = {
    email: "",
    password: "",
    displayName: "",
    currentBalance: 0,
  };
  const [userData, setUserData] = useState<ISignUp>(init);
  const navigate = useNavigate();

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = async (e: any) => {
    e.preventDefault();
    try {
      const SignUpResult = await createUserWithEmailAndPassword(
        auth,
        userData.email,
        userData.password
      );
      const user = SignUpResult.user;
      const userToken = (await getIdToken(user)) as string;
      const uid = auth.currentUser?.uid as string;
      setAuthToken(userToken, uid);

      const userId = user.uid;
      const additionalUserInformation = doc(firestore, "users", userId);
      await setDoc(additionalUserInformation, {
        ...userData,
      });

      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  // const signInWithGoogle = async () => {
  //   try {
  //     await signInWithPopup(auth, googleProvider);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
      <h1 className="text-center">Реєстрація на сайт</h1>
      <form onSubmit={onSubmitHandler} className="col-md-6">
        <InputComponent
          label="Електронна адреса"
          type="email"
          field="email"
          value={userData.email}
          onChange={onChangeHandler}
        />{" "}
        <InputComponent
          label="Пароль"
          type="password"
          field="password"
          value={userData.password}
          onChange={onChangeHandler}
        />
        <InputComponent
          label="Name"
          field="displayName"
          value={userData.displayName}
          onChange={onChangeHandler}
        />
        <InputComponent
          label="Current balance"
          field="currentBalance"
          value={userData.currentBalance}
          onChange={onChangeHandler}
        />
        <button type="submit" className="btn btn-primary">
          Вхід
        </button>
      </form>
    </>
  );
};

export default SignUp;
