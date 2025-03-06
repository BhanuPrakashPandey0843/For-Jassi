import React from "react";
import { Link } from "react-router-dom";
import { RiArrowRightLine } from "react-icons/ri";
import Biology from "../../assets/bioquiz.png";
import Chemistry from "../../assets/chemistry.png";
import Physics from "../../assets/physics.png";
import Bacteriology from "../../assets/computer.png";

const Quizsetup = () => {
  const quizzes = [
    { image: Biology, title: "Biology", quizzes: 231, color: "text-pink-500", path: "biology" },
    { image: Chemistry, title: "Chemistry", quizzes: 212, color: "text-blue-500", path: "chemistry" },
    { image: Physics, title: "Physics", quizzes: 107, color: "text-red-500", path: "physics" },
    { image: Bacteriology, title: "Bacteriology", quizzes: 22, color: "text-purple-500", path: "bacteriology" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-8 md:px-20 py-20">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
          Explore <span className="text-yellow-500">+4,521</span> Quizzes
        </h2>
        <p className="text-gray-600 mt-4 text-lg md:text-xl">
          Quizzes on a Wide Range of Topics, Created by the Best Teachers in the World
        </p>
      </div>

      {/* Top Rated Quizzes Section */}
      <div className="flex flex-col md:flex-row items-center md:justify-between w-full">
        {/* Left Side - Button & Text */}
        <div className="flex flex-col items-center md:items-start space-y-3 text-center md:text-left">
          <button className="bg-yellow-500 text-white px-8 py-4 rounded-xl font-semibold text-xl shadow-lg hover:bg-yellow-600 transition">
            Top-Rated
          </button>
          <span className="text-primary font-bold text-3xl">Best & Most Popular</span>
          <p className="text-gray-700 text-lg">Carefully curated quizzes just for you</p>
          <RiArrowRightLine className="text-4xl text-primary" />
        </div>

        {/* Right Side - Quiz Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mt-10 md:mt-0">
          {quizzes.map((quiz, index) => (
            <Link to={`/quiz/${quiz.path}`} key={index}>
              <div className="border border-gray-300 p-8 rounded-2xl text-center shadow-xl hover:shadow-2xl transition transform hover:-translate-y-2 cursor-pointer">
                <img src={quiz.image} alt={quiz.title} className="h-28 mx-auto rounded-lg" />
                <h3 className={`mt-6 text-2xl font-extrabold ${quiz.color}`}>{quiz.title}</h3>
                <p className="text-gray-600 text-lg mt-2">{quiz.quizzes} Quizzes</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* See More Quizzes */}
      <p className="mt-12 text-gray-800 cursor-pointer hover:underline text-lg md:text-2xl text-center font-semibold">
        <strong>See More Quizzes →</strong>
      </p>
    </div>
  );
};

export default Quizsetup;
