import React from "react";
import { Link } from "react-router-dom";
import SidebarSVG from "../../../helpers/selectorsSVG/SidebarSVG";

const DefaultNavbar = () => {
  return (
    <ul
      className="nav flex-nowrap flex-sm-wrap flex-sm-column  align-items-center align-items-sm-start "
      id="menu"
    >
      <div className="sidebar-item p-2 rounded-3 w-100">
        <li className="nav-item ">
          <Link
            to="/"
            className="nav-link d-flex justify-content-center justify-content-sm-start align-items-center px-0"
          >
            <SidebarSVG id="overview"></SidebarSVG>
            <span className="font-Quicksand-Bold ms-3 d-none d-lg-inline text-black-50 fs-5 ">
              Home page
            </span>
          </Link>
        </li>
      </div>
      <div className="sidebar-item p-2 rounded-3 w-100">
        <li className="nav-item">
          <Link
            to="/transactions"
            className="nav-link d-flex justify-content-center justify-content-sm-start align-items-center px-0"
          >
            <SidebarSVG id="transactions"></SidebarSVG>
            <span className="font-Quicksand-Bold ms-3 d-none d-lg-inline text-black-50 fs-5">
              Transactions
            </span>
          </Link>
        </li>
      </div>
      <div className="sidebar-item p-2 rounded-3 w-100">
        <li className="nav-item ">
          <Link
            to="/statistic"
            className="nav-link d-flex justify-content-center justify-content-sm-start align-items-center px-0"
          >
            <SidebarSVG id="statistic"></SidebarSVG>
            <span className="font-Quicksand-Bold ms-3 d-none d-lg-inline text-black-50 fs-5">
              Statistic
            </span>
          </Link>
        </li>
      </div>
      <div className="sidebar-item p-2 rounded-3 w-100">
        <li className="nav-item ">
          <Link
            to="/settings"
            className="nav-link d-flex justify-content-center justify-content-sm-start align-items-center px-0"
          >
            <SidebarSVG id="settings"></SidebarSVG>
            <span className="font-Quicksand-Bold ms-3 d-none d-lg-inline text-black-50 fs-5">
              Settings
            </span>
          </Link>
        </li>
      </div>
    </ul>
  );
};

export default DefaultNavbar;
