import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "../../assets/Navbar.css";
import { IconContext } from "react-icons";

import * as FaIcons from "react-icons/fa";
import Top from "../Top";

function Navbar() {
  const [sidebar, setSidebar] = useState(true);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <Top />
      <IconContext.Provider value={{ color: "#2c2b2b" }}>
        <div className="navbar">
          <NavLink to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </NavLink>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items">
            <li className="navbar-toggle">
              <NavLink to="#" className="menu-bars">
                <img
                  className="logo"
                  alt="logo"
                  src={require("../../images/candoo186x32_v2.png")}
                  onClick={showSidebar}
                />
              </NavLink>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <NavLink
                    className={(navData) =>
                      navData.isActive ? "nav-link-active" : ""
                    }
                    to={item.path}
                  >
                    {item.icon}
                    <span>{item.title}</span>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
