import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import RedevelopeWithUs from "./pages/RedevelopeWithUs";
import CorporateGovernance from "./pages/CorporateGovernance";
import About from "./pages/About";
import Contact from "./pages/Contact";
import OurProjects from "./pages/OurProjects";
import ProjectDetails from "./pages/ProjectDetails";
import './App.css'
import UnderConstructionPage from "./pages/UnderConstructionPage";
import UpcomingProjectPage from "./pages/UpcomingProjectPage";
import CompletedProjctPage from "./pages/CompletedProjectPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="/redevelope-with-us" element={<RedevelopeWithUs />} />
          <Route path="/corporate-governance" element={<CorporateGovernance />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/our-projects" element={<OurProjects />} />
          <Route path="/underconstruction-projects" element={<UnderConstructionPage />} />
          <Route path="/upcoming-projects" element={<UpcomingProjectPage />} />
          <Route path="/completed-projects" element={<CompletedProjctPage />} />
          <Route path="/:name" element={<ProjectDetails />} />

        </Route>
      </Routes>
    </Router>
  );
}

export default App;
