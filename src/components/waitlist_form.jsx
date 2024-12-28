import wfoLogo from "../assets/img/logo.jpg";

export default function Waitlist() {
  return (
    <>
      {/*
          This example requires updating your template:
  
          ```
          <html class="h-full bg-gray-50">
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
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
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
                className="block text-sm/6 font-medium text-gray-900"
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
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="phone_number"
                className="block text-sm/6 font-medium text-gray-900"
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
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm/6 font-medium text-gray-900"
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
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="gender"
                className="block text-sm/6 font-medium text-gray-900"
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
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="age"
                className="block text-sm/6 font-medium text-gray-900"
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
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="city-country"
                className="block text-sm/6 font-medium text-gray-900"
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
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <label htmlFor="dropdown">Choose an option:</label>
              <select
                id="dropdown"
                value={selectedOption}
                onChange={handleDropdownChange}
                required
              >
                <option value="" disabled>
                  -- Select an option --
                </option>
                {options.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex gap-3">
                <div className="flex h-6 shrink-0 items-center">
                  <div className="group grid size-4 grid-cols-1">
                    <svg
                      fill="none"
                      viewBox="0 0 14 14"
                      className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
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
          <p className="mt-10 text-center text-sm/6 text-gray-500">
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
