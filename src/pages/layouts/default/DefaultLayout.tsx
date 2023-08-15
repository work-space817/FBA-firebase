import { Outlet } from "react-router-dom";
import DefaultSidebar from "./DefaultSIdebar";
import DefaultHeader from "./DefaultHeader";

const DefaultLayout = () => {
  return (
    <>
      <div className="custom-container-xxl  ">
        <div className="row flex-nowrap">
          <DefaultSidebar />

          <div className="col p-3 pt-4 border">
            <DefaultHeader />
            {/* Сюди підставляється компонет один із групи комеонетів, які відносяться до даного Layout */}
            {<Outlet />}
          </div>
        </div>
      </div>
    </>
  );
};

export default DefaultLayout;
