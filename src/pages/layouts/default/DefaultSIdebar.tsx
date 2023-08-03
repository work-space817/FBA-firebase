import { Link } from "react-router-dom";
import SidebarSVG from "../../../helpers/selectorsSVG/SidebarSVG";

const DefaultSidebar = () => {
  return (
    <>
      <div className="sidebar-fonts col-auto col-md-3 col-lg-2  border-end">
        <div className="d-flex flex-column align-items-center  pt-5 text-white min-vh-100 font-Quicksand-Bold">
          <div className="cloud d-grid text-dark align-items-center">
            <div className="div1">
              <SidebarSVG id="cloud"></SidebarSVG>
            </div>
            <div className="font-Quicksand-Bold div2 d-none d-md-inline">
              FBA -
            </div>
            <div className="font-Quicksand-Bold div3 d-none d-md-inline ">
              Financial Budgeting App
            </div>
          </div>

          <ul
            className="nav flex-column  align-items-center align-items-sm-start "
            id="menu"
          >
            <div className="sidebar-item p-2 rounded-3 w-100">
              <li className="nav-item ">
                <Link
                  to="/"
                  className="nav-link d-flex align-items-center px-0"
                >
                  <SidebarSVG id="overview"></SidebarSVG>
                  <span className="font-Quicksand-Bold ms-3 d-none d-md-inline text-black-50 fs-5 ">
                    Home page
                  </span>
                </Link>
              </li>
            </div>
            <div className="sidebar-item p-2 rounded-3 w-100">
              <li className="nav-item">
                <Link
                  to="/transactions"
                  className="nav-link d-flex align-items-center px-0"
                >
                  <SidebarSVG id="transactions"></SidebarSVG>
                  <span className="font-Quicksand-Bold ms-3 d-none d-md-inline text-black-50 fs-5">
                    Transactions
                  </span>
                </Link>
              </li>
            </div>
            <div className="sidebar-item p-2 rounded-3 w-100">
              <li className="nav-item ">
                <Link
                  to="/"
                  className="nav-link d-flex align-items-center px-0"
                >
                  <SidebarSVG id="statistic"></SidebarSVG>
                  <span className="font-Quicksand-Bold ms-3 d-none d-md-inline text-black-50 fs-5">
                    Statistic
                  </span>
                </Link>
              </li>
            </div>
            <div className="sidebar-item p-2 rounded-3 w-100">
              <li className="nav-item ">
                <Link
                  to="/settings"
                  className="nav-link d-flex align-items-center px-0"
                >
                  <SidebarSVG id="settings"></SidebarSVG>
                  <span className="font-Quicksand-Bold ms-3 d-none d-md-inline text-black-50 fs-5">
                    Settings
                  </span>
                </Link>
              </li>
            </div>
          </ul>
          <hr />
        </div>
      </div>
    </>
  );
};

export default DefaultSidebar;
