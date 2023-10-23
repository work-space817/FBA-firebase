import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

import { IAuthUser } from "../../../store/reducers/types";

const PrivateRoute = () => {
  const { isAuth } = useSelector((store: any) => store.auth as IAuthUser);

  return isAuth ? <Outlet /> : <Navigate to="/auth" />;
};

export default PrivateRoute;
