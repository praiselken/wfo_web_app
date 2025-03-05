import { useEffect, useState } from "react";
import ReactGA from "react-ga4";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navigation from "./components/navigation.jsx";
import VideoBackground from "./components/videobg.jsx";
import Tickets from "./pages/tickets.jsx";
import Gallery from "./pages/gallery.jsx";
import ContactUs from "./pages/contact_us.jsx";
import Hero from "./components/hero.jsx";
import Home from "./pages/home.jsx";

const TRACKING_ID = "G-4JNCM6830L"; // Replace with your actual GA Measurement ID
ReactGA.initialize(TRACKING_ID);

function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname });
  }, [location]);

  return null;
}

function App() {
  const [isSnapchat, setIsSnapchat] = useState(false);

  useEffect(() => {
    // Check if the user is on Snapchat
    if (
      typeof navigator !== "undefined" &&
      navigator.userAgent.includes("Snapchat")
    ) {
      setIsSnapchat(true);
      document.body.classList.add("snapchat-fix");
    }
  }, []);

  return (
    <Router>
      <AnalyticsTracker />

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
