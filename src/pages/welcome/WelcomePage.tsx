import { useRef, useState } from "react";
import SignUp from "../../components/auth/register/SignUp";
import LogIn from "../../components/auth/login/LogIn";
import { useNavigate } from "react-router-dom";

const WelcomePage = () => {
  const [logInVisible, setLogInVisible] = useState(false);
  const [signUpVisible, setSignUpVisible] = useState(false);
  const navigate = useNavigate();
  const showLogIn = (e: React.MouseEvent<HTMLElement>) => {
    if (e) {
      setLogInVisible(true);
      setSignUpVisible(false);
    }
  };
  const showSignUp = (e: React.MouseEvent<HTMLElement>) => {
    if (e) {
      setSignUpVisible(true);
      setLogInVisible(false);
    }
  };
  return (
    <>
      <div className="welcome_items d-flex flex-column justify-content-center align-items-center gap-2">
        <h1>WELCOME</h1>
        <div className="d-flex gap-3">
          <button onClick={showLogIn} type="button" className="btn btn-light">
            Log in
          </button>
          <button onClick={showSignUp} type="button" className="btn btn-light">
            Sign up
          </button>
        </div>
      </div>

      {logInVisible && <LogIn />}
      {signUpVisible && <SignUp />}
    </>
  );
};

export default WelcomePage;
