import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Outlet } from "react-router-dom";
import { Footer, Navigation } from "./components";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Navigation />
            <div style={{ paddingTop: "5em" }}>
              <Outlet />
            </div>
            <Footer />
          </>
        }
      >
        <Route path="/" element={<></>} />
      </Route>
    </Routes>
  );
}

export default App;
