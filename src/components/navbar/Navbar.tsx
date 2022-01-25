import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import { AppbarData } from "./AppbarData";
// import "../../assets/Navbar.css";
// import { IconContext } from "react-icons";

// import * as BsIcons from "react-icons/bs";
// import Top from "../Top";

// function Navbar() {
//   const [sidebar, setSidebar] = useState(true);

//   const showSidebar = () => setSidebar(!sidebar);
//   return (
//     <>
//       <IconContext.Provider value={{ color: "#2c2b2b" }}>
//         <div className="navbar" style={{ margin: "0.5% -5% 0 0" }}>
//           <NavLink to="#" className="menu-bars">
//             <BsIcons.BsJustify onClick={showSidebar} />
//           </NavLink>
//         </div>
//         <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
//           <ul className="nav-menu-items">
//             <li className="navbar-toggle">
//               <NavLink to="#" className="menu-bars">
//                 <img
//                   className="logo"
//                   alt="logo"
//                   src={require("../../images/candoo186x32_v2.png")}
//                   onClick={showSidebar}
//                 />
//               </NavLink>
//             </li>
//             {AppbarData.map((item, index) => {
//               return (
//                 <li key={index} className={item.cName}>
//                   <NavLink
//                     className={(navData) =>
//                       navData.isActive ? "nav-link-active" : ""
//                     }
//                     to={item.path}
//                   >
//                     <span>{item.title}</span>
//                   </NavLink>
//                 </li>
//               );
//             })}
//           </ul>
//         </nav>
//       </IconContext.Provider>
//     </>
//   );
// }

// export default Navbar;
