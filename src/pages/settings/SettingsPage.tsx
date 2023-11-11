import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IAuthUser, AuthUserActionType } from "../../store/reducers/types";

const SettingsPage = () => {
  const dispatch = useDispatch();
  const { isAuth } = useSelector((store: any) => store.auth as IAuthUser);
  return (
    <div>
      <div>
        {isAuth ? (
          <>
            <button>
              <Link
                to="/auth"
                onClick={(e) => {
                  localStorage.removeItem("token");
                  localStorage.removeItem("uid");
                  dispatch({ type: AuthUserActionType.LOGOUT_USER });
                }}
              >
                вихід
              </Link>
            </button>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default SettingsPage;
