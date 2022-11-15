import { Logo } from "../../assets";
import classes from "./index.module.css";

function Footer() {
  return (
    <div className={classes.container} id="footer">
      <img src={Logo} alt="metaphorlism's logo" />
      <h1 className={classes.name}>Metaphorlism</h1>
      <p className={classes.copyright}>Copyright since 2022 by Metaphorlism</p>
    </div>
  );
}

export default Footer;
