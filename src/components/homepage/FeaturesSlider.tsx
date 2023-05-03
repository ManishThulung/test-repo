import React from "react";

import { SectionWrapper } from "./Styles";
import { CustomSlider } from "./StylesSlider";

const features = [
  {
    name: "Calls",
    img: "calls.png",
  },
  {
    name: "SMS",
    img: "callbox.png",
  },
  {
    name: "Number Sharing",
    img: "woman-on-call.png",
  },
  {
    name: "IVR",
    img: "callbox.png",
  },
  {
    name: "Call On Hold",
    img: "calls.png",
  },
  {
    name: "Call Transfer",
    img: "woman-on-call.png",
  },
  {
    name: "Call Recording",
    img: "calls.png",
  },
  {
    name: "Voicemail",
    img: "callbox.png",
  },
];

export const FeaturesSlider = () => {
  const settings = {
    centerMode: true,
    slidesToShow: 1,
    speed: 500,
    dots: true,
    customPaging: (i: number) => <div>{features[i].name}</div>,
    arrows: false,
    variableWidth: true,
    infinite: false,
  };
  return (
    <SectionWrapper className="max-w-full">
      <CustomSlider {...settings}>
        {features.map((feature) => (
          <div key={feature.name}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`/images/${feature.img}`} alt={feature.name} />
          </div>
        ))}
      </CustomSlider>
    </SectionWrapper>
  );
};
