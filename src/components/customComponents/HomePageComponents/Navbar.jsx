"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useRef, useState } from "react";
import Logo from "@/../public/logo.avif";
import { FaUserCircle } from "react-icons/fa";
import { TiArrowSortedDown } from "react-icons/ti";
import { SlCallIn } from "react-icons/sl";

export default function Page() {
  const [isHidden, setIsHidden] = useState(false);
  const { scrollY } = useScroll();
  const lastYRef = useRef(0);

  useMotionValueEvent(scrollY, "change", (y) => {
    const difference = y - lastYRef.current;
    if (Math.abs(difference) > 50) {
      setIsHidden(difference > 0);

      lastYRef.current = y;
    }
  });

  return (
    <>
      <motion.div
        animate={isHidden ? "hidden" : "visible"}
        whileHover="visible"
        onFocusCapture={() => setIsHidden(false)}
        variants={{
          hidden: {
            y: "-100%",
          },
          visible: {
            y: "0%",
          },
        }}
        transition={{ duration: 0.2 }}
        id="navbar"
        className="w-full fixed top-0 z-50 bg-white h-24 font-montserrat font-semibold text-primary text-sm"
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
              <Link href="/about" className="hover:text-secondary uppercase">
                about
                <TiArrowSortedDown className="ml-1 inline w-4 h-4 fill-gray-400" />
              </Link>
            </li>
            <li>
              <Link
                href="/inventory"
                className="hover:text-secondary uppercase"
              >
                inventory
                <TiArrowSortedDown className="ml-1 inline w-4 h-4 fill-gray-400" />
              </Link>
            </li>
            <li>
              <Link href="/news" className="hover:text-secondary uppercase">
                news
                <TiArrowSortedDown className="ml-1 inline w-4 h-4 fill-gray-400" />
              </Link>
            </li>
            <li>
              <Link href="/contacts" className="hover:text-secondary uppercase">
                contacts
              </Link>
            </li>
            <li>
              <Link href="/login" className="uppercase flex items-center">
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
      </motion.div>
    </>
  );
}
