import React from "react";
import "./App.css";
import FrontPage from "./Components/FrontPage";
import FeaturesSection from "./Components/FeaturesSection"; // adjust path if needed
import CalendarSection from "./Components/CalendarSection";
import CuratorSection from "./Components/CuratorSection.jsx";
import ReadyToTransform from "./Components/ReadyToTransform";


function App() {
  return (
    <div className="App">
      <FrontPage />
      <FeaturesSection />
      <CalendarSection />
      <CuratorSection/>
      <ReadyToTransform />
    </div>
  );
}

export default App;
