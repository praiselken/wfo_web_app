import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import Landing from "./pages/landing.jsx";
import Navigation from "./components/navigation.jsx";

function App() {
  return (
    <div className="w-full">
      <Navigation />
      <Landing />
    </div>
  );
}

export default App;
