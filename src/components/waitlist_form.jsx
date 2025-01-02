import wfoLogo from "../assets/img/logo.jpg";
import instaLogo from "../src/assets/img/insta.png";
import tiktokLogo from "../src/assets/img/tiktok.png";
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
    { id: 1, name: "Instagram" },
    { id: 2, name: "Snapchat" },
    { id: 3, name: "Google Ad" },
    { id: 4, name: "Google Search" },
    { id: 5, name: "Word of mouth" },
  ];

  const [selected, setSelected] = useState(options[0]);
  const [formData, setFormData] = useState({
    name: "",
    phone_number: "",
    email: "",
    gender: "",
    age: "",
    ig_handle: "",
    city_country: "",
    source: options[0].name,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://ot8gzi7gmg.execute-api.eu-west-2.amazonaws.com/prod/user",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      const result = await response.json();
      if (response.ok) {
        alert("Successfully joined the waitlist!");
        setFormData({
          name: "",
          phone_number: "",
          email: "",
          gender: "",
          age: "",
          ig_handle: "",
          city_country: "",
          source: options[0].name,
        });
      } else {
        alert(`Error: ${result.message || "Something went wrong."}`);
      }
    } catch (error) {
      alert("Failed to submit. Please try again later.");
    }
  };

  return (
    <>
      <div className="bg-neutral-900 pb-8 flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
        <iframe
          className="mx-auto w-full rounded-lg"
          height="315"
          src="https://www.youtube.com/embed/bpBZk--QD1M?si=xxOwNmLBUPHzGjRf"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h1 className="text-4xl text-white text-center pt-8 font-bold fontwfo">
            We're Flyin Out Marbs '25
          </h1>
          <img
            alt="Your Company"
            src={wfoLogo}
            className="mx-auto h-[6rem] w-auto pt-8"
          />
          <h2 className=" mt-6 text-center text-2xl/9 font-bold tracking-tight text-white">
            Join our Waitlist
          </h2>
        </div>
      </div>
      <div className=" sm:mx-auto sm:w-full sm:max-w-[480px]">
        <div className="bg-neutral-900 px-6 py-6 shadow sm:rounded-lg sm:px-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            {[
              { label: "Name", id: "name", type: "text" },
              { label: "Phone Number", id: "phone_number", type: "text" },
              { label: "Email address", id: "email", type: "email" },
              { label: "Gender", id: "gender", type: "text" },
              { label: "Age", id: "age", type: "number" },
              { label: "IG Handle", id: "ig_handle", type: "text" },
              {
                label: "City & Country of Residence",
                id: "city_country",
                type: "text",
              },
            ].map((field) => (
              <div key={field.id}>
                <label
                  htmlFor={field.id}
                  className="block text-sm/6 font-medium text-white"
                >
                  {field.label}
                </label>
                <div className="mt-2">
                  <input
                    id={field.id}
                    name={field.id}
                    type={field.type}
                    required
                    value={formData[field.id]}
                    onChange={handleChange}
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-neutral-900 outline outline-1 -outline-offset-1 outline-neutral-300 placeholder:text-neutral-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>
            ))}
            <div>
              <label
                htmlFor="dropdown"
                className="block text-sm/6 font-medium text-white"
              >
                How did you find out about us?
              </label>
              <Listbox
                value={selected}
                onChange={(option) => {
                  setSelected(option);
                  setFormData({ ...formData, source: option.name });
                }}
              >
                <ListboxButton className="relative text-left block w-full rounded-md bg-white px-3 py-1.5 text-base text-neutral-900 outline outline-1 -outline-offset-1 outline-neutral-300 placeholder:text-neutral-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
                  {selected.name}
                  <ChevronDownIcon
                    className="absolute top-2.5 right-2.5 h-5 w-5 text-neutral-400"
                    aria-hidden="true"
                  />
                </ListboxButton>
                <ListboxOptions className="mt-1 max-h-60 w-full overflow-auto rounded-md bg-neutral-100 shadow-lg focus:outline-none">
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
      </div>
      <div>
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
      <div>
        <h2 className="text-center text-white text-2xl/9 font-bold tracking-tight pt-8">
          Connect with Us!
        </h2>
        <p>
          <a href="instagram.com" target="_blank" rel="noopener noreferrer"></a>
          <img
            src={instaLogo}
            alt="Link to Instagram page"
            style={{ width: "auto", height: "6rem", paddingTop: "2rem" }}
          />

          <a
            href="https://www.instagram.com/wereflyinout?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
          ></a>
          <img
            src={tiktokLogoLogo}
            alt="https://www.tiktok.com/@wereflyinout?_t=8siap4CtgkC&_r=1"
            style={{ width: "auto", height: "6rem", paddingTop: "2rem" }}
          />
        </p>
      </div>
    </>
  );
}
