import { useState, useEffect } from "react";
import { galleryImages } from "../constants"; // Adjust path as needed

export default function Gallery() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-6xl mx-auto overflow-hidden rounded-2xl shadow-lg h-[400px] md:h-[600px]">
      {/* IMAGES */}
      {galleryImages.map((img, index) => (
        <img
          key={index}
          src={img.src}
          alt={img.caption}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        />
      ))}

      {/* NAVIGATION BUTTONS */}
      <div className="absolute inset-0 flex items-center justify-between p-4 z-20">
        <button
          onClick={() =>
            setCurrent(
              (current - 1 + galleryImages.length) % galleryImages.length
            )
          }
          className="bg-black bg-opacity-30 text-white p-2 rounded-full hover:bg-opacity-50"
        >
          ‹
        </button>
        <button
          onClick={() => setCurrent((current + 1) % galleryImages.length)}
          className="bg-black bg-opacity-30 text-white p-2 rounded-full hover:bg-opacity-50"
        >
          ›
        </button>
      </div>

      {/* CAPTION */}
      <div className="absolute bottom-6 w-full text-center z-20">
        <p className="text-white text-lg font-semibold bg-black/40 px-4 py-2 inline-block rounded-lg">
          {galleryImages[current].caption}
        </p>
      </div>

      {/* DOT INDICATORS */}
      <div className="absolute bottom-2 w-full flex justify-center gap-2 z-20">
        {galleryImages.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-3 w-3 rounded-full cursor-pointer ${
              index === current ? "bg-[#CDF239]" : "bg-white/50"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
}
