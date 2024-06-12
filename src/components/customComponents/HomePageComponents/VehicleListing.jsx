"use client";

import Image from "next/image";
import React from "react";
import { FaGasPump } from "react-icons/fa6";
import { LuCalendarDays } from "react-icons/lu";
import { LuGauge } from "react-icons/lu";
import { MdOutlineAccountTree } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Page({
  imgSrc,
  model,
  deposit,
  make,
  range,
  type,
  transimission,
  price,
}) {
  var color = "";
  if (deposit == 0) {
    color = "[#81d742]";
  } else if (deposit >= 10) {
    color = "[#dd9933]";
  } else {
    color = "[#EB1600]";
  }

  return (
    <>
      <motion.div
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 60 }}
        className="h-auto w-auto flex flex-col justify-center items-center bg-primary text-primary-foreground hover:bg-secondary transition-colors duration-300 ease-in-out cursor-pointer relative group"
      >
        <div className="h-3/4 w-full relative">
          <Image
            src={imgSrc}
            priority
            alt={model}
            className="object-center object-fill"
          />
          <div className="absolute inset-0 bg-primary/70 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex justify-center items-center">
            <button className="absolute top-2 right-2">
              <FaRegStar className="inline w-full h-full p-2 bg-white fill-primary hover:fill-primary-foreground hover:bg-secondary transition-colors ease-in-out" />
            </button>
            <button className="text-primary bg-white p-3 text-xs font-medium hover:bg-secondary hover:text-secondary-foreground transition-colors ease-in-out flex items-center space-x-2">
              <LuGauge className="inline w-4 h-4" />
              <span> Add to Compare</span>
            </button>
          </div>
        </div>
        <div className="w-full bg-transparent py-6 flex flex-col justify-center items-center space-y-5">
          <h1 className="font-montserrat font-bold text-lg">
            {deposit && (
              <span className="bg-[#81d742] p-2 font-semibold text-white">
                DEPOSIT
              </span>
            )}{" "}
            {model}
          </h1>
          <div className="w-full flex justify-around items-center font-montserrat text-xs pb-5 border-b border-b-gray-400">
            <div className="px-2 flex space-x-2 border-r border-r-gray-400">
              <LuCalendarDays className="w-4 h-4" />
              <p>{make}</p>
            </div>
            <div className="px-2 flex space-x-2 border-r border-r-gray-400">
              <LuGauge className="w-3 h-4" />
              <p>{range}</p>
            </div>
            <div className="px-2 flex space-x-2 border-r border-r-gray-400">
              <FaGasPump className="w-4 h-4" />
              <p>{type}</p>
            </div>
            <div className="px-2 flex space-x-2">
              <MdOutlineAccountTree className="w-4 h-4" />
              <p>{transimission}</p>
            </div>
          </div>
          <h1 className="w-full flex justify-center font-semibold items-center text-lg">
            ${price}/hour
          </h1>
        </div>
      </motion.div>
    </>
  );
}
