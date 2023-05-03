import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { SORTED_COUNTRIES } from "@/utils/countries";
import {
  FacebookLogo,
  TwitterLogo,
  InstagramLogo,
  LinkedinLogo,
  CalilioWhiteLogo,
} from "@/assets";

import { ContentWrapper, SectionWrapper } from "./Styles";

import Button from "@/components/Button";

const Wrapper = styled(ContentWrapper)`
  background-color: #f5f5ff;
  background-image: url("images/footer-curve.png");
  background-position: top;
  background-size: cover;
`;

const loaderProp = ({ src }: any) => {
  return src;
};

const Footer = () => {
  return (
    <Wrapper className="pt-[240px] pb-10">
      <div>
        <h3 className="max-w-[1062px] mx-auto mb-8 text-white text-2xl font-bold leading-[72px]  md:text-4xl lg:text-6xl -tracking-[0.02em]  text-center">
          Empowering Businesses with Seamless Communication
        </h3>
        <div className="max-w-[628px] mx-auto text-white md:text-2xl lg:text-2xl  leading-8 text-center">
          Join thousand of businesses already using Calilio to communicate
          better with their cusotmers
        </div>
        {/* <div className='flex flex-col items-center gap-[20px] p-10  md:flex-row md:text-base md:gap-20 lg:flex-row  justify-center lg:text-base lg:gap-20'> */}

        <Link
          href="http://ui.staging.calilio.com/"
          className="mt-[72px] mx-auto block w-fit"
        >
          <Button
            type="primary"
            className=" h-[48px] w-[150px] rounded-lg flex items-center gap-3"
          >
            Get Started <AiOutlineArrowRight />
          </Button>
        </Link>
      </div>
      <SectionWrapper className="pt-[128px]">
        <h6>International Number</h6>
        <h3 className="mb-[72px]">Get International Numbers</h3>

        <div className="text-white grid grid-cols-2 lg:grid-cols-4 gap-4 xl:gap-x-12">
          {SORTED_COUNTRIES.map((country) => (
            <div
              key={country.uid}
              className="2xl:w-[284px]text-white flex gap-2"
            >
              <Image
                src={`${country?.flagUrl}`}
                alt={country?.name}
                height={24}
                width={24}
                loader={loaderProp}
                className="rounded-full h-6 w-6"
                unoptimized
              />
              <p className="text-sm font-medium">{country?.name}</p>
            </div>
          ))}
        </div>

        <div className="mt-[128px] text-center flex flex-wrap flex-col gap-10 md:flex-row sm:text-start md:text-base lg:justify-between">
          <div>
            <div className="text-white font-semibold text-2xl mb-4">
              Company
            </div>

            <ul className="flex flex-col gap-2 text-white text-base">
              <li>About</li>
              <li>Press</li>
              <li>Careers</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div>
            <div className="text-white font-semibold text-2xl mb-4">
              Solutions
            </div>

            <ul className="flex flex-col gap-2 text-white text-base">
              <li>Cloud Technology</li>
              <li>Call Center Software</li>
              <li>Contact Center Software</li>
              <li>Sales Dialer</li>
              <li>Sales Automation</li>
              <li>CRM PhoneSystem</li>
              <li>Capture Leads on Website</li>
              <li>Sales Calls from Website</li>
            </ul>
          </div>

          <div>
            <div className="text-white font-semibold text-2xl mb-4">
              Features
            </div>

            <ul className="flex flex-col gap-2 text-white text-base">
              <li>Call Queing</li>
              <li>Call PBX</li>
              <li>Online Phone number</li>
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
              <li>Fair Use Policy</li>
            </ul>
          </div>

          <div>
            <div className="text-white font-semibold text-2xl mb-4">
              Resources
            </div>

            <ul className="text-white text-base">
              <li>Partnership</li>
              <li>System Status</li>
              <li>What&apos;s New</li>
              <li>Downloads</li>
              <li>Demo</li>
              <li>Tutorial</li>
              <li>Help Center</li>
            </ul>
          </div>

          <div>
            <div className="text-white font-semibold text-2xl mb-4">
              Compare
            </div>

            <ul className="text-white text-base">
              <li>vs Ringcentral</li>
              <li>vs Callhippo</li>
              <li>vs penphone</li>
              <li>vs TalkDesk</li>
              <li>vs CloudTalk</li>
              <li>vs JustCall</li>
            </ul>
          </div>
        </div>

        <div className="my-8 flex items-center flex-col gap-4 md:flex-row md:justify-between">
          <div className="flex gap-5">
            <FacebookLogo />
            <TwitterLogo />
            <InstagramLogo />
            <LinkedinLogo />
          </div>
          <div className="flex lg:mt-[-6px]">
            <CalilioWhiteLogo />
          </div>
        </div>
        <div className="flex flex-col flex-start text-center md:text-start md:flex-row md:justify-between">
          <ul className="text-white gap-[38px] text-sm lg:flex">
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
            <li>GDRP</li>
            <li>3rd Party Service</li>
            <li>Service-level Agreement</li>
            <li>Data Security</li>
          </ul>
          <div className="text-white">@ Calilio 2023</div>
        </div>
      </SectionWrapper>
    </Wrapper>
  );
};

export default Footer;
