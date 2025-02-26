import React, { useState } from "react";
import axios from "axios";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess(false);
    setError("");

    try {
      await axios.post("http://localhost:5000/send-email", formData);
      setSuccess(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      setError("Failed to send message. Please try again.");
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-transparent rounded-md">
      <h2 className="text-2xl font-bold mb-4 text-[#CDF239]">Contact Us</h2>
      {success && <p className="text-green-600">Message sent successfully!</p>}
      {error && <p className="text-red-600">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-2 border bg-transparent border-[#CDF239] text-[#CDF239] rounded"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-2 border bg-transparent border-[#CDF239] text-[#CDF239] rounded"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full p-2 border bg-transparent border-[#CDF239] text-[#CDF239] rounded"
        ></textarea>

        <button
          type="submit"
          className="flex items-center gap-2 mt-4 fontwfo border border-[#CDF239] text-[#CDF239] bg-transparent px-4 py-2 rounded-md hover:bg-[#CDF239] hover:text-black transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
