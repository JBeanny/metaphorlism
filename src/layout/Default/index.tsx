import { Outlet } from "react-router-dom";
import { Footer, Navigation } from "../../components";
import classes from "./index.module.css";

function Default() {
  return (
    <>
      <Navigation />
      <main
        className={classes.container}
      >
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Default;
