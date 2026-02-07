import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const LandingPage = React.lazy(() => import("./pages/LandingPage"));
const LandingPage2 = React.lazy(() => import("./pages/LandingPage2"));
const LandingPage3 = React.lazy(() => import("./pages/LandingPage3"));
const AboutUs = React.lazy(() => import("./pages/AboutUs"));

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/1" element={<LandingPage />} />
        <Route path="/2" element={<LandingPage2 />} />
        <Route path="/3" element={<LandingPage3 />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </Router>
  );
};

export default App;
