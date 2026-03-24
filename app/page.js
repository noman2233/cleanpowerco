import AboutSection from '@/components/AboutSection/AboutSection'
import Contact from '@/components/Contact/Contact'
import Footer from '@/components/Footer/Footer'
import HeroSection from '@/components/HeroSection/HeroSection'
import LogoSlider from '@/components/LogoSlider/LogoSlider'
import LogoSliderTwo from '@/components/LogoSlider/LogoSliderTwo'
import Navbar from '@/components/Navbar/Navbar'
import ServicesSection from '@/components/ServicesSection/ServicesSection'
import WhyChooseUs from '@/components/WhyChooseUs/WhyChooseUs'
 import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <LogoSlider/>
      <LogoSliderTwo/>
      <ServicesSection/>
      <AboutSection/>
      <WhyChooseUs/>
      {/* <Contact/> */}
      <Footer/>
    </div>
  )
}

export default page
