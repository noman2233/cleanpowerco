import React from "react";
import { services } from "@/components/data";
import ServicesSection from "../../components/ServicesSection/ServicesSection";
import Banner from "@/pageComponents/Banner/Banner";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";
import WebLayout from "@/components/layout/WebLayout";
import AboutSection from "@/components/AboutSection/AboutSection";

const Services = () => {
  return (
    <WebLayout>
      <Banner
        title="Services"
        bgImage="https://img.freepik.com/premium-photo/aerial-view-large-sustainable-electrical-power-plant-with-rows-solar-photovoltaic-panels-producing-clean-ecological-electric-energy-renewable-electricity-with-zero-emission-concept_127089-14886.jpg"
      />
      <ServicesSection services={services} />

      <AboutSection />
    </WebLayout>
  );
};

export default Services;
