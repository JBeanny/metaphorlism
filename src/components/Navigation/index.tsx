import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  ContactIcon,
  HomeIcon,
  ProjectIcon,
  ServiceIcon,
  Logo,
  HamburgerIcon,
} from "../../assets";
import classes from "./index.module.css";

const TIMEOUT = 100;

function Navigation() {
  const nav = useNavigate();
  const { pathname } = useLocation();
  const [active, setActive] = useState(pathname.split("/")[1] || "home");
  const [transition, setTransition] = useState("");
  const [isOpenMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setOpenMenu(false);
    };
    window.onscroll = handleScroll;

    return () => {
      window.onscroll = null;
    };
  }, []);

  const handleLink = (name: string) => {
    if (active === name) return;

    setOpenMenu(false);

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

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={classes.container} id="navigation-bar">
      <div className={classes.logo}>
        <img src={Logo} alt="Metaphorlism's Logo" />
        <h1 className={classes.name} onClick={handleScrollToTop}>
          Metaphorlism
        </h1>
      </div>
      <div
        className={`${classes.linkContainer} ${
          isOpenMenu ? classes.active : ""
        }`}
      >
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
      <span
        className={classes.hamburger}
        onClick={() => setOpenMenu((prev) => !prev)}
      >
        <HamburgerIcon />
      </span>
    </div>
  );
}

export default Navigation;
