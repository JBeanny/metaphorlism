import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home, Service, Project, Contact } from "./pages";
import { Default } from "./layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Default />}>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
