import React from "react";
import Image from "next/image";

import { Star } from "@/assets";

interface TestimonialProps {
  profilePicture: string;
  name: string;
  designation: string;
  description: string;
}

const Testimonial = ({ data }: { data: TestimonialProps }) => {
  const { profilePicture, name, designation, description } = data;
  return (
    <div>
      <div className="max-w-[1024px] mx-auto text-2xl font-medium lg:text-2xl  leading-8 text-center">
        {description}
      </div>
      <div className="flex flex-col mt-8 gap-5 items-center">
        <Image
          src={`/${profilePicture}`}
          alt="testimonial image "
          height={64}
          width={64}
        />
        <div className="text-lg font-semibold leading-7">{name}</div>
        <div className="font-base leading-6">{designation}</div>
        <div className="flex gap-2">
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
