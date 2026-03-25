import AboutSection from "@/components/AboutSection/AboutSection";
import AnnouncementBar from "@/components/AnnouncementBar/AnnouncementBar";
import FaqSection from "@/components/FaqSection/FaqSection";
import Footer from "@/components/Footer/Footer";
import HeroSection from "@/components/HeroSection/HeroSection";
import LogoSlider from "@/components/LogoSlider/LogoSlider";
import Navbar from "@/components/Navbar/Navbar";
import ServicesSection from "@/components/ServicesSection/ServicesSection";
import Testimonials from "@/components/Testimonials/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";
import React from "react";

const page = () => {
  return (
    <div>
      <AnnouncementBar />
      <Navbar />
      <HeroSection />
      <LogoSlider />
      <ServicesSection />
      <AboutSection />
      <WhyChooseUs />
      <FaqSection />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default page;
