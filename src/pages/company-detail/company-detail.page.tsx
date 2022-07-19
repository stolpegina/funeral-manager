import React from 'react';
import DetailedInfo from '../../components/DetailedInfo/DetailedInfo';
import SideMenu from '../../components/SideMenu/SideMenu';

import './company-detail.styles.scss';

const CompanyDetail = () => {
    return (
      <div className="company-detail">
        <SideMenu />
        <DetailedInfo />
      </div>
    );
};

export default CompanyDetail;