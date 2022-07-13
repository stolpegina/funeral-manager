import React from "react";
import { Link, Outlet } from "react-router-dom";
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
            <Link to="/">
              <HomeLogo />
            </Link>
          </div>

          <div className="menu__item">
            <Link to="companies">
              <CompanyLogo />
            </Link>
          </div>

          <div className="menu__item">
            <Link to="search-page">
              <SearchLogo />
            </Link>
          </div>
        </div>
        <div>
          <div className="menu__item">
            <Link to="settings">
              <SettingsLogo />
            </Link>
          </div>

          <div className="menu__item">
            <Link to="chat">
              <ChatLogo />
            </Link>
          </div>

          <div className="menu__item">
            <Link to="exit" onClick={() => {sessionStorage.removeItem("tokenData");}}>
              <ExitLogo />
            </Link>
          </div>
        </div>
      </div>
      <Outlet />
      <footer>
        © 1992 - 2020 Честный Агент © Все права защищены.
        <br/>
        8 (495) 150-21-12
      </footer>
    </>
  );
};

export { Layout };
