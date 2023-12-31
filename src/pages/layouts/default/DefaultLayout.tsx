import { Outlet } from "react-router-dom";
import DefaultHeader from "./DefaultHeader";
import DefaultNavbar from "./DefaultNavbar";
import DefaultSidebar from "./DefaultSidebar";

const DefaultLayout = () => {
  return (
    <>
      <div className="container-xxl">
        <div className="row flex-nowrap pb-sm-0 pb-5">
          <nav className="d-none d-sm-block sidebar-fonts col-auto col-lg-2">
            <DefaultSidebar />
          </nav>

          <div className="col p-3 pt-4 border-start">
            <DefaultHeader />
            <Outlet />
          </div>
        </div>
        <nav className="d-block d-sm-none border-top fixed-bottom bottom-navbar-custom-color">
          <DefaultNavbar />
        </nav>
      </div>
    </>
  );
};

export default DefaultLayout;
