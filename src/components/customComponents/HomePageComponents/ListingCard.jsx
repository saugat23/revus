"use client";

import React from "react";
import CountUp from "react-countup";
import { MdOutlineArrowDropDown } from "react-icons/md";

export default function Page({ title, end, suffix }) {
  return (
    <>
      <div className="bg-[#f1f5fa] relative w-full lg:w-auto">
        <div className="p-12 flex flex-col justify-center items-center space-y-4">
          <h2 className="font-montserrat font-semibold uppercase text-sm text-primary">
            {title}
          </h2>
          <CountUp
            start={0}
            end={end}
            duration={2.75}
            separator=""
            suffix={suffix ? `${suffix}` : ""}
            enableScrollSpy={true}
            className="font-montserrat font-bold text-base"
          />
        </div>
        <MdOutlineArrowDropDown className="absolute bottom-0 left-0 inline fill-black rotate-45 h-8 w-8 z-30" />
      </div>
    </>
  );
}
