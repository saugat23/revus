"use client";

import Image from "next/image";
import React from "react";
import { ImQuotesLeft } from "react-icons/im";

export default function Page({ color, testimonial, name, imgSrc }) {
  return (
    <>
      <div className="h-auto w-auto flex flex-col justify-center items-center space-y-7">
        <div
          className={`py-8 px-6 font-kumbhsans ${color === "#34404e" ? "text-white" : "text-primary"} font-medium text-sm`}
          style={{ backgroundColor: color }}
        >
          {testimonial}
        </div>
        <ImQuotesLeft className="fill-white w-8 h-8" />
        <div className="w-full bg-transparent flex justify-center items-center space-x-4 text-white">
          <div className="flex flex-col justify-center space-y-2">
            <h2 className="font-montserrat font-semibold text-sm">{name}</h2>
            <p className="font-montserrat font-normal text-xs">CUSTOMER</p>
          </div>
          <div className="overflow-hidden h-full rounded-full">
            <Image
              src={imgSrc}
              alt="Customer Image"
              className="object-center object-cover h-16 w-auto"
              priority
            />
          </div>
        </div>
      </div>
    </>
  );
}
