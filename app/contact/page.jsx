import React from "react";
import Contact from "../../components/Contact/Contact";
import WebLayout from "@/components/layout/WebLayout";
import Map from "@/components/Map/Map";
import Banner from "@/pageComponents/Banner/Banner";
export const metadata = {
  title: "About Me",
};
const ContactUs = () => {
  return (
    <div>
      <WebLayout>
        <Banner
          title="Contact"
          bgImage="https://sowindwp.websitelayout.net/wp-content/uploads/2024/01/page-title.jpg"
        />
        <Contact />
        <Map />
      </WebLayout>
    </div>
  );
};

export default ContactUs;
