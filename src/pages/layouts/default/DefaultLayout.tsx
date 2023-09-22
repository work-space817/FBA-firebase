import { Outlet } from "react-router-dom";
import DefaultSidebar from "./DefaultSidebar";
import DefaultHeader from "./DefaultHeader";

const DefaultLayout = () => {
  return (
    <>
      <div className="container-xxl border">
        <div className="row flex-nowrap">
          <nav className="d-none d-sm-block sidebar-fonts col-auto col-lg-2">
            <DefaultSidebar />
          </nav>

          <div className="col p-3 pt-4 border">
            <DefaultHeader />
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default DefaultLayout;
