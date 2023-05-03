import React from "react";
import Image from "next/image";

import { ContentWrapper, SectionWrapper } from "./Styles";
import Button from "@/components/Button";

const Integration = () => {
  return (
    <ContentWrapper className="py-[128px]">
      <SectionWrapper className="max-w-[1443px]">
        <h6>Integration</h6>
        <h3 className="text-[#101828]">Will It Work With Other Tool?</h3>
        <div className="max-w-[514px]  mx-auto text-center font-medium text-2xl  leading-8">
          Calilio connects to your favorite tools to help sync contacts, track
          conversations, and analyze calls.
        </div>
        <div className="flex justify-center mt-[-20px] xl:mt-[-120px] 2xl:mt-[-167px] w-full">
          <Image
            src="/integration-image.svg"
            alt="integration image"
            height={491}
            width={1440}
          />
        </div>
        <Button
          type="primary"
          className="mx-auto w-[189px] h-11 rounded-lg block"
        >
          See All Integrations
        </Button>
      </SectionWrapper>
    </ContentWrapper>
  );
};

export default Integration;
