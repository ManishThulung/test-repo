import React from "react";
import Image from "next/image";
import styled from "styled-components";
import { AiOutlineArrowRight, AiFillPlayCircle } from "react-icons/ai";

import { ContentWrapper } from "./Styles";
import Button from "@/components/Button";
import Navbar from "@/components/Navbar";

import cal from "../../../public/images/calilio.gif";

const Wrapper = styled.div`
  background: linear-gradient(
      180deg,
      rgba(206, 157, 255, 0.73) -24.75%,
      rgba(206, 157, 255, 0.996875) -24.74%,
      rgba(199, 170, 244, 0.71) 38.22%,
      rgba(199, 170, 244, 0.32) 52.63%,
      rgba(255, 255, 255, 0) 73.66%
    ),
    #f5f5ff;
`;

const HeroSection = () => {
  return (
    <>
      <Navbar />
      <Wrapper className="pt-[120px] mt-[-128px] pb-[128px]">
        <ContentWrapper>
          <div className="mt-10 flex items-center justify-between gap-[74px]">
            <div>
              <div>
                <h1 className="text-7xl font-bold tracking-tight leading-[90px]">
                  Improve the
                  <br />
                  way
                  <span className="inline-block leading-[90px] border-b-8 border-solid border-[#5964FF] font-inter text-[#5964FF] text-7xl font-bold tracking-tight">
                    you&apos;re calling
                  </span>
                  , <br /> with one click
                </h1>
                <h3 className="text-2xl w-[554px] pt-8 pb-[72px]">
                  Calilio offers businesses a flexible and scalable
                  communication solution that can adapt to their evolving needs.
                </h3>
              </div>

              <div className="flex gap-6 h-[54px]">
                <Button
                  type="primary"
                  className="flex items-center gap-3 rounded-lg"
                >
                  Get Started <AiOutlineArrowRight />
                </Button>
                <Button
                  type="primary"
                  className="rounded-lg flex items-center gap-3"
                >
                  <AiFillPlayCircle size={20} /> Schedule Free Demo
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src={cal}
                alt="Banner"
                width="560"
                height="640"
                className="rounded-md"
                unoptimized={true}
                priority
                style={{ width: "600px", height: "400px" }}
              />

              {/* <div className="absolute bottom-[-75px] right-[-95px] hidden xl:block">
                <div className="w-[193px] h-[319px] bg-[#D9D9D9] rounded-[20px] mt-[280px] -ml-[160px]"></div>
                <div className="w-[322px] h-[151px] bg-[#D9D9D9] rounded-[20px] mt-[40px] -ml-[500px]"></div> */}
              {/* <Image
            src="/images/blankvertical.png"
            alt="blankvertical"
            width={193}
            height={350}
            className="rounded-3xl mt-[231px] ml-[-100px] h-[325px] w-[300px]"
          /> */}

              {/* <Image
            src="/images/image-5.png"
            alt="blankvertical"
            width={322}
            height={193}
            className="rounded-3xl  w-[340px] h-[170px] ml-[-510px] absolute mt-[80px]"
          /> */}
              {/* </div> */}
            </div>
          </div>
        </ContentWrapper>
      </Wrapper>
    </>
  );
};

export default HeroSection;
