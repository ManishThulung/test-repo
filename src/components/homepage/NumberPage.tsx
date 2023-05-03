import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import styled from "styled-components";
import { RiSearchLine } from "react-icons/ri";

import Button from "@/components/Button";
import {
  ContentWrapper,
  CountryInput,
  RoundBoxShadow,
  SectionWrapper,
} from "./Styles";
import CallSVG from "@/assets/CallSVG";
import MmsSVG from "@/assets/MmsSVG";
import SmsSVG from "@/assets/SmsSVG";
import FaxSVG from "@/assets/FaxSVG";
import { SORTED_COUNTRIES } from "@/utils/countries";
import { Input, Select } from "antd";
import Image from "next/image";
import IconNumberFooter from "@/assets/IconNumberFooter";

const SPhoneInput = styled(PhoneInput)`
  background: white;
  &.PhoneInput {
    border: 1px solid #d0d5dd;
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    border-radius: 8px;
    padding: 10px 14px;
    height: 44px;
    &.PhoneInput--focus {
      .PhoneInputInput {
        border: none !important;
        outline: none !important;
      }
    }
    .PhoneInputInput {
      margin-left: 12px;
    }
    .PhoneInputCountry {
      display: flex;
      gap: 4px;
    }
    .PhoneInputCountrySelectArrow {
      width: 10px;
      height: 10px;
    }
  }
`;

const loaderProp = ({ src }: any) => {
  return src;
};

export const NumberDetail = () => (
  <div className=" bg-white flex gap-2 p-4 rounded-lg">
    <div className="flex gap-3 items-center">
      <RoundBoxShadow>
        <SmsSVG width="20" height="20" />
      </RoundBoxShadow>

      <div>
        <p className="text-gray-700 font-medium text-base mb-1">
          +1 123456 789
        </p>
        <div className="flex gap-3">
          <CallSVG height="12" width="12" />
          <MmsSVG height="12" width="12" />
          <SmsSVG height="12" width="12" />
          <FaxSVG height="12" width="12" />
        </div>
      </div>
    </div>
    <div className="flex flex-col justify-between">
      <p className="text-right text-gray-500 text-sm font-medium">$45.99</p>
      <p className="text-right text-[#F79009] text-xs font-normal">
        + Subscription fee
      </p>
    </div>
  </div>
);

const NumberPage = () => {
  const [countryCode, setCountryCode] = useState("US");
  const [numberType, setNumberType] = useState("");
  const [loading, setLoading] = useState(false);
  const [filteredCountries, setFilteredCountries] = useState(SORTED_COUNTRIES);

  const OnCountrySearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchedCountryName = e.target.value.toLowerCase();
    setFilteredCountries(
      SORTED_COUNTRIES.filter((country) =>
        country.name.toLowerCase().includes(searchedCountryName)
      )
    );
  };
  const handleCountryChange = (value: any) => {
    setCountryCode(value);
  };
  const handleNumberType = (e: any) => {
    setNumberType(e.target.value);
  };

  // const endpoint = `http://65.0.81.116:8001/public/phone-number/available?countryCode=${countryCode}&availablePhoneNumberCountryContext=${numberType}&pageSize=1&limit=10`;
  const endpoint =
    "http://65.0.81.116:8001/public/phone-number/available?countryCode=US&availablePhoneNumberCountryContext=local&pageSize=1&limit=10";

  const handleNumberSearch = async () => {
    setLoading(true);
    try {
      const res = await fetch(endpoint);
      const data = await res.json();
      setLoading(false);
      console.log("response", data);
    } catch (err) {
      console.log("error", err);
      setLoading(false);
    }
  };

  return (
    <ContentWrapper className="py-[128px] bg-[#F5F5FF]">
      <SectionWrapper>
        <h6>Number</h6>
        <h3 className="text-[#101828]">Search Your Virtual Number?</h3>
      </SectionWrapper>
      <div className="mb-8 flex flex-col items-center lg:flex-row  lg:justify-center gap-5 lg:gap-8">
        <CountryInput
          getPopupContainer={(triggerNode: any) => triggerNode}
          onChange={handleCountryChange}
          placeholder="Select a country"
          className="w-80"
          dropdownRender={(menu) => (
            <>
              <Input
                placeholder="Search country"
                onChange={OnCountrySearch}
                prefix={<RiSearchLine size={20} color="#596579" />}
              />
              {menu}
            </>
          )}
          optionLabelProp="children"
        >
          {filteredCountries.map((country) => {
            return (
              <Select.Option
                className="flex gap-1 justify-center items-center hover:outline-none border-none"
                key={country?.uid}
                value={country?.dialingCode}
              >
                <Image
                  src={`${country?.flagUrl}`}
                  alt="flag"
                  height={20}
                  width={20}
                  loader={loaderProp}
                  className="my-auto rounded-full object-cover max-w-5 h-5 flex-shrink-0"
                  style={{ width: "20px", height: "20px" }}
                  unoptimized
                />

                {`${country.name} (${country.dialingCode})`}
              </Select.Option>
            );
          })}
        </CountryInput>

        <select
          id="countries"
          className="bg-white border border-gray-300  text-sm rounded-lg focus:ring-blue-500  block w-80  p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"
          onChange={handleNumberType}
          value={numberType}
          placeholder="Select a number type"
        >
          <option value="local">Local</option>
          <option value="mobile">Mobile</option>
          <option value="tollFree">Toll Free</option>
        </select>
        <Button
          className="w-[183px] h-[44px] rounded-lg bg-[#5964FF]"
          onClick={handleNumberSearch}
        >
          Search
        </Button>
      </div>
      {loading ? (
        <div className="text-center">Loading...</div>
      ) : (
        <div>
          <div className="flex justify-between w-full mb-8">
            <p className="text-[#344054] font-semibold text-xl">
              Select Number
            </p>
            <div className="flex justify-center gap-5">
              <div className="flex items-center justify-center gap-1">
                <CallSVG />
                <p className="text-[#667085] text-base font-medium">Voice</p>
              </div>
              <div className="flex items-center justify-center gap-1">
                <SmsSVG />
                <p className="text-[#667085] text-base font-medium">SMS</p>
              </div>
              <div className="flex items-center justify-center gap-1">
                <MmsSVG />
                <p className="text-[#667085] text-base font-medium">MMS</p>
              </div>
              <div className="flex items-center justify-center gap-1">
                <FaxSVG />
                <p className="text-[#667085] text-base font-medium">Fax</p>
              </div>
            </div>
          </div>
          <div className="w-full flex gap-6 flex-wrap justify-between">
            <NumberDetail />
            <NumberDetail />
            <NumberDetail />
            <NumberDetail />
            <NumberDetail />
            <NumberDetail />
            <NumberDetail />
            <NumberDetail />
          </div>
          <div className="mt-8 w-full flex justify-between">
            <div className="flex gap-2">
              <IconNumberFooter />
              <p className="text-[#F79009] text-xs font-semibold">
                Some numbers may required proof of ID and address registration
                according to local laws.
              </p>
            </div>
            <Button className="w-[200px] h-11 bg-[#5964FF] rounded-lg">
              Purchase
            </Button>
          </div>
        </div>
      )}
    </ContentWrapper>
  );
};

export default NumberPage;
