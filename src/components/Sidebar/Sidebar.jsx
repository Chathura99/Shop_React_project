import React, { useState } from "react";
import "./Sidebar.css";
import Logo from "../../imgs/logo.png";
//get icons
import { SidebarData } from "../../Data/Data";
import { UilSignOutAlt } from "@iconscout/react-unicons";
import { UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [selected, setSelected] = useState(0);
  // console.log(selected);

  const [expanded, setExpaned] = useState(true);

  const sidebarVariants = {
    true: {
      left: "0",
    },
    false: {
      left: "-60%",
    },
  };

  //change view
  function changeView(index) {
    if (index === 0) {
      return "/";
    } else if (index === 1) {
      return "/orders";
    } else if (index === 2) {
      return "/customers";
    } else if (index === 3) {
      return "/products";
    } else if (index === 4) {
      return "/";
    }
  }

  return (
    <>
      <div
        className="bars"
        style={expanded ? { left: "60%" } : { left: "5%" }}
        onClick={() => setExpaned(!expanded)}
      >
        <UilBars />
      </div>
      <motion.div
        className="sidebar"
        variants={sidebarVariants}
        animate={window.innerWidth <= 768 ? `${expanded}` : ""}
      >
        {/* logo */}
        <div className="logo">
          <img src={Logo} alt="logo" />
          <span>
            Sh<span>o</span>ps
          </span>
        </div>

        <div className="menu">
          {SidebarData.map((item, index) => {
            return (
              //   change look in selected
              <div
                className={selected === index ? "menuItem active" : "menuItem"}
                key={index}
                //set selected variable to index by using setSelected
                //call multiple function by one Onclick

                onClick={() => {
                  setSelected(index);
                }}
              >
                {/* Navigate */}
                <Link to={changeView(index)} style={{ all: "unset" }}>
                  <item.icon />
                  <span>{item.heading}</span>
                </Link>
              </div>
            );
          })}
          {/* signoutIcon */}
          <div className="menuItem">
            <UilSignOutAlt />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;
