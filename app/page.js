import AboutSection from "@/components/AboutSection/AboutSection";
import AnnouncementBar from "@/components/AnnouncementBar/AnnouncementBar";
import Contact from "@/components/Contact/Contact";
import FaqSection from "@/components/FaqSection/FaqSection";
import Footer from "@/components/Footer/Footer";
import HeroSection from "@/components/HeroSection/HeroSection";
import WebLayout from "@/components/layout/WebLayout";
import LogoSlider from "@/components/LogoSlider/LogoSlider";
import Navbar from "@/components/Navbar/Navbar";
import ServicesSection from "@/components/ServicesSection/ServicesSection";
import Testimonials from "@/components/Testimonials/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";
import React from "react";
import { services } from "@/components/data";

const page = () => {
  return (
    <div>
      <WebLayout>
        <HeroSection />
        <LogoSlider />
        <ServicesSection services={services?.slice(0,3)} />
        <AboutSection />
        <WhyChooseUs />
        <FaqSection />
        <Testimonials />
        <Contact showImage />
      </WebLayout>
    </div>
  );
};

export default page;
