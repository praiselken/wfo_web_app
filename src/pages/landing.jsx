import Waitlist from "../components/waitlist_form";

const HomePage = () => {
  return (
    <div className="w-full flex flex-col min-h-screen bg-gray-100">
      {/* Header */}
      <Waitlist />
      <header className="bg-blue-600 text-white py-4">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl font-bold">My Tailwind React Page</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-6 py-10">
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Welcome</h2>
          <p className="text-gray-600">
            This is a basic React page styled with Tailwind CSS. You can use
            this as a starting point for your projects. Feel free to modify the
            content and layout to suit your needs.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Get Started
          </h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>Edit this page to add your content.</li>
            <li>Customize the styles using Tailwind CSS classes.</li>
            <li>Add more components to build out your app.</li>
          </ul>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} My Tailwind React Page. All
            rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
