import WebLayout from "@/components/layout/WebLayout";
import Banner from "@/pageComponents/Banner/Banner";
import React from "react";
import Accordian from "@/pageComponents/faq/Accordian";

const page = () => {
  return (
    <div>
      <WebLayout>
        <Banner
          title="FAQ'S"
          bgImage="https://i.ibb.co/JWm5RwDW/rows-of-solar-panels-collect-energy-as-the-sun-sets-behind-a-line-of-trees-photo.jpg"
        />
        <Accordian/>
      </WebLayout>
    </div>
  );
};

export default page;
