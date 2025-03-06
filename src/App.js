import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import LandingPage from "./Pages/LandingPage";
import SignupPage from "./Pages/SignupPage";
import LoginPage from "./Pages/LoginPage";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";


function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<LandingPage />} />
          <Route path="/signup" element={<SignupPage  />} />
          <Route path="/login" element={<LoginPage  />} />

        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
