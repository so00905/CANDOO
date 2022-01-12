import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Icon from "@mui/material/Icon";

import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "../../assets/Navbar.css";
import { IconContext } from "react-icons";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { pink } from "@mui/material/colors";

function Navbar() {
  const [sidebar, setSidebar] = useState(true);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <IconContext.Provider value={{ color: "#2c2b2b" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          {/* <IconButton
                size="small"
                disableRipple
                color="inherit"
                // sx={navbarMobileMenu}
                // onClick
              >
                <Icon sx={{ color: pink[500] }} fontSize="medium">
                  {miniSidenav ? "menu_open" : "menu"}
                </Icon>
              </IconButton> */}
          <img
            className="logo"
            alt="logo"
            src={require("../../images/candoo_row.png")}
          />
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineLeft />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
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
