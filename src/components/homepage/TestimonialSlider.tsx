import React from "react";
import Testimonial from "./Testimonial";
import { CustomTestimonialSlider } from "./StylesSlider";
import { ContentWrapper, SectionWrapper } from "./Styles";
import { TESTIMONIALS } from "./constant";

export default function TestimonialSlider() {
  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 6000,
    cssEase: "ease-in",
  };
  return (
    <ContentWrapper className="py-[128px] pb-[178px]">
      <SectionWrapper>
        <h6>Testimonial</h6>
        <h3 className="max-w-[1062px] mx-auto text-[#101828]">
          Voices of Satisfaction: Testimonials from Happy Customers
        </h3>
        <CustomTestimonialSlider {...settings}>
          {TESTIMONIALS.map((data) => (
            <Testimonial key={data.name} data={data} />
          ))}
        </CustomTestimonialSlider>
      </SectionWrapper>
    </ContentWrapper>
  );
}
