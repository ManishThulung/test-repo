import React from "react";
import Image from "next/image";
import { ContentWrapper, SectionWrapper } from "./Styles";

const WhyCalilio = () => {
  return (
    <ContentWrapper className="pt-[128px] pb-[277px] bg-[#F5F5FF]">
      <SectionWrapper>
        <h6>Why Calilio</h6>
        <h3 className="text-[#101828] mb-[123px]">
          Discuss, Decide, And Move
          <br /> Ideas Forward
        </h3>
        <div className="flex flex-col gap-8  md:flex-row justify-between lg:gap-[138px]">
          <div>
            <Image
              src="/images/woman-on-call.png"
              alt="calilioimage"
              width={628}
              height={572}
              priority
              style={{ width: "auto", height: "auto" }}
              unoptimized
            />
          </div>
          <div>
            <div className="text-3xl font-bold  lg:text-5xl  mb-8">
              Always feel better <br />
              after a call
            </div>
            <div className="lg:text-2xl">
              Calilio delivers crystal clear calls and make <br />
              awesome world class solutions to your <br />
              deliema
            </div>
          </div>
        </div>
      </SectionWrapper>
    </ContentWrapper>
  );
};

export default WhyCalilio;
