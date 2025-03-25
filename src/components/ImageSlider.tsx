import React, { useState, useEffect } from "react";
import blog from "../assets/BLOG.png";
import library from "../assets/Library.jpg";
import document from "../assets/Recordation-image-2.jpg";

interface Slide {
  id: number;
  image: string;
  title: string;
  description: string;
}

const slides: Slide[] = [
  {
    id: 1,
    image: blog,
    title: "BLOGS",
    description: "Explore our blogs...",
  },
  {
    id: 2,
    image: library,
    title: "LIBRARY",
    description: "Explore our library...",
  },
  {
    id: 3,
    image: document,
    title: "Documents",
    description: "A collection of documents from the National Assembly...",
  },
];

const ImageSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-[90%] h-[75vh] mx-auto overflow-hidden">
      {/* Image and Content */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute z-0 top-0 left-0 w-full h-full p-6 text-white transition-opacity duration-700 ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "10px",
          }}
        >
          <div className="bg-black bg-opacity-50 p-4 rounded-lg">
            <h2 className="text-2xl font-bold">{slide.title}</h2>
            <p className="text-sm">{slide.description}</p>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={() =>
          setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
        }
        className="absolute z-7 left-4 top-1/2 transform -translate-y-1/2 p-3 bg-gray-800 text-white rounded-full"
      >
        ◀
      </button>
      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
        className="absolute z-7 right-4 top-1/2 transform -translate-y-1/2 p-3 bg-gray-800 text-white rounded-full"
      >
        ▶
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? "bg-white" : "bg-gray-500"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
