import { useState } from "react";

// import "./App.css";
// import Landing from "./pages/landing.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/navigation.jsx";
import VideoBackground from "./components/videobg.jsx";
import Tickets from "./pages/tickets.jsx";
import Gallery from "./pages/gallery.jsx";
import ContactUs from "./pages/contact_us.jsx";
import Hero from "./components/hero.jsx";
import Home from "./pages/home.jsx";

function App() {
  return (
    <Router>
      {/* Video Background - Stays Fixed Behind Everything */}
      <VideoBackground className="-z-10" />

      {/* Main Content Wrapper - Allows Scrolling */}
      <div className="relative w-full min-h-screen overflow-x-hidden overflow-y-auto">
        {/* Overlay to darken the background but NOT block interactions */}
        <div className="fixed inset-0 bg-black opacity-65 pointer-events-none"></div>

        {/* Navigation - Ensures it stays clickable */}
        <div className="fixed top-0 left-0 w-full z-50">
          <Navigation />
        </div>

        {/* Main Content - Positioned ABOVE the video */}
        <div className="relative z-10 flex flex-col items-center justify-start text-white pt-24 pb-20">
          <Routes>
            {/* Default route (Landing Page) */}
            <Route path="/" element={<Hero />} />
            <Route path="/home" element={<Home />} />
            <Route path="/tickets" element={<Tickets />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact_us" element={<ContactUs />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
