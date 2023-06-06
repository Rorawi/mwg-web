import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";


const Router = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
};

export default Router;