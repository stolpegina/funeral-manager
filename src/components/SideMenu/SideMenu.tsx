import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as BuildingLogo } from "../../assets/Building.svg";

import "./SideMenu.styles.scss";

const SideMenu = () => {
  return (
    <div className="side-menu">
      <div className="side-menu__info">
        <p className="side-menu__title">ЧЕСТНЫЙ АГЕНТ</p>
        <p className="side-menu__position">МЕНЕДЖЕР ПРОЦЕССА</p>
      </div>
      <div className="side-menu__item">
        <Link className="side-menu__link" to="/companies">
          <BuildingLogo /> Организации
        </Link>
      </div>
    </div>
  );
};

export default SideMenu;
