import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  ContactIcon,
  HomeIcon,
  ProjectIcon,
  ServiceIcon,
  Logo,
} from "../../assets";
import classes from "./index.module.css";

const TIMEOUT = 100;

function Navigation() {
  const nav = useNavigate();
  const { pathname } = useLocation();
  const [active, setActive] = useState(pathname.split("/")[1] || "home");
  const [transition, setTransition] = useState("");

  const handleLink = (name: string) => {
    switch (name) {
      case "home":
        setTimeout(() => {
          setTransition("");
          setActive(name);
          nav(`/`);
        }, TIMEOUT);
        setTransition(name);
        break;
      case "service":
        setTimeout(() => {
          setTransition("");
          setActive(name);
          nav(`/${name}`);
        }, TIMEOUT);
        setTransition(name);
        break;
      case "project":
        setTimeout(() => {
          setTransition("");
          setActive(name);
          nav(`/${name}`);
        }, TIMEOUT);
        setTransition(name);
        break;
      case "contact":
        setTimeout(() => {
          setTransition("");
          setActive(name);
          nav(`/${name}`);
        }, TIMEOUT);
        setTransition(name);
        break;
      default:
        throw new Error("The Link is invalid");
    }
  };

  return (
    <div className={classes.container} id="navigation-bar">
      <div className={classes.logo}>
        <img src={Logo} alt="Metaphorlism's Logo" />
        <h1 className={classes.name}>Metaphorlism</h1>
      </div>
      <div
        className={`no-select ${classes.link} ${classes.home} ${
          active === "home" ? classes.active : ""
        } ${transition === "home" ? classes.clickAnimation : ""}`}
        onClick={() => handleLink("home")}
      >
        <HomeIcon />
        Home
      </div>
      <div
        className={`no-select ${classes.link} ${classes.service} ${
          active === "service" ? classes.active : ""
        } ${transition === "service" ? classes.clickAnimation : ""}`}
        onClick={() => handleLink("service")}
      >
        <ServiceIcon />
        Service
      </div>
      <div
        className={`no-select ${classes.link} ${classes.project} ${
          active === "project" ? classes.active : ""
        } ${transition === "project" ? classes.clickAnimation : ""}`}
        onClick={() => handleLink("project")}
      >
        <ProjectIcon />
        Project
      </div>
      <div
        className={`no-select ${classes.link} ${classes.contact} ${
          active === "contact" ? classes.active : ""
        } ${transition === "contact" ? classes.clickAnimation : ""}`}
        onClick={() => handleLink("contact")}
      >
        <ContactIcon />
        Contact
      </div>
    </div>
  );
}

export default Navigation;
