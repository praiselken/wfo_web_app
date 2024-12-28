import wfoLogo from "../assets/img/logo.jpg";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import { useState } from "react";

export default function Waitlist() {
  const options = [
    { id: 1, name: "Durward Reynolds" },
    { id: 2, name: "Kenton Towne" },
    { id: 3, name: "Therese Wunsch" },
    { id: 4, name: "Benedict Kessler" },
    { id: 5, name: "Katelyn Rohan" },
  ];

  const [selected, setSelected] = useState(options[0]);

  return (
    <>
      {/*
          This example requires updating your template:
  
          ```
          <html class="h-full bg-neutral-50">
          <body class="h-full">
          ```
        */}

      <div className="bg-[#000000] flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
        <iframe
          className="mx-auto"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/bLD3OfVae3I?si=rejl1ACHf3kGHpEh"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img
            alt="Your Company"
            src={wfoLogo}
            className="mx-auto h-[6rem] w-auto"
          />
          <h2 className=" mt-6 text-center text-2xl/9 font-bold tracking-tight text-white">
            Join our Waitlist
          </h2>
        </div>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
        <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
          <form action="#" method="POST" className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm/6 font-medium text-neutral-900"
              >
                Name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-neutral-900 outline outline-1 -outline-offset-1 outline-neutral-300 placeholder:text-neutral-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="phone_number"
                className="block text-sm/6 font-medium text-neutral-900"
              >
                Phone Number
              </label>
              <div className="mt-2">
                <input
                  id="phone_number"
                  name="phone_number"
                  type="integer"
                  required
                  autoComplete="phone_number"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-neutral-900 outline outline-1 -outline-offset-1 outline-neutral-300 placeholder:text-neutral-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm/6 font-medium text-neutral-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-neutral-900 outline outline-1 -outline-offset-1 outline-neutral-300 placeholder:text-neutral-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="gender"
                className="block text-sm/6 font-medium text-neutral-900"
              >
                Gender
              </label>
              <div className="mt-2">
                <input
                  id="gender"
                  name="gender"
                  type="gender"
                  required
                  autoComplete="gender"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-neutral-900 outline outline-1 -outline-offset-1 outline-neutral-300 placeholder:text-neutral-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="age"
                className="block text-sm/6 font-medium text-neutral-900"
              >
                Age
              </label>
              <div className="mt-2">
                <input
                  id="age"
                  name="age"
                  type="integer"
                  required
                  autoComplete="age"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-neutral-900 outline outline-1 -outline-offset-1 outline-neutral-300 placeholder:text-neutral-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="city-country"
                className="block text-sm/6 font-medium text-neutral-900"
              >
                City & Country of Residence
              </label>
              <div className="mt-2">
                <input
                  id="city-country"
                  name="city-country"
                  type="city-country"
                  required
                  autoComplete="city-country"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-neutral-900 outline outline-1 -outline-offset-1 outline-neutral-300 placeholder:text-neutral-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
                <label
                  htmlFor="dropdown"
                  className="block text-sm/6 font-medium text-neutral-900"
                  >
                  Choose an option:
                </label>
                <Listbox value={selected} onChange={setSelected}>
                  <ListboxButton 
                  className="relative text-left block w-full rounded-md bg-white px-3 py-1.5 text-base text-neutral-900 outline outline-1 -outline-offset-1 outline-neutral-300 placeholder:text-neutral-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">                  {selected.name}
                    <ChevronDownIcon
                      className="absolute top-2.5 right-2.5 h-5 w-5 text-neutral-400"
                      aria-hidden="true"
                    />
                  </ListboxButton>
                  <ListboxOptions 
                  className="mt-1 max-h-60 w-full overflow-auto rounded-md bg-neutral-100 shadow-lg focus:outline-none">
                    {options.map((option) => (
                      <ListboxOption
                        key={option.id}
                        value={option}
                        className={({ active }) =>
                          clsx(
                            "cursor-pointer select-none relative py-2 pl-3 pr-9",
                            active ? "bg-neutral-200 text-black" : "text-black"
                          )
                        }
                      >
                        {({ selected }) => (
                          <>
                            <span
                              className={clsx(
                                "block truncate",
                                selected && "font-semibold"
                              )}
                            >
                              {option.name}
                            </span>
                            {selected && (
                              <CheckIcon
                                className="absolute inset-y-0 right-0 flex items-center pr-4 h-5 w-5 text-neutral-100"
                                aria-hidden="true"
                              />
                            )}
                          </>
                        )}
                      </ListboxOption>
                    ))}
                  </ListboxOptions>
                </Listbox>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex gap-3">
                <div className="flex h-6 shrink-0 items-center">
                  <div className="group grid size-4 grid-cols-1">
                    <svg
                      fill="none"
                      viewBox="0 0 14 14"
                      className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-neutral-950/25"
                    >
                      <path
                        d="M3 8L6 11L11 3.5"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="opacity-0 group-has-[:checked]:opacity-100"
                      />
                      <path
                        d="M3 7H11"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="opacity-0 group-has-[:indeterminate]:opacity-100"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full font-semibold justify-center rounded-md bg-[#00f6ed] px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-[#00e6f6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <div>
          <p className="mt-10 text-center text-sm/6 text-neutral-500">
            Not a member?{" "}
            <a
              href="#"
              className="font-semibold text-[#F24CBE] hover:text-[#f562c6]"
            >
              Join our newsletter
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
