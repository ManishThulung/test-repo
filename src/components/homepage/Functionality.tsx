import Image from "next/image";

import * as S from "./Styles";
import { FUNCTIONALITIES } from "./constant";
import { useFunctionality } from "./useFunctionality";

const Functionality = () => {
  const { activeNavIndex, functionalityRefs } = useFunctionality();
  return (
    <S.ContentWrapper className="bg-[#101828] pt-[128px] ">
      <S.SectionWrapper>
        <h6>Functionality</h6>
        <h3 className="max-w-[884px]">
          Discuss, Decide, And Move Ideas Forward
        </h3>

        <S.SliderNavigation className="sticky top-[80px] z-10">
          {FUNCTIONALITIES.map((functionality, index) => (
            <a
              key={functionality.id}
              href={`#${functionality.id}`}
              className={index === activeNavIndex ? "active" : ""}
            >
              {functionality.title}
            </a>
          ))}
        </S.SliderNavigation>
        <div className="flex gap-3.5 justify-between min-[1920px]:-mt-[100px]">
          <div className="w-full xl:w-[628px]">
            {FUNCTIONALITIES.map((functionality, index) => {
              return (
                <S.SectionWrapper
                  key={functionality.id}
                  ref={functionalityRefs[index] as any}
                  id={functionality.id}
                  className={`flex flex-col justify-center h-[78vh] ${
                    index === FUNCTIONALITIES.length - 1 ? "mb-[280px]" : ""
                  }`}
                >
                  <h6 className="mx-0 mr-auto text-base leading-6">
                    {functionality.title}
                  </h6>
                  <h3 className="text-left text-5xl leading-[60px] font-semibold">
                    {functionality.subtitle}
                  </h3>
                  <div className="text-2xl leading-[32px] text-white">
                    {functionality.description}
                  </div>
                </S.SectionWrapper>
              );
            })}
          </div>
          <div className="w-full xl:w-[647px] h-screen flex flex-col justify-center sticky top-0">
            {FUNCTIONALITIES.map((functionality, index) => (
              <div key={functionality.id} className="w-fit h-fit absolute">
                <Image
                  src={`/images/${functionality.img}`}
                  alt={functionality.title}
                  width={647}
                  height={591}
                  style={{
                    opacity: index === activeNavIndex ? 1 : 0,
                    width: "auto",
                    height: "auto",
                    transition: "all 0.3s ease-in-out",
                  }}
                  unoptimized
                />
              </div>
            ))}
          </div>
        </div>
      </S.SectionWrapper>
    </S.ContentWrapper>
  );
};

export default Functionality;
