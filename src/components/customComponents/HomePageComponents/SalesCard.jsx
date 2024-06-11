"use client";

import Image from "next/image";
import React from "react";
import { FaYoutube, FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";
import { SlCallIn } from "react-icons/sl";

export default function Page({ imgSrc, name, position, number }) {
  return (
    <>
      <div className="h-auto w-auto flex flex-col justify-center items-center bg-primary text-primary-foreground hover:bg-secondary transition-colors duration-300 ease-in-out cursor-pointer relative group overflow-clip">
        <div className="h-[60%] w-full relative">
          <Image
            src={imgSrc}
            priority
            alt={name}
            className="object-center object-fill h-full"
          />
          <div className="absolute inset-0 bg-primary/70 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex justify-center items-center">
            <div className="w-full flex justify-around items-center">
              <FaTwitter className="inline w-8 h-8 p-2 bg-white fill-primary hover:fill-primary-foreground hover:bg-secondary transition-colors ease-in-out rounded-full" />
              <FaFacebookF className="inline w-8 h-8 p-2 bg-white fill-primary hover:fill-primary-foreground hover:bg-secondary transition-colors ease-in-out rounded-full" />
              <FaInstagram className="inline w-8 h-8 p-2 bg-white fill-primary hover:fill-primary-foreground hover:bg-secondary transition-colors ease-in-out rounded-full" />
              <FaYoutube className="inline w-8 h-8 p-2 bg-white fill-primary hover:fill-primary-foreground hover:bg-secondary transition-colors ease-in-out rounded-full" />
            </div>
          </div>
        </div>
        <div className="w-full h-[30%] bg-transparent py-6 flex flex-col justify-center items-start px-5 space-y-2">
          <h1 className="font-montserrat font-bold text-lg">{name}</h1>
          <h1 className="w-full flex justify-start font-medium items-center text-sm">
            {position}
          </h1>
        </div>
        <div className="h-[10%] bg-white p-4 border-b border-b-gray-400 w-full flex items-center justify-center space-x-2">
          <SlCallIn className="w-7 h-7 fill-secondary stroke-2 pr-2" />
          <p className="font-semibold text-sm text-primary group-hover:text-secondary">
            +{number}
          </p>
        </div>
      </div>
    </>
  );
}
