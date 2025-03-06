import React from "react";

const SupportSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-white p-12 md:p-20 rounded-lg shadow-2xl w-full mx-auto relative overflow-hidden min-h-screen">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full bg-blue-50 opacity-20 rounded-lg"></div>
      
      {/* Text Section */}
      <div className="md:w-1/2 text-center md:text-left z-10">
        <h2 className="text-4xl md:text-6xl font-extrabold text-blue-700 leading-tight">
          Got a problem? <br /> We’ve got solutions.
        </h2>
        <p className="text-gray-700 mt-6 text-lg md:text-2xl leading-relaxed">
          Got a problem with your quizzes? Need help understanding a concept?
          Have a question about our website? No problem! We're here to help.
          Contact us or read our FAQ to get the answers you need.
        </p>
        {/* Buttons */}
        <div className="mt-8 flex justify-center md:justify-start space-x-6">
          <button className="bg-blue-600 text-white px-10 py-4 rounded-full font-semibold text-xl hover:bg-blue-700 transition-all shadow-lg transform hover:scale-105">
            Contact us
          </button>
          <button className="border-2 border-blue-600 text-blue-600 px-10 py-4 rounded-full font-semibold text-xl hover:bg-blue-100 transition-all shadow-lg transform hover:scale-105">
            Read FAQ’s
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center mt-8 md:mt-0 relative z-10">
        <img
          src="https://static.vecteezy.com/system/resources/previews/001/644/203/large_2x/quiz-show-scene-vector.jpg"
          alt="Support"
          className="w-80 h-80 md:w-[500px] md:h-[500px] rounded-full object-cover shadow-2xl border-4 border-blue-300"
        />
        {/* Decorative Icons */}
       
      </div>
    </div>
  );
};

export default SupportSection;
