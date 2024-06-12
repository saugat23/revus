"use client";

import Image from "next/image";
import React from "react";
import AuthBG from "@/../public/authbg.jpeg";
import { FaKey, FaMobile, FaUser } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <section className="h-auto max-w-screen bg-white">
        <div className="flex flex-col justify-center space-y-4">
          <div className="h-80 w-full relative">
            <Image
              priority
              fill={true}
              src={AuthBG}
              alt="Auth Background"
              className="object-center object-cover relative"
            />
          </div>
          <form className="py-8 max-w-6xl w-full mx-auto px-3 flex flex-col justify-center items-start font-montserrat text-primary">
            <h1 className="font-bold xl:text-2xl md:text-xl text-base">
              Login
            </h1>
            <p className="font-medium text-sm mt-4">
              Please fill your information below
            </p>
            <div className="w-full relative mt-7">
              <FaMobile className="inline w-4 h-4 fill-gray-600 absolute top-1/2 left-5 -translate-x-1/2 -translate-y-1/2" />
              <input
                type="text"
                name="mobile"
                id="mobile"
                placeholder="Mobile"
                className="bg-gray-100 rounded-lg pl-10 pr-3 py-4 w-full h-full font-medium text-sm outline-none"
              />
            </div>
            <div className="w-full relative mt-4">
              <FaKey className="inline w-4 h-4 fill-gray-600 absolute top-1/2 left-5 -translate-x-1/2 -translate-y-1/2" />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="bg-gray-100 rounded-lg pl-10 pr-3 py-4 w-full h-full font-medium text-sm outline-none"
              />
            </div>
            <div className="w-full flex justify-center items-center mt-4">
              <button
                type="submit"
                className="py-3 px-20 rounded-lg font-semibold text-primary-foreground bg-[#006AFF] hover:bg-[#004099] transition-colors ease-in-out duration-300"
              >
                Login
              </button>
            </div>
            <div className="w-full flex justify-center items-center mt-4">
              <p className="text-primary text-xs font-medium">
                Don&apos;t have an account?{" "}
                <span>
                  <Link href="/user_signup" className="text-[#006AFF]">
                    Sign Up
                  </Link>
                </span>
              </p>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
