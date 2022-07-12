import React from "react";
import { Link } from "react-router-dom";
import './CompanyItem.styles.scss';

const CompanyItem = () => {
  return (
    <div>
      <div className="company-item">
        <Link to="company-detail">Название компании</Link>
      </div>
    </div>
  );
};

export default CompanyItem;
