import "bootstrap/dist/css/bootstrap.css";
import "react-day-picker/dist/style.css";
import "./App.css";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter } from "react-router-dom";
import { AuthUserActionType } from "./store/reducers/types";

if (localStorage.token) {
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
