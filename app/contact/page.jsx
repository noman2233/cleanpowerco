"use client";

import React from "react";
import WebLayout from "@/components/layout/WebLayout";
import Banner from "@/pageComponents/Banner/Banner";
import dynamic from "next/dynamic";  
import OfficeGrid from "@/components/OfficeGrid/OfficeGrid";
const Contact = dynamic(() => import('../../components/Contact/Contact'), { 
  ssr: false 
});

const Map = dynamic(() => import('@/components/Map/Map'), { 
  ssr: false,
  loading: () => <p>Loading Map...</p> 
});

const ContactUs = () => {
  return (
    <div>
      <WebLayout>
        <Banner
          title="Contact"
          bgImage="https://sowindwp.websitelayout.net/wp-content/uploads/2024/01/page-title.jpg"
        />
        <Contact showInfo />
        <OfficeGrid/>
        {/* <Map /> */}
      </WebLayout>
    </div>
  );
};

export default ContactUs;
