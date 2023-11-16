import { Link, useLocation } from "react-router-dom";
import HeaderSVG from "../../../helpers/selectorsSVG/layoutComponents/HeaderSVG";
import SidebarSVG from "../../../helpers/selectorsSVG/layoutComponents/SidebarSVG";
import { memo, useEffect, useState } from "react";
import getUserInformation from "../../../api/firebase/user/userInfo/getUserInformation";
import { AuthUserActionType } from "../../../store/reducers/types";
import { useDispatch } from "react-redux";

const DefaultHeader = memo(() => {
  const location = useLocation();
  const dispatch = useDispatch();
  const currentPage = location.pathname;

  let splitCurrentPage =
    currentPage.slice(1).charAt(0).toUpperCase() + currentPage.slice(2);
  if (splitCurrentPage === "") {
    splitCurrentPage = "Overview";
  }

  return (
    <>
      <header>
        <nav className="navbar ">
          <div className="container-fluid">
            <div className="d-flex align-items-center gap-3">
              <SidebarSVG id="cloud" />
              <p className="font-Quicksand-Bold fs-1 m-0">{splitCurrentPage}</p>
            </div>

            <Link
              to="/auth"
              className="text-dark d-none d-md-inline"
              type="submit"
              onClick={() => {
                localStorage.removeItem("token");
                localStorage.removeItem("uid");
                dispatch({ type: AuthUserActionType.LOGOUT_USER });
              }}
            >
              <HeaderSVG id={"LogOut"} />
            </Link>
          </div>
          <p className="font-Quicksand-SemiBold fs-5 text-black-50 ps-2  d-sm-inline">
            Get summary of your weekly online transactions here.
          </p>
        </nav>
      </header>
    </>
  );
});

export default DefaultHeader;
