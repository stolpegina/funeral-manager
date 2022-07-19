import React, { FC } from "react";
import { Link } from "react-router-dom";

import { CompanyItemProps } from "./CompanyItem.types";

import "./CompanyItem.styles.scss";

const CompanyItem: FC<CompanyItemProps> = ({ name }) => {
  return (
    <Link className="company-item" to="company-detail">
      {name}
    </Link>
  );
};

export default CompanyItem;
