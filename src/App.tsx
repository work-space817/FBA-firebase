import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import DefaultLayout from "./pages/layouts/default/DefaultLayout";
import AuthLayout from "./pages/layouts/authLayout/AuthLayout";
import WelcomePage from "./pages/welcome/WelcomePage";
import SettingsPage from "./pages/settings/SettingsPage";
import Transaction from "./pages/transaction/TransactionPage";
import Overview from "./pages/home/Overview";
import { useSelector } from "react-redux";
import { IAuthUser } from "./store/reducers/types";
import "react-datepicker/dist/react-datepicker.css";

//fonts
import "./fonts/Quicksand-Light.ttf";
import "./fonts/Quicksand-Regular.ttf";
import "./fonts/Quicksand-Medium.ttf";
import "./fonts/Quicksand-SemiBold.ttf";
import "./fonts/Quicksand-Bold.ttf";
import TransactionPage from "./pages/transaction/TransactionPage";
import StatisticPage from "./pages/statistic/StatisticPage";
import "react-day-picker/dist/style.css";

const App = () => {
  const { isAuth } = useSelector((store: any) => store.auth as IAuthUser);

  return (
    <>
      <Routes>
        {/* {isAuth ? ( */}
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<Overview />} />
          <Route path="settings" element={<SettingsPage />} />
          <Route path="transactions" element={<TransactionPage />} />
          <Route path="statistic" element={<StatisticPage />} />
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
