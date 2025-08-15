import React from "react";
import Navbar from "../components/Navbar";
import Hero from "./Hero";
import Skills from "./Skills";
import ExperienceEducation from "./ExperienceEducation";
import Projects from "./Projects";
import Gallery from "./Gallery";
import Contact from "./Contact";

const App = () => (
  <div className="bg-white dark:bg-gray-900 min-h-screen">
    <Navbar />
    <Hero />
    <Skills />
    <ExperienceEducation />
    <Projects />
    <Gallery />
    <Contact />
  </div>
);

export default App;
