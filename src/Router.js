import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Projects from "./components/Projects";
import ContactUs from "./components/ContactUs";
import Blog from "./components/Blog";
import Career from "./components/Career";
import BlogLinkComponent from "./components/BlogLinkComponent";
import TeamSection from "./components/Team";


const Router = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services/>} />
          <Route path="/blogcomp" element={<BlogLinkComponent/>} />
          <Route path="/project" element={<Projects/>} />
          <Route path="/contact" element={<ContactUs/>} />
          <Route path="/career" element={<Career/>} />
          <Route path="/team" element={<TeamSection/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
};

export default Router;
