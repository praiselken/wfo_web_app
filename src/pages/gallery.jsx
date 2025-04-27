import { useState, useEffect } from "react";

const galleryImages = [
  "../public/gallery/group patron boat pic.JPG",
  "../public/gallery/3 girls with bottles on head.JPG",
  "../public/gallery/huge group boat pic.JPG",
  "../public/gallery/patron hand pic.JPG",
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
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-2xl shadow-lg">
      {galleryImages.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Slide ${index}`}
          className={`w-full h-96 object-cover transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      {/* Optional: Add navigation buttons */}
      <div className="absolute inset-0 flex items-center justify-between p-4">
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
