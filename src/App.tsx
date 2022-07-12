import React from "react";
import "./App.scss";
import DetailedInfo from "./components/DetailedInfo/DetailedInfo";
import Menu from "./components/Menu/Menu";
import SideMenu from "./components/SideMenu/SideMenu";
import { Routes, Route, Link } from "react-router-dom";
import SignIn from "./pages/sign-in/sign-in.page";
import CompanyDetail from "./pages/company-detail/company-detail.page";
import CompaniesList from "./pages/companies-list/companies-list.page";
import NotFound from "./pages/not-found/not-found.page";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/1" element={<CompaniesList />} />
        <Route path="/11" element={<CompanyDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      home
    </div>
  );
}

export default App;
