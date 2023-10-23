import { ChangeEvent, FormEvent, useState } from "react";
import { ILogIn } from "./types";
import jwt_decode from "jwt-decode";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AuthUserActionType } from "../../../store/reducers/types";
import InputComponent from "../../common/input/InputComponent";
import { getIdToken, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../api/config";
import setAuthToken from "../../../api/userInfo/setAuthToken";

const LogIn = () => {
  const init: ILogIn = {
    email: "",
    password: "",
  };

  const [error, setError] = useState<string>("");
  const [data, setData] = useState<ILogIn>(init);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onSubmitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const logInResult = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      const user = logInResult.user;
      const userToken = (await getIdToken(user)) as string;
      const uid = auth.currentUser?.uid as string;
      setAuthToken(userToken, uid);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  return (
    <>
      <h1 className="text-center">Вхід на сайт</h1>

      <form onSubmit={onSubmitHandler} className="col-md-6">
        {!!error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}
        <InputComponent
          label="Електронна адреса"
          field="email"
          value={data.email}
          onChange={onChangeHandler}
        />

        <InputComponent
          label="Пароль"
          type="password"
          field="password"
          value={data.password}
          onChange={onChangeHandler}
        />

        <button type="submit" className="btn btn-primary">
          Вхід
        </button>
      </form>
    </>
  );
};

export default LogIn;
