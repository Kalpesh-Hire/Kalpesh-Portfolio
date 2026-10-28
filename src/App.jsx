import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import DeveloperUniverse from "./components/DeveloperUniverse";
import InteractiveProjectExplorer from "./components/InteractiveProjectExplorer";
import ArchitectureLab from "./components/ArchitectureLab";
import CrossPlatformShowcase from "./components/CrossPlatformShowcase";
import TechnicalArsenal from "./components/TechnicalArsenal";
import ProfessionalJourney from "./components/ProfessionalJourney";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
import FloatingContactDock from "./components/FloatingContactDock";
import IllustratedLoader from "./components/IllustratedLoader";

function App() {
  const [loaderFinished, setLoaderFinished] = useState(false);

  return (
    <div className="min-h-screen bg-[#090a0f] text-slate-100 bg-grid-pattern selection:bg-blue-500/30 selection:text-cyan-300">
      {/* 1. Custom Interactive Cursor (Desktop with fine pointer) */}
      <CustomCursor />

      {/* 3. Illustrated Developer Character Workstation Loader */}
      <IllustratedLoader onComplete={() => setLoaderFinished(true)} />

      {/* 2. Floating Contact and Social Media Dock */}
      {loaderFinished && <FloatingContactDock />}

      {/* Main Portfolio Navigation */}
      <Navbar />

      <main>
        {/* Section A: Developer Command Center & Animated Developer Workstation Avatar */}
        <Home />

        {/* Section B: The Interactive Developer Universe (Connected Technology Mesh) */}
        <DeveloperUniverse />

        {/* Featured Projects: Prioritizing MERP, WMS, CRM, HRMS, and Mahasewa with Animated Previews */}
        <InteractiveProjectExplorer />

        {/* Section E: Interactive Architecture Lab (Simulating Web, Mobile, Desktop, Real-Time) */}
        <ArchitectureLab />

        {/* Section F: Mobile & Cross-Platform Showcase (Matrix) */}
        <CrossPlatformShowcase />

        {/* Section C: Advanced Technical Arsenal (Multi-domain Matrix) */}
        <TechnicalArsenal />

        {/* Section G: Professional Journey (Editorial Timeline) */}
        <ProfessionalJourney />

        {/* Section I: Advanced Contact Experience (Strictly Preserved Working Form) */}
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
