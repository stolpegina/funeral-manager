import React from 'react';
import DetailedInfo from '../../components/DetailedInfo/DetailedInfo';
import Menu from '../../components/Menu/Menu';
import SideMenu from '../../components/SideMenu/SideMenu';

const CompanyDetail = () => {

    return (
      <div>
        <Menu />
        <SideMenu />
        <DetailedInfo />
      </div>
    );
};

export default CompanyDetail;