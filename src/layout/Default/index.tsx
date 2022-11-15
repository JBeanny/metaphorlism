import { Outlet } from "react-router-dom";
import { Footer, Navigation } from "../../components";

function Default() {
  return (
    <>
      <Navigation />
      <div
        style={{
          position: "relative",
          paddingTop: "5.5em",
          paddingBottom: "9em",
        }}
      >
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default Default;
