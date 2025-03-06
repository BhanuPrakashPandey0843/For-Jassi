import React from "react";
import HeroSection from "../Components/HeroSection/HeroSection";
import WhyQuizify from "../Components/WhyQuizify/WhyQuizify"
import Marquee from "../Components/Marquee/Marquee";
import SupportSection from "../Components/SupportSection/SupportSection";
import QuizStory from "../Components/QuizStory/QuizStory";
import Quizsetup from "../Components/Quizsetup/Quizsetup";
import Testimonials from "../Components/Testimonials/Testimonials"
const LandingPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection /> 
      <Marquee />
      <Quizsetup />
      <WhyQuizify />
      <Testimonials />
      <QuizStory />
      <SupportSection />

    </div>
  );
};

export default LandingPage;
