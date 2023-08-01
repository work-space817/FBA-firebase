import { ChangeEvent, FormEvent, useState } from "react";
import { ILogIn, IUser } from "./types";
import jwt_decode from "jwt-decode";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AuthUserActionType } from "../../../store/reducers/types";
import InputComponent from "../../common/input/Input";

const LogIn = () => {
  const init: ILogIn = {
    email: "",
    password: "",
  };

  const [error, setError] = useState<string>("");
  const [data, setData] = useState<ILogIn>(init);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // http
    //   .post("api/account/login", data)
    //   .then((resp) => {
    //     console.log("resp: ", resp);
    //     const token = resp.data.token as string;
    //     setAuthToken(token);
    //     const user = jwt_decode<IUser>(token);
    //     dispatch({ type: AuthUserActionType.LOGIN_USER, payload: user });
    //     navigate("/");
    //   })
    //   .catch((badReqeust) => {
    //     // const errors = badReqeust.response.data.errors as ILoginPageError;
    //     console.log("Вхід не успішний", badReqeust.response.data);
    //     setError("Дані вказано не вірно");
    //   });
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
