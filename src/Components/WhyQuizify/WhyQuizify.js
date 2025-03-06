import React, { useEffect, useRef } from "react";
import { RiServiceFill, RiEmotionHappyLine, RiChatHeartLine } from "react-icons/ri";
import { gsap } from "gsap";

const WhyQuizify = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" }
    );
  }, []);

  return (
    <section ref={sectionRef} className="py-12 bg-white-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-10">
          Why Quizify?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Box 1 */}
          <div className="bg-white shadow-lg p-6 rounded-lg flex flex-col items-center transition-transform transform hover:scale-105">
            <RiChatHeartLine className="text-blue-600 text-5xl mb-4" />
            <h3 className="text-xl font-semibold text-blue-900">
              We CARE about you!
            </h3>
            <p className="text-gray-600 mt-2">
              We care about your well-being. We want to create an atmosphere
              that leads to a long-term relationship of exceptional service.
            </p>
          </div>

          {/* Box 2 */}
          <div className="bg-white shadow-lg p-6 rounded-lg flex flex-col items-center transition-transform transform hover:scale-105">
            <RiServiceFill className="text-blue-600 text-5xl mb-4" />
            <h3 className="text-xl font-semibold text-blue-900">
              We're Here to Help You Succeed
            </h3>
            <p className="text-gray-600 mt-2">
              Our expert team comes from diverse backgrounds to help solve your
              biggest problems.
            </p>
          </div>

          {/* Box 3 */}
          <div className="bg-white shadow-lg p-6 rounded-lg flex flex-col items-center transition-transform transform hover:scale-105">
            <RiEmotionHappyLine className="text-blue-600 text-5xl mb-4" />
            <h3 className="text-xl font-semibold text-blue-900">
              Satisfaction Guaranteed
            </h3>
            <p className="text-gray-600 mt-2">
              100% Satisfaction is our goal. Our process ensures you will be
              satisfied every time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyQuizify;
