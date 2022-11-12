import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { ContactIcon, HomeIcon, ProjectIcon, ServiceIcon } from "../../assets";
import classes from "./Navigation.module.css";

function Navigation() {
  const { pathname } = useLocation();
  console.log(pathname);
  const [active, setactive] = useState(1);

  return (
    <div className={classes.container}>
      <div className={classes.logo}>
        <img src="#" alt="Metaphorlism's Logo" />
        <h1 className={classes.name}>Metaphorlism</h1>
      </div>
      <div
        className={`no-select ${classes.link} ${classes.home} ${
          active === 1 ? classes.active : ""
        }`}
        onClick={() => setactive(1)}
      >
        <HomeIcon />
        Home
      </div>
      <div
        className={`no-select ${classes.link} ${classes.service} ${
          active === 2 ? classes.active : ""
        }`}
        onClick={() => setactive(2)}
      >
        <ServiceIcon />
        Service
      </div>
      <div
        className={`no-select ${classes.link} ${classes.project} ${
          active === 3 ? classes.active : ""
        }`}
        onClick={() => setactive(3)}
      >
        <ProjectIcon />
        Project
      </div>
      <div
        className={`no-select ${classes.link} ${classes.contact} ${
          active === 4 ? classes.active : ""
        }`}
        onClick={() => setactive(4)}
      >
        <ContactIcon />
        Contact
      </div>
    </div>
  );
}

export default Navigation;
