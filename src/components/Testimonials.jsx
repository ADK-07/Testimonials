import { useState } from "react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
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

  const previousQuote = () =>
    setCurrentIndex(
      (currentIndex + testimonials.length - 1) % testimonials.length
    );

  const nextQuote = () =>
    setCurrentIndex((currentIndex + 1) % testimonials.length);

  return (
    <div className="min-h-screen flex justify-center items-center bg-[#E0C9A6]">
      <div className="flex flex-col gap-3 relative">
        <div className="max-w-3xl px-6 py-10 bg-amber-200 backdrop:blur-3xl rounded-lg shadow-md ">
          ❝ {testimonials[currentIndex].quote} ❞
        </div>
        <div className="flex justify-end">
          <div className="max-w-35 px-6 py-4 rounded-md bg-amber-100 shadow-md">
            {testimonials[currentIndex].autor}
          </div>
        </div>
        <div className="flex gap-3 items-center justify-center">
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
