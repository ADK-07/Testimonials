import { useEffect, useState } from "react";

const colors = ["bg-amber-200", "bg-yellow-200", "bg-cyan-200"];
// you need to declare colors outside because if we declare it inside the component Testimonials  even though colors is a constant array but when we use useEffect it will think that color is changing in different render so we need to add colors in useEffect dependecy to avoid that we need do this

const testimonials = [
  {
    quote: "This is the product I've ever used!",
    autor: "Jane Doe",
  },
  {
    quote: "I highly recommend this product to everyone",
    autor: "John Smith",
  },
  {
    quote: "This product has completely changed my life",
    autor: "Drake",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentColor, setCurrentColor] = useState("bg-amber-200");

  useEffect(() => {
    const randomColors = colors[Math.floor(Math.random() * colors.length)];
    setCurrentColor(randomColors);
  }, [currentIndex]);

  const previousQuote = () =>
    setCurrentIndex(
      (currentIndex + testimonials.length - 1) % testimonials.length
    );

  const nextQuote = () =>
    setCurrentIndex((currentIndex + 1) % testimonials.length);

  return (
    <div className="min-h-screen flex justify-center items-center bg-[#E0C9A6]">
      <div className="flex flex-col gap-3 relative">
        <div
          className={`max-w-3xl px-6 py-10 ${currentColor} backdrop:blur-3xl rounded-lg shadow-md `}
        >
          ❝ {testimonials[currentIndex].quote} ❞
        </div>
        <div className="flex justify-end">
          <div className="max-w-35 px-6 py-4 rounded-md bg-amber-100 shadow-md">
            {testimonials[currentIndex].autor}
          </div>
        </div>
        <div className="flex gap-3 items-center justify-center mt-3">
          <button
            onClick={previousQuote}
            className="px-4 py-2 bg-gray-200 shadow-md rounded-md items-center"
          >
            prev
          </button>
          <button
            onClick={nextQuote}
            className="px-4 py-2 bg-gray-200 shadow-md rounded-md items-center"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
