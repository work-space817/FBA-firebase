import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import DefaultLayout from "./pages/layouts/default/DefaultLayout";
import AuthLayout from "./pages/layouts/authLayout/AuthLayout";
import WelcomePage from "./pages/welcome/WelcomePage";
import SettingsPage from "./pages/settings/SettingsPage";
import Transaction from "./pages/transaction/Transaction";
import Overview from "./pages/home/Overview";
import { useSelector } from "react-redux";
import { IAuthUser } from "./store/reducers/types";

//fonts
import "./fonts/Quicksand-Light.ttf";
import "./fonts/Quicksand-Regular.ttf";
import "./fonts/Quicksand-Medium.ttf";
import "./fonts/Quicksand-SemiBold.ttf";
import "./fonts/Quicksand-Bold.ttf";

const App = () => {
  const { isAuth } = useSelector((store: any) => store.auth as IAuthUser);

  return (
    <>
      <Routes>
        {/* {isAuth ? ( */}
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<Overview />} />
          <Route path="settings" element={<SettingsPage />} />
          <Route path="transactions" element={<Transaction />} />
          {/* модальне вікно з повідомленням що вже зареєстровані + редірект на головну */}
        </Route>
        {/* ) : ( */}
        <Route path="/auth" element={<AuthLayout />}>
          <Route index element={<WelcomePage />} />
          {/* модальне вікно з повідомленням що вже зареєстровані + редірект на головну */}
        </Route>
        {/* )} */}
      </Routes>
    </>
  );
};

export default App;
