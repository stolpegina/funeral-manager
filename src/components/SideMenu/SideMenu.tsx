import React from "react";
import { Link } from "react-router-dom";
import "./SideMenu.styles.scss";
import { ReactComponent as BuildingLogo } from "../../assets/Building.svg";

const SideMenu = () => {
  return (
    <div className="side-menu">
      <div>
        <p>ЧЕСТНЫЙ АГЕНТ</p>
        <p>МЕНЕДЖЕР ПРОЦЕССА</p>
        <div className="side-menu__item">
          <Link to="/companies"><BuildingLogo /> Организации</Link>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
