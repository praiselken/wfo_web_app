import React, { useState, useEffect } from "react";

export default function Tickets() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    fetch("/tickets.json") // Load ticket data from `public/tickets.json`
      .then((response) => response.json())
      .then((data) => {
        // Update image paths dynamically (no need for imports)
        const updatedData = data.map((ticket) => ({
          ...ticket,
          image: `/tickets/${ticket.image}`, // Use images from `public/tickets/`
        }));
        setTickets(updatedData);
      })
      .catch((error) => console.error("Error loading tickets:", error));
  }, []);

  return (
    <div className="relative z-10 flex fontwfo flex-col items-center justify-center min-h-screen text-white px-4">
      <div className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg max-w-2xl text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Get Your Tickets</h1>
        <p className="text-lg mb-6">
          Secure your spot for an unforgettable experience! Choose from our
          available ticket options below.
        </p>
      </div>

      {/* Ticket Images Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {tickets.map((ticket) => (
          <a
            key={ticket.id}
            href={ticket.link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group overflow-hidden rounded-lg"
          >
            {/* Ticket Image */}
            <img
              src={ticket.image}
              alt={ticket.text}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56"
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition-opacity duration-300 flex items-center justify-center text-white text-xl font-bold">
              {ticket.text}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
