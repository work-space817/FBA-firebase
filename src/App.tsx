import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import AuthLayout from "./pages/layouts/authLayout/AuthLayout";
import WelcomePage from "./pages/welcome/WelcomePage";
import Overview from "./pages/home/Overview";
import "react-day-picker/dist/style.css";
//fonts
import "./fonts/Quicksand-Light.ttf";
import "./fonts/Quicksand-Regular.ttf";
import "./fonts/Quicksand-Medium.ttf";
import "./fonts/Quicksand-SemiBold.ttf";
import "./fonts/Quicksand-Bold.ttf";
import PrivateRoute from "./helpers/selectorsSVG/routers/PrivateRoute";
import DefaultLayout from "./pages/layouts/default/DefaultLayout";
import SettingsPage from "./pages/settings/SettingsPage";
import StatisticPage from "./pages/statistic/StatisticPage";
import TransactionPage from "./pages/transaction/TransactionPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<DefaultLayout />}>
            <Route index element={<Overview />} />
            <Route path="transactions" element={<TransactionPage />} />
            <Route path="statistic" element={<StatisticPage />} />{" "}
            <Route path="settings" element={<SettingsPage />} />
          </Route>
        </Route>

        <Route path="/auth" element={<AuthLayout />}>
          <Route index element={<WelcomePage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
