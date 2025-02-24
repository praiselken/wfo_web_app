import React from "react";
import Hero from "../components/hero.jsx";

export default function Home() {
  console.log("Home component is rendering"); // Debugging log
  return (
    <div>
      <Hero />
    </div>
  );
}
