import { Link } from "react-router-dom";
import SidebarSVG from "../../../helpers/selectorsSVG/SidebarSVG";
import DefaultNavbar from "./DefaultNavbar";

const DefaultSidebar = () => {
  return (
    <>
      <div className="d-flex flex-column align-items-center  pt-5 text-white min-vh-100 font-Quicksand-Bold">
        <div className="cloud d-grid text-dark align-items-center">
          <div className="div1">
            <SidebarSVG id="cloud"></SidebarSVG>
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
};

export default DefaultSidebar;
