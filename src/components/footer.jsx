import React from "react";
import wfoLogo from "../assets/img/whitewfo.svg"; // Adjust path as needed

const Footer = () => {
  return (
    <footer className="relative w-full bg-transparent text-[#CDF239]">
      <div className="mx-auto w-full max-w-7xl px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-6 md:py-10">
          {/* Logo and Brand Name */}
          <div className="flex items-center space-x-3 mb-6 md:mb-0 md:ml-10">
            <img src={wfoLogo} alt="We're Flying Out Logo" className="h-8" />
            <h6 className="font-bold fontwfo2 text-lg text-current">
              We're Flying Out
            </h6>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col sm:flex-row sm:gap-x-8 text-right fontwfo">
            <div>
              <p className="mb-2 font-semibold opacity-50 text-left sm:text-right">
                Explore
              </p>
              <ul>
                <li>
                  <a href="/home" className="hover:text-[#f24cbe] block py-1">
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/tickets"
                    className="hover:text-[#f24cbe] block py-1"
                  >
                    Tickets
                  </a>
                </li>
                <li>
                  <a
                    href="/gallery"
                    className="hover:text-[#f24cbe] block py-1"
                  >
                    Gallery
                  </a>
                </li>
                <li>
                  <a
                    href="/contact_us"
                    className="hover:text-[#f24cbe] block py-1"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#CDF239]/20 py-4 flex flex-col md:flex-row items-center justify-between text-sm">
          <p className="text-center">
            &copy; We're Flying Out {new Date().getFullYear()}. All rights
            reserved.
          </p>
          <div className="flex gap-2 mt-2 md:mt-0">
            {/* Example Social Icons */}
            <a
              href="#"
              className="hover:bg-[#CDF239]/10 border border-transparent rounded-md p-2 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M17 2H14c-1.33 0-2.6.53-3.54 1.46A5.004 5.004 0 009 7v3H6v4h3v8h4v-8h3l1-4h-4V7c0-.26.11-.52.29-.71.18-.18.45-.29.71-.29H17V2z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
