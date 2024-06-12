"use client";
import React from "react";
import Image from "next/image";
import HeroBG from "@/../public/homepage/herobg.avif";

export default function page() {
  return (
    <>
      <div
        id="hero"
        className="min-h-[80vh] h-auto relative w-full overflow-hidden mt-24"
      >
        <div className="h-full w-full">
          <Image
            priority
            quality={90}
            fill={true}
            src={HeroBG}
            alt="Hero Image BG"
            className="object-cover bg-cover h-full relative"
          />
        </div>
        <div className="absolute top-1/3 lg:top-[45%] left-[40%] -translate-x-1/2 -translate-y-1/2 bg-[#141b22]/90 h-[100vh] w-60 md:w-80 lg:w-[32rem] -rotate-12 flex flex-col justify-center pt-16 lg:pt-10 xl:pt-16 items-center space-y-4">
          <h2 className="text-white font-montserrat font-medium xl:text-xl md:text-base text-sm uppercase rotate-12">
            luxury unleased
          </h2>
          <h1 className="text-white font-montserrat font-bold xl:text-7xl  md:text-5xl text-3xl uppercase rotate-12">
            MAZDA
          </h1>
          <h1 className="ml-8 text-white font-montserrat xl:text-7xl md:text-5xl text-3xl font-bold uppercase rotate-12">
            CX3&apos;19
          </h1>
          <p className="ml-3 text-white font-montserrat xl:text-6xl md:text-4xl text-2xl font-bold uppercase rotate-12">
            $50 <span className="font-medium xl:text-3xl text-xl">per day</span>
          </p>
          <div className="ml-3 text-white font-montserrat text-xl font-medium uppercase rotate-12 inline">
            <div className="h-2 w-12 bg-secondary "></div>rent now
          </div>
        </div>
      </div>
    </>
  );
}
