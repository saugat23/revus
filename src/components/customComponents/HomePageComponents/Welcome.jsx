"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { DateRangePicker } from "rsuite";
import WelcomeSVG1 from "@/../public/svgs/1.svg";
import WelcomeSVG2 from "@/../public/svgs/2.svg";
import WelcomeSVG3 from "@/../public/svgs/3.svg";
import WelcomeBG from "@/../public/homepage/welcomebg.avif";

export default function Page() {
  return (
    <>
      <section className="h-auto w-full bg-white">
        <div className="flex flex-col h-full max-w-6xl px-3 mx-auto">
          <form className="-mt-24 h-auto w-full px-6 py-12 shadow-xl bg-white border-b-2 border-black flex flex-col lg:flex-row justify-center items-center space-y-3 space-x-0 lg:space-y-0 lg:space-x-2 z-40 font-montserrat text-sm font-semibold uppercase">
            <div className="lg:w-[28%] w-full flex flex-col justify-center items-start space-y-2">
              <label className="rent_date">
                <span className="text-gray-500">01 </span>
                WHEN
              </label>
              <DateRangePicker
                className="p-3 bg-[#f2f6f7] hover:bg-white hover:scale-y-105 hover:drop-shadow-lg transition-all ease w-full"
                appearance="subtle"
              />
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="400"
              className="w-full lg:w-[28%] flex flex-col justify-center items-start space-y-2"
            >
              <label className="rent_date">
                <span className="text-gray-500">02 </span>
                SELECT MAKE
              </label>
              <select className="px-3 py-5 bg-[#f2f6f7] hover:bg-white hover:scale-y-105 hover:drop-shadow-lg transition-all ease w-full">
                <option className="bg-white p-3" value="">
                  All Makes
                </option>
                <option className="bg-white p-3" value="audi">
                  Audi
                </option>
                <option className="bg-white p-3" value="bmw">
                  BMW
                </option>
                <option className="bg-white p-3" value="bentley">
                  Bentley
                </option>
                <option className="bg-white p-3" value="lamborghini">
                  Lamborghini
                </option>
              </select>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="400"
              className="w-full lg:w-[28%] flex flex-col justify-center items-start space-y-2"
            >
              <label className="rent_date">
                <span className="text-gray-500">03 </span>
                SELECT A MODEL
              </label>
              <select className="px-3 py-5 bg-[#f2f6f7] hover:bg-white hover:scale-y-105 hover:drop-shadow-lg transition-all ease w-full">
                <option className="bg-white p-3" value=""></option>
                <option className="bg-white p-3" value="a4">
                  A4
                </option>
                <option className="bg-whtie p-3" value="a5">
                  A5
                </option>
              </select>
            </div>
            <Button
              data-aos="fade-up"
              data-aos-duration="400"
              type="submit"
              className="self-end w-full lg:w-[16%] py-8 bg-secondary"
            >
              SEARCH
            </Button>
          </form>

          <div className="w-full h-full flex flex-col justify-end items-center mt-12">
            <div className="w-full flex flex-col lg:flex-row justify-between items-center space-y-5 lg:space-y-0">
              <div
                data-aos="fade-up"
                data-aos-duration="400"
                className="w-full lg:w-3/5 h-auto flex flex-col justify-center items-start space-y-6 font-semibold text-primary"
              >
                <p className="font-montserrat text-xs uppercase">
                  helps you to find your next car easily
                </p>
                <h1 className="font-montserrat font-bold xl:text-4xl md:text-2xl text-lg capitalize">
                  welcome to <span className="text-secondary">Revus</span>
                </h1>
                <p className="font-normal text-sm">
                  Winged, good, male fourth abundantly dominion second it tree
                  over thing that may tree. Signs fish made tree you days seas
                  heaven. Called seas, shall isn’t.
                </p>
                <div className="w-full flex flex-col lg:flex-row space-y-4 lg:space-y-0 justify-evenly items-center py-5 lg:py-0">
                  <div
                    data-aos="fade-right"
                    data-aos-duration="400"
                    className="flex flex-col items-center space-y-6"
                  >
                    <Image
                      src={WelcomeSVG1}
                      alt="Welcome SVG 1"
                      className="fill-primary"
                    />
                    <p className="text-sm">Fast & Easy Booking</p>
                  </div>
                  <div
                    data-aos="fade-right"
                    data-aos-duration="600"
                    className="flex flex-col items-center space-y-6"
                  >
                    <Image
                      src={WelcomeSVG2}
                      alt="Welcome SVG 2"
                      className="fill-primary"
                    />
                    <p className="text-sm">Many Pickup Locations</p>
                  </div>
                  <div
                    data-aos="fade-right"
                    data-aos-duration="800"
                    className="flex flex-col items-center space-y-6"
                  >
                    <Image
                      src={WelcomeSVG3}
                      alt="Welcome SVG 3"
                      className="fill-primary"
                    />
                    <p className="text-sm">No Booking Charges</p>
                  </div>
                </div>
              </div>
              <div className="hidden lg:block lg:w-2/5 h-auto">
                <Image
                  priority
                  src={WelcomeBG}
                  alt="Welcome BG"
                  className="object-center object-fill"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
