import { useState, useEffect } from "react";

const galleryImages = [
  "/gallery/group patron boat pic.JPG",
  "/gallery/3 girls with bottles on head.JPG",
  "/gallery/huge group boat pic.JPG",
  "/gallery/patron hand pic.JPG",
];

export default function Gallery() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
    }, 3000); // change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-2xl shadow-lg h-96">
      {/* IMAGES */}
      {galleryImages.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Slide ${index}`}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        />
      ))}

      {/* NAVIGATION BUTTONS - always on top */}
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
    </div>
  );
}
