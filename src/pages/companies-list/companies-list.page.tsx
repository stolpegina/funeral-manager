import React, { useEffect, useState } from "react";
import { getCompany } from "../../api";
import CompanyItem from "../../components/CompanyItem/CompanyItem";
import SideMenu from "../../components/SideMenu/SideMenu";

import { Company } from "../../types/company";

import "./companies-list.styles.scss";

const companyId = "12";

const CompaniesList = () => {
  const [data, setData] = useState<Company | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      // В будущем этот запрос необходимо заменить на запрос списка организаций
      const data = await getCompany(companyId).then((resp) => resp.json());
      setData(data);
    };
    fetchData();
  }, []);

  return (
    <div className="companies-list">
      <SideMenu />
      <div className="companies-list__items">
        <div className="companies-list__header">
          <span>СПИСОК ЮРИДИЧЕСКИХ ЛИЦ</span>
        </div>
        {data ? (
          <CompanyItem name={data.shortName} />
        ) : (
          <div className="spinner"></div>
        )}
      </div>
    </div>
  );
};

export default CompaniesList;
