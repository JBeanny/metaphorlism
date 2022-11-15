import { Outlet } from "react-router-dom";
import { Footer, Navigation } from "../../components";
import classes from "./index.module.css";

function Default() {
  return (
    <>
      <Navigation />
      <div
        className={classes.container}
      >
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default Default;
