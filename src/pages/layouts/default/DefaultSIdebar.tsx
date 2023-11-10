import { memo } from "react";
import SidebarSVG from "../../../helpers/selectorsSVG/layoutComponents/SidebarSVG";
import DefaultNavbar from "./DefaultNavbar";

const DefaultSidebar = memo(() => {
  return (
    <>
      <div className="d-flex flex-column align-items-center  pt-5 text-white min-vh-100 font-Quicksand-Bold">
        <div className="cloud d-grid text-dark align-items-center">
          <div className="">
            <SidebarSVG id="cloud" />
          </div>
          <div className="font-Quicksand-Bold div2 d-none d-lg-inline">
            FBA -
          </div>
          <div className="font-Quicksand-Bold div3 d-none d-lg-inline ">
            Financial Budgeting App
          </div>
        </div>

        <DefaultNavbar />
        <hr />
      </div>
    </>
  );
});

export default DefaultSidebar;
