import React, { useState } from "react";
import { faqList } from "../constants/index.js"; // Adjust the path as needed
import { BRDF_GGX } from "three/tsl";

const HomeInfo = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:px-20 px-5 py-10 p-2">
        {/* RIGHT SIDE: FAQS */}
        <div
          className="faq-section flex flex-col items-center"
          id="faq-section"
        >
          <header className="mb-4 w-full">
            <h1 className="fontwfo2 text-[#FFFFFF] font-bold text-4xl mb-6 text-center">
              FAQs
            </h1>
            <div className="space-y-4 w-full fontwfo">
              {faqList.map((faq, index) => (
                <div
                  key={index}
                  className="border-b border-[#FFFFFF]/30 pb-4 cursor-pointer"
                  onClick={() => toggleFAQ(index)}
                >
                  <h2 className="font-bold text-[#FFFFFF] text-lg mb-1 flex justify-between items-center">
                    {faq.question}
                    <span className="text-white text-xl">
                      {activeIndex === index ? "−" : "+"}
                    </span>
                  </h2>
                  {activeIndex === index && (
                    <p className="text-white text-sm mt-2">{faq.answer}</p>
                  )}
                </div>
              ))}
            </div>
          </header>
        </div>

        {/* LEFT SIDE: ITINERARY */}
        <div className="flex flex-col items-center">
          <header className="mb-4">
            <h1 className="fontwfo2 text-[#] font-bold text-3xl">
              Itinerary
            </h1>
          </header>
                        <h2 className="text-xl lg:text-6xl font-bold fontwfo2 text-[#FFFFFF] leading-tight">
                26TH SEPT: 
                <br /> {/* Forces a new line after the second word */}
                Bottomless Brunch   1-4PM 
                <br />
                Day Party 5-10PM
                <br />
                27TH SEPT:
                <br />
                Yacht Party 2-7PM
                <br />
                28TH SEPT:
                <br />
                JETSKI TAKEOVER FINALE 12-6PM
              </h2>
        </div>
      </div>
    </section>
  );
};

export default HomeInfo;
