import React, { useState } from "react";

const reviews = [
  {
    text: "I've always struggled with math, but these quizzes have really helped me to improve my grades. The explanations are clear and concise, and they help me to understand the concepts.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Omar Mahmoud",
    role: "High school student",
  },
  {
    text: "These quizzes are fantastic! They break down complex topics into easy-to-understand lessons, making studying much more fun and engaging.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Mena Abdelal",
    role: "Engineering student",
  },
  {
    text: "I was never confident in science until I started using these quizzes. They’ve given me the confidence to perform better in exams!",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
    name: "Farooq Yassin",
    role: "CS student",
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="text-center py-12 bg-white-100">
      <h2 className="text-3xl md:text-4xl font-extrabold text-blue-600">
        Students Love Our Quizzes!
      </h2>
      <p className="text-gray-500 text-sm md:text-lg tracking-wide mt-2 uppercase">
        STUDENT TESTIMONIALS
      </p>
      
      <div className="relative flex items-center justify-center py-10 px-6 md:px-12">
        {/* Left Button */}
        <button
          onClick={prevReview}
          className="absolute left-0 bg-blue-500 text-white p-3 rounded-full shadow-md hover:bg-blue-600 transition"
        >
          &#8592;
        </button>

        {/* Testimonial Box */}
        <div className="relative w-full md:w-3/4 lg:w-2/3 text-center border-2 border-dashed border-blue-400 rounded-lg p-6 md:p-8 shadow-md bg-white">
          {/* Quotes Icon */}
          <span className="absolute top-0 left-4 text-yellow-500 text-3xl">❝</span>
          <span className="absolute bottom-0 right-4 text-yellow-500 text-3xl">❞</span>

          {/* Review Text */}
          <p className="text-blue-600 text-lg md:text-xl font-medium leading-relaxed">
            {reviews[currentIndex].text}
          </p>
        </div>

        {/* Right Button */}
        <button
          onClick={nextReview}
          className="absolute right-0 bg-blue-500 text-white p-3 rounded-full shadow-md hover:bg-blue-600 transition"
        >
          &#8594;
        </button>
      </div>
      
      {/* Reviewer Image Section */}
      <div className="flex flex-col items-center mt-6">
        <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-md">
          <img src={reviews[currentIndex].image} alt={reviews[currentIndex].name} className="w-full h-full object-cover" />
        </div>
        <p className="mt-2 text-lg font-semibold text-blue-600">{reviews[currentIndex].name}</p>
        <p className="text-sm text-gray-500">{reviews[currentIndex].role}</p>
        <div className="flex space-x-1 mt-1 text-yellow-400">
          {[...Array(5)].map((_, i) => (
            <span key={i}>⭐</span>
          ))}
        </div>
      </div>

      {/* User Thumbnails Section */}
      <div className="flex justify-center mt-6 space-x-4">
        {reviews.map((review, index) => (
          <div key={index} className="flex flex-col items-center cursor-pointer" onClick={() => setCurrentIndex(index)}>
            <div className={`w-12 h-12 rounded-full overflow-hidden border-2 shadow-md ${index === currentIndex ? 'border-blue-600' : 'border-gray-300'}`}>
              <img src={review.image} alt={review.name} className="w-full h-full object-cover" />
            </div>
            <p className="text-xs text-gray-600 mt-1">{review.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
