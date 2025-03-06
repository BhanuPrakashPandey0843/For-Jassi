import React from "react";
import { Link } from "react-router-dom";
import heroBottom from "../../assets/Hero bottom.png";
import heroright from "../../assets/Herorightb.png";

const HeroSection = () => {
  return (
    <section className="relative bg-white py-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-snug">
            Test Your Skills and Knowledge <br />
            with{' '}
            <span className="relative inline-block">
              <span className="absolute inset-0 bg-yellow-300 rounded-md -rotate-2 transform scale-105"></span>
              <span className="relative text-primary px-2">Expert Quizzes</span>
            </span>
          </h1>
          <p className="mt-6 text-gray-700 text-lg md:text-xl leading-relaxed font-light">
            Quizzes help students learn and engage with subjects in a fun and challenging way, 
            expanding general knowledge and encouraging critical thinking.
          </p>

          {/* Buttons Section */}
          <div className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <Link
              to="/signup"
              className="bg-primary text-white px-8 py-3 rounded-full text-lg font-medium 
              hover:bg-blue-900 transition shadow-lg transform hover:scale-105"
            >
              Sign up for free!
            </Link>
            <Link
              to="/teachers"
              className="border-2 border-primary text-primary px-8 py-3 rounded-full text-lg font-medium 
              hover:bg-primary hover:text-white transition shadow-md transform hover:scale-105"
            >
              Are you a Teacher?
            </Link>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
          <img
            src={heroright}
            alt="Students learning"
            className="rounded-lg shadow-lg w-full max-w-md"
          />
        </div>
      </div>

      {/* Bottom Background Image */}
      <div className="absolute bottom-0 left-0 w-full">
        <img
          src={heroBottom}
          alt="Hero Bottom Background"
          className="w-full object-cover"
        />
      </div>
    </section>
  );
};

export default HeroSection;