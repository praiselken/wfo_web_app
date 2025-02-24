import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
// import { XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import wfoLogo from "../assets/img/whitewfo.svg";

const navigation = [
  { name: "Home", to: "landing" },
  { name: "Tickets", to: "/tickets" },
  { name: "Gallery", to: "/gallery" },
  { name: "Contact Us", to: "/contact_us" },
];

export default function Navigation() {
  return (
    <Disclosure
      as="nav"
      className="nav-app fontwfo bg-transparent border-none z-50 relative"
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-1">
            <img alt="Your Company" src={wfoLogo} className="h-10 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden sm:flex space-x-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                className="text-white hover:text-[#f24cbe] px-3 py-2 text-xl font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="sm:hidden">
            <DisclosureButton className="bg-none text-white hover:text-[#f24cbe] focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="size-6"
              >
                <path
                  fillRule="evenodd"
                  d="M2 4.75A.75.75 0 0 1 2.75 4h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.75ZM2 10a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 10Zm0 5.25a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z"
                  clipRule="evenodd"
                />
              </svg>
            </DisclosureButton>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as={Link}
              to={item.to}
              className="block px-3 py-2 fontwfo font-medium text-white hover:text-[#f24cbe]"
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
