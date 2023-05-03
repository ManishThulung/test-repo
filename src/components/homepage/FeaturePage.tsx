import React from "react";

import {
  Sisyphus,
  Quotient,
  Polymath,
  Nietzsche,
  InterLock,
  Galileo,
  FingerPrint,
} from "@/assets";

import * as S from "./Styles";
import { FeaturesSlider } from "./FeaturesSlider";

const FeaturePage = () => {
  return (
    <div className="bg-[#101828] pt-[72px]">
      <div className="text-2xl leading-7 font-inter text-white  flex  justify-center mx-auto mb-8 ">
        Trusted by small and medium companies
      </div>
      <S.ContentWrapper>
        <S.SectionWrapper className="pt-9">
          <h6>Features</h6>
          <h3 className="max-w-[884px]">
            Communication system driven with a personal touch
          </h3>
        </S.SectionWrapper>
        <FeaturesSlider />
      </S.ContentWrapper>
    </div>
  );
};

export default FeaturePage;
