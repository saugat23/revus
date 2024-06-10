"use client";

import Image from "next/image";
import React from "react";
import { FaGasPump } from "react-icons/fa6";
import { LuCalendarDays } from "react-icons/lu";
import { LuGauge } from "react-icons/lu";

export default function Page({ imgSrc, model, make, range, type, price }) {
  return (
    <>
      <div className="h-auto w-auto flex flex-col justify-center items-center space-y-6 pb-6 bg-white font-bold text-primary text-base relative carlisting">
        <div className="h-[80%] mt-0 w-full">
          <Image
            src={imgSrc}
            alt={model}
            priority
            quality={90}
            className="object-center object-fill"
          />
        </div>
        <div className="hidden absolute top-2 left-4 w-auto h-auto px-4 py-3 bg-secondary text-white pricing-container">
          ${price}/day
        </div>
        <h1 className="w-full text-center border-b border-gray-300">{model}</h1>
        <div className="w-full flex justify-evenly items-center font-montserrat font-normal text-xs">
          <div className="flex items-center">
            <LuCalendarDays className="inline w-4 h-4 mr-1" />
            {make}
          </div>
          <div className="flex items-center">
            <LuGauge className="inline w-4 h-4 mr-1" />
            {range}
          </div>
          <div className="flex items-center">
            <FaGasPump className="inline w-4 h-4 mr-1" />
            {type}
          </div>
        </div>
      </div>
    </>
  );
}
