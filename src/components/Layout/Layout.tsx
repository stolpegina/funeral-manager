import React from "react";
import { NavLink, Outlet } from "react-router-dom";

import { ReactComponent as HomeLogo } from "../../assets/Home.svg";
import { ReactComponent as CompanyLogo } from "../../assets/Market.svg";
import { ReactComponent as SearchLogo } from "../../assets/Search.svg";
import { ReactComponent as SettingsLogo } from "../../assets/Settings.svg";
import { ReactComponent as ChatLogo } from "../../assets/Chat.svg";
import { ReactComponent as ExitLogo } from "../../assets/Exit.svg";

import "./Layout.styles.scss";

const Layout = () => {
  return (
    <>
      <div className="menu">
        <div>
          <div className="menu__item">
            <NavLink className="menu__link" to="/">
              <HomeLogo className="menu__icon" />
            </NavLink>
          </div>

          <div className="menu__item">
            <NavLink className="menu__link" to="companies">
              <CompanyLogo className="menu__icon" />
            </NavLink>
          </div>

          <div className="menu__item">
            <NavLink className="menu__link" to="search-page">
              <SearchLogo className="menu__icon" />
            </NavLink>
          </div>
        </div>
        <div>
          <div className="menu__item">
            <NavLink className="menu__link" to="settings">
              <SettingsLogo className="menu__icon" />
            </NavLink>
          </div>

          <div className="menu__item">
            <NavLink className="menu__link" to="chat">
              <ChatLogo className="menu__icon" />
            </NavLink>
          </div>

          <div className="menu__item">
            <NavLink
              className="menu__link"
              to="exit"
              onClick={() => {
                sessionStorage.removeItem("tokenData");
              }}
            >
              <ExitLogo className="menu__icon" />
            </NavLink>
          </div>
        </div>
      </div>
      <Outlet />
      <footer className="footer">
        <div className="footer__copyright">
          © 1992 - 2020 Честный Агент © Все права защищены.
        </div>
        <div>8 (495) 150-21-12</div>
      </footer>
    </>
  );
};

export { Layout };
