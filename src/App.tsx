import React from "react";
import { Route, Routes } from "react-router-dom";
import AuthLayout from "./pages/layouts/authLayout/AuthLayout";
import WelcomePage from "./pages/welcome/WelcomePage";
import DefaultLayout from "./pages/layouts/default/DefaultLayout";
import SettingsPage from "./pages/settings/SettingsPage";
import StatisticPage from "./pages/statistic/StatisticPage";
import TransactionPage from "./pages/transaction/TransactionPage";
import HomePage from "./pages/home/HomePage";
import PrivateRoute from "./helpers/routers/PrivateRoute";
//fonts
import "./fonts/Quicksand-Light.ttf";
import "./fonts/Quicksand-Regular.ttf";
import "./fonts/Quicksand-Medium.ttf";
import "./fonts/Quicksand-SemiBold.ttf";
import "./fonts/Quicksand-Bold.ttf";

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<DefaultLayout />}>
            <Route index element={<HomePage />} />
            <Route path="transactions" element={<TransactionPage />} />
            <Route path="statistic" element={<StatisticPage />} />
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
