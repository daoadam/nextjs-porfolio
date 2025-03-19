"use client";
import { useState } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const slides = [
  { src: "/music.jpg", text: "Producing Music" },
  { src: "/matcha.jpg", text: "Exploring Cafes" },
  { src: "/travel.jpg", text: "New Adventures" },
  { src: "/powerlifting.jpg", text: "Liftin Heavy" },
]; // Ensure these files exist in /public

export default function Carousel() {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));

  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  return (
    <div className="relative w-full max-w-3xl mx-auto overflow-hidden">
      {/* Slides Container */}
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="relative w-full h-[200px] flex-shrink-0">
            {/* Background Image */}
            <Image
              src={slide.src}
              alt={`Slide ${index + 1}`}
              width={400}
              height={250}
              unoptimized
              className="w-full h-full object-cover rounded-lg"
            />
            {/* Overlay & Centered Text */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 text-white text-lg font-semibold rounded-lg">
              {slide.text}
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="absolute top-1/2 left-0 right-0 flex justify-between transform -translate-y-1/2 px-4">
        <button
          onClick={prev}
          className="p-2 rounded-full shadow bg-white text-gray-800 hover:bg-gray-200"
        >
          <FaChevronLeft size={40} />
        </button>

        <button
          onClick={next}
          className="p-2 rounded-full shadow bg-white text-gray-800 hover:bg-gray-200"
        >
          <FaChevronRight size={40} />
        </button>
      </div>
    </div>
  );
}
