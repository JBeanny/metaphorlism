import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Outlet } from "react-router-dom";
import { Footer, Navigation } from "./components";
import { Service } from "./pages";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Navigation />
            <div style={{ marginTop: "5.5em" }}>
              <Outlet />
            </div>
            <Footer />
          </>
        }
      >
        <Route path="/" element={<></>} />
        <Route path="/service" element={<Service />} />
      </Route>
    </Routes>
  );
}

export default App;
