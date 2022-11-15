import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home, Service, Project, Contact, Detail } from "./pages";
import { Default } from "./layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Default />}>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/detail" element={<Detail />} />
      </Route>
    </Routes>
  );
}

export default App;
