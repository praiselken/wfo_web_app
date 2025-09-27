import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router

const Hero = () => {
  return (
    <>
      <section className="px-4 md:px-8">
        <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative">
          {/* Title and Event Info */}
          <div className="flex flex-col justify-center items-start py-4 md:py-0">
            <div className="text-left space-y-3">
              {" "}
              {/* Reduced space */}
              <h1 className="text-5xl lg:text-6xl font-bold fontwfo2 text-[#CDF239] leading-tight">
                WFO
                <br /> {/* Forces a new line after the second word */}
                The Experience
              </h1>
              <p className="text-[#CDF239] fontwfo xl:max-w-[500px]">
                Join us in Marbella, Spain from MAY 23RD-26TH for the ultimate
                Bank Holiday Experience
              </p>
              {/* buttom section */}
              <div className="flex justify-center items-center gap-8 md:justify-start !mt-4">
                <Link
                  to="/tickets"
                  className="flex items-center gap-2 mt-4 fontwfo border border-[#CDF239] text-[#CDF239] bg-transparent px-4 py-2 rounded-md hover:bg-[#CDF239] hover:text-black transition"
                >
                  Get Tickets here
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
