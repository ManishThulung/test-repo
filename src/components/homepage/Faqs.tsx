import React, { useState } from "react";
import { DownArrow } from "@/assets";
import { ContentWrapper, FaqWrapper, SectionWrapper } from "./Styles";

const Faqs = () => {
  const [faqItems, setFaqItems] = useState([
    {
      question: "Are virtual phone numbers “real” telephone number?",
      answer:
        "Yes, virtual number are real telephone numbers that can be used to make and receive phone calls. However, the major difference between a virtual number and regular numbers is that the former is not linked to any specific device or location.",
    },
    {
      question: "Can I have multiple virtual phone numbers?",
      answer: "Yes, you can have multiple virtual phone numbers.",
    },
    {
      question: "Can I have multiple virtual phone numbers?",
      answer: "Yes, you can have multiple virtual phone numbers.",
    },
  ]);

  const [isOpenList, setIsOpenList] = useState(
    new Array(faqItems.length).fill(false)
  );

  const handleClick = (index: number) => {
    setIsOpenList((prev) => {
      const newList = [...prev];
      newList[index] = !newList[index];
      return newList;
    });
  };

  return (
    <ContentWrapper className="py-[128px] bg-[#F5F5FF]">
      <SectionWrapper className=" flex flex-col justify-center items-center">
        <h6>FAQS</h6>
        <h3 className="text-[#101828] mb-[72px]">
          Frequently Asked <br />
          Questions
        </h3>
        <FaqWrapper>
          {faqItems.map((item, index) => {
            return (
              <div key={index} onClick={() => handleClick(index)}>
                <div className="question">
                  {item.question}
                  <div className="cursor-pointer">
                    <DownArrow />
                  </div>
                </div>
                <p
                  className={`text-sm text-justify ${
                    isOpenList[index] ? "block" : "hidden"
                  }`}
                >
                  {item.answer}
                </p>
              </div>
            );
          })}
        </FaqWrapper>
      </SectionWrapper>
    </ContentWrapper>
  );
};

export default Faqs;
