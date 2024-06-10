"use client";
import React from "react";
import Image from "next/image";
import HeroBG from "@/../public/homepage/herobg.avif";

export default function page() {
  return (
    <>
      <div
        id="hero"
        className="min-h-[60vh] h-auto relative w-full overflow-hidden"
      >
        <Image
          src={HeroBG}
          alt="Hero Image BG"
          className="object-center object-fill relative overflow-hidden"
        />
        <div className="absolute top-1/2 left-[40%] -translate-x-1/2 -translate-y-1/2 bg-[#141b22]/90 h-[85vh] w-[32rem] -rotate-12 flex flex-col justify-start pt-36 items-center space-y-4">
          <h2 className="text-white font-montserrat font-medium text-xl uppercase rotate-12">
            luxury unleased
          </h2>
          <h1 className="text-white font-montserrat font-bold text-7xl uppercase rotate-12">
            MAZDA
          </h1>
          <h1 className="ml-8 text-white font-montserrat text-7xl font-bold uppercase rotate-12">
            CX3&apos;19
          </h1>
          <p className="ml-3 text-white font-montserrat text-6xl font-bold uppercase rotate-12">
            $50 <span className="font-medium text-3xl">per day</span>
          </p>
          <div className="ml-3 text-white font-montserrat text-xl font-medium uppercase rotate-12 inline">
            <div className="h-2 w-12 bg-secondary "></div>rent now
          </div>
        </div>
      </div>
    </>
  );
}
