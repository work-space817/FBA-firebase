import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IAuthUser } from "../../../store/reducers/types";
import HeaderSVG from "../../../helpers/selectorsSVG/HeaderSVG";

const DefaultHeader = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const currentPage = location.pathname;

  let splitCurrentPage =
    currentPage.slice(1).charAt(0).toUpperCase() + currentPage.slice(2);
  if (splitCurrentPage == "") {
    splitCurrentPage = "Overview";
  }

  return (
    <>
      <header>
        <nav className="navbar ">
          <div className="container-fluid">
            <p className="font-Quicksand-Bold fs-1 m-0">{splitCurrentPage}</p>

            <Link to="/settings" className="text-dark d-none d-md-inline">
              <HeaderSVG id="defaultUserIcon" />
            </Link>
          </div>
          <p className="font-Quicksand-SemiBold fs-5 text-black-50 ps-2 d-none d-sm-inline">
            Get summary of your weekly online transactions here.
          </p>
        </nav>
      </header>
    </>
  );
};

export default DefaultHeader;
