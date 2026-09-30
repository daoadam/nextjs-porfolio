"use client";
import { useState } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const slides = [
  { src: "/music.jpg", text: "Producing Music" },
  { src: "/matcha.jpg", text: "Exploring Cafes" },
  { src: "/travel.jpg", text: "New Adventures" },
  { src: "/powerlifting.jpg", text: "Liftin Heavy" },
];

export default function Carousel() {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));

  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  return (
    <div className="relative w-full max-w-3xl mx-auto h-64">
      {/* Single slide display instead of transform */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-opacity duration-500 ${
            index === curr ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="relative w-full h-full">
            <Image
              src={slide.src}
              alt={`Slide ${index + 1}`}
              fill
              className="object-cover rounded-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 text-white text-lg font-semibold rounded-lg">
              {slide.text}
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <div className="absolute top-1/2 left-0 right-0 flex justify-between transform -translate-y-1/2 px-2 z-10">
        <button
          onClick={prev}
          className="p-1 rounded-full shadow bg-white opacity-80 text-gray-800 hover:bg-gray-200"
        >
          <FaChevronLeft size={26} />
        </button>

        <button
          onClick={next}
          className="p-1 rounded-full shadow bg-white opacity-80 text-gray-800 hover:bg-gray-200"
        >
          <FaChevronRight size={26} />
        </button>
      </div>
    </div>
  );
}