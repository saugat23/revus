"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "@/../public/logo.avif";
import { FaUserCircle } from "react-icons/fa";
import { TiArrowSortedDown } from "react-icons/ti";
import { SlCallIn } from "react-icons/sl";

export default function Page() {
  return (
    <>
      <header
        id="navbar"
        className="w-full bg-white h-24 font-montserrat font-semibold text-primary text-sm"
      >
        <nav className="max-w-7xl h-full mx-auto flex justify-evenly items-center">
          <Link href="/">
            <Image
              priority
              src={Logo}
              alt="Company Logo"
              className="object-center object-cover"
              quality={80}
            />
          </Link>
          <ul className="list-none flex items-center space-x-5">
            <li>
              <Link href="/" className="hover:text-secondary uppercase">
                home
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-secondary uppercase">
                about
                <TiArrowSortedDown className="ml-1 inline w-4 h-4 fill-gray-400" />
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-secondary uppercase">
                inventory
                <TiArrowSortedDown className="ml-1 inline w-4 h-4 fill-gray-400" />
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-secondary uppercase">
                news
                <TiArrowSortedDown className="ml-1 inline w-4 h-4 fill-gray-400" />
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-secondary uppercase">
                contacts
              </Link>
            </li>
            <li>
              <Link href="/" className="uppercase flex items-center">
                <FaUserCircle className="inline w-4 h-4 mr-2" />
                login
              </Link>
            </li>
          </ul>
          <div className="flex items-center">
            <SlCallIn className="w-14 h-14 fill-secondary stroke-2 px-2 border-r border-r-gray-300" />
            <div className="flex flex-col px-2 justify-center items-start">
              <p className="capitalize text-xs">Call Us Today!</p>
              <p className="font-bold text-sm">+1 755 302 8549</p>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
