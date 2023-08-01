import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="container">
      <div className="d-flex flex-column justify-content-center align-items-center vh-100 gap-2">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
