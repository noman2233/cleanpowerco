import React from "react";
import Banner from "@/pageComponents/Banner/Banner";
import WebLayout from "@/components/layout/WebLayout";
import AboutSection from "../../pageComponents/about/AboutSection/AboutSection";
import WorkProcess from "@/pageComponents/about/WorkProcess/WorkProcess";

const About = () => {
  return (
    <WebLayout>
      <Banner
        title="About"
        bgImage="https://i.ibb.co/QF4pY75g/architect-woman-examining-draft-map-blueprint-project-plan-130265-5951.avif"
      />
      <AboutSection />
      <WorkProcess />
    </WebLayout>
  );
};

export default About;
