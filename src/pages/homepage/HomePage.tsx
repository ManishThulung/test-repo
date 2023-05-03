import React from "react";
import Script from "next/script";

import FeaturePage from "@/components/homepage/FeaturePage";
import Footer from "@/components/homepage/Footer";
import HeroSection from "@/components/homepage/HeroSection";
import Integration from "@/components/homepage/Integration";
import TestimonialSlider from "@/components/homepage/TestimonialSlider";
import WhyCalilio from "@/components/homepage/WhyCalilio";
import Faqs from "@/components/homepage/Faqs";
import NumberPage from "@/components/homepage/NumberPage";
import Functionality from "@/components/homepage/Functionality";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <FeaturePage />
      <Functionality />
      <NumberPage />
      <Integration />
      <WhyCalilio />
      <TestimonialSlider />
      <Faqs />
      <Footer />
      <Script
        src="//code.tidio.co/szdsrojx0byvwz4djqquuhungr9vcplb.js"
        async
      ></Script>
    </div>
  );
};

export default HomePage;
