import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Outlet } from "react-router-dom";
import { Footer, Navigation } from "./components";
import { Home, Service, Project, Contact } from "./pages";

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
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
