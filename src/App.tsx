import React from "react";
import { Routes, Route } from "react-router-dom";

import { Layout } from "./components/Layout/Layout";
import SignIn from "./pages/sign-in/sign-in.page";
import CompanyDetail from "./pages/company-detail/company-detail.page";
import CompaniesList from "./pages/companies-list/companies-list.page";
import NotFound from "./pages/not-found/not-found.page";
import Home from "./pages/home/home.page";


import "./App.scss";

function App() {
  const isAuth = sessionStorage.getItem("tokenData");

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={ isAuth ? <Home /> : <SignIn />} />
          <Route path="companies" element={<CompaniesList />} />
          <Route path="companies/company-detail" element={<CompanyDetail />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
