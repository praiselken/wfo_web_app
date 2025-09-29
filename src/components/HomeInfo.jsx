import React, { useState } from "react";
import { faqList } from "../constants/index.js"; // Adjust the path as needed

const HomeInfo = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="px-5 md:px-20 py-10">
      {/* Grid: 1 column mobile, 2 columns desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* LEFT SIDE: ITINERARY */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <header className="mb-4">
            <h1 className="fontwfo2 font-bold text-3xl text-white">
              Itinerary
            </h1>
          </header>
          <h2 className="text-xl lg:text-4xl font-bold fontwfo2 text-white leading-relaxed space-y-4">
            <div className="mt-6">
              30TH SEPT:
              <br />
              YACHT PARTY 12–6PM
            </div>
          </h2>
        </div>

        {/* RIGHT SIDE: FAQs */}
        <div className="faq-section flex flex-col items-center md:items-start">
          <header className="mb-4 w-full">
            <h1 className="fontwfo2 font-bold text-4xl text-white mb-6 text-center md:text-left">
              FAQs
            </h1>
            <div className="space-y-4 w-full fontwfo">
              {faqList.map((faq, index) => (
                <div
                  key={index}
                  className="border-b border-white/30 pb-4 cursor-pointer"
                  onClick={() => toggleFAQ(index)}
                >
                  <h2 className="font-bold text-white text-lg mb-1 flex justify-between items-center">
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
      </div>
    </section>
  );
};

export default HomeInfo;
