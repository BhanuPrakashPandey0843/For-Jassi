import React from "react";

const Marquee = () => {
  return (
    <div className="relative z-10 bg-primary text-white px-6 py-4 overflow-hidden">
      <div className="flex whitespace-nowrap animate-marquee gap-10">
        <div className="text-center flex-shrink-0">
          <span className="text-xl font-bold font-sans">+1,300</span>
          <span className="text-sm ml-1 font-sans">Teachers Trust Our Quizzes</span>
        </div>
        <div className="text-center flex-shrink-0">
          <span className="text-xl font-bold font-sans">+5,800</span>
          <span className="text-sm ml-1 font-sans">Students use our quizzes</span>
        </div>
        <div className="text-center flex-shrink-0">
          <span className="text-xl font-bold font-sans">+21</span>
          <span className="text-sm ml-1 font-sans">Use Our Quizzes to Assess Grades</span>
        </div>
        <div className="text-center flex-shrink-0">
          <span className="text-xl font-bold font-sans">+56</span>
          <span className="text-sm ml-1 font-sans">Use Assess Grades</span>
        </div>
        <div className="text-center flex-shrink-0">
          <span className="text-xl font-bold font-sans">+1,300</span>
          <span className="text-sm ml-1 font-sans">Teachers Trust Our Quizzes</span>
        </div>
        <div className="text-center flex-shrink-0">
          <span className="text-xl font-bold font-sans">+5,800</span>
          <span className="text-sm ml-1 font-sans">Students use our quizzes</span>
        </div>
        <div className="text-center flex-shrink-0">
          <span className="text-xl font-bold font-sans">+21</span>
          <span className="text-sm ml-1 font-sans">Use Our Quizzes to Assess Grades</span>
        </div>
        <div className="text-center flex-shrink-0">
          <span className="text-xl font-bold font-sans">+56</span>
          <span className="text-sm ml-1 font-sans">Use Assess Grades</span>
        </div>
      </div>

      <style>
        {`
          @keyframes marquee {
            from {
              transform: translateX(100%);
            }
            to {
              transform: translateX(-100%);
            }
          }
          .animate-marquee {
            display: flex;
            animation: marquee 20s linear infinite;
          }
        `}
      </style>
    </div>
  );
};

export default Marquee;
