import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
// import "react-day-picker/dist/style.css";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter } from "react-router-dom";
import { AuthUserActionType } from "./store/reducers/types";
import setAuthToken from "./api/firebase/userInfo/setAuthToken";

if (localStorage.token) {
  // setAuthToken(localStorage.token, localStorage.uid);
  store.dispatch({ type: AuthUserActionType.LOGIN_USER });
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
