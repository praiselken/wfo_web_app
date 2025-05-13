import React from "react";
import { Link } from "react-router-dom";
import HomeInfo from "../components/HomeInfo";

const Hero = () => {
  // Scroll handler for the FAQs button
  const handleScroll = (e) => {
    e.preventDefault();
    const target = document.getElementById("faq-section");

    if (target) {
      const offset = window.innerHeight * 0.15;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <>
      <section id="hero" className="px-4 md:px-8">
        <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative">
          {/* Title and Event Info */}
          <div className="md:m-3 m-2 flex flex-col justify-center items-start py-4 md:py-0">
            <div className="text-left space-y-3">
              <h1 className="text-5xl lg:text-6xl font-bold fontwfo2 text-[#CDF239] leading-tight">
                WFO
                <br />
                The Experience
              </h1>
              <p className="text-[#CDF239] fontwfo xl:max-w-[500px]">
                Join us in Marbella, Spain from MAY 23RD-26TH for the ultimate
                Bank Holiday Experience
              </p>

              {/* Button Section */}
              <div className="flex justify-center items-center gap-8 md:justify-start !mt-4">
                <Link to="/tickets" className="hero-button fontwfo">
                  Get Tickets here
                </Link>

                <button onClick={handleScroll} className="hero-button fontwfo">
                  FAQs & Intineary
                </button>
              </div>
            </div>
          </div>
        </div>
        <HomeInfo />
      </section>
    </>
  );
};

export default Hero;
