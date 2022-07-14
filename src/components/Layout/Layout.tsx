import React from "react";
import { NavLink, Link, Outlet } from "react-router-dom";
import "./Layout.styles.scss";
import { ReactComponent as HomeLogo } from "../../assets/Home.svg";
import { ReactComponent as CompanyLogo } from "../../assets/Market.svg";
import { ReactComponent as SearchLogo } from "../../assets/Search.svg";
import { ReactComponent as SettingsLogo } from "../../assets/Settings.svg";
import { ReactComponent as ChatLogo } from "../../assets/Chat.svg";
import { ReactComponent as ExitLogo } from "../../assets/Exit.svg";

const Layout = () => {
  return (
    <>
      <div className="menu">
        <div>
          <div className="menu__item">
            <NavLink to="/">
              <HomeLogo />
            </NavLink>
          </div>

          <div className="menu__item">
            <NavLink to="companies">
              <CompanyLogo />
            </NavLink>
          </div>

          <div className="menu__item">
            <NavLink to="search-page">
              <SearchLogo />
            </NavLink>
          </div>
        </div>
        <div>
          <div className="menu__item">
            <NavLink to="settings">
              <SettingsLogo />
            </NavLink>
          </div>

          <div className="menu__item">
            <NavLink to="chat">
              <ChatLogo />
            </NavLink>
          </div>

          <div className="menu__item">
            <NavLink
              to="exit"
              onClick={() => {
                sessionStorage.removeItem("tokenData");
              }}
            >
              <ExitLogo />
            </NavLink>
          </div>
        </div>
      </div>
      <Outlet />
      <footer>
        © 1992 - 2020 Честный Агент © Все права защищены.
        <br />8 (495) 150-21-12
      </footer>
    </>
  );
};

export { Layout };
