import React from "react";
import { getCompanies } from "../../api";
import CompanyItem from "../../components/CompanyItem/CompanyItem";
import SideMenu from "../../components/SideMenu/SideMenu";
import "./companies-list.styles.scss";

const CompaniesList = () => {
  const data = getCompanies()
  data.then((resp: any) => console.log(resp));
  return (
    <div className="companies-list">
      <SideMenu />
      <div>
        <CompanyItem />
        <br />
        <CompanyItem />
        <br />
        <CompanyItem />
      </div>
    </div>
  );
};

export default CompaniesList;
