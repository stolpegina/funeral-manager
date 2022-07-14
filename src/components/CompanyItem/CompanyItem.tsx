import React, { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCompany } from "../../api";
import "./CompanyItem.styles.scss";

interface Props {
  name: any;
}

const CompanyItem: FC<Props> = ({ name }) => {
  return (
    <Link className="company-item" to="company-detail">
      {name}
    </Link>
  );
};

export default CompanyItem;
