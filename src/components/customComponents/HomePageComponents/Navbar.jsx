"use client";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import { useRef, useState } from "react";
import Logo from "@/../public/logo.avif";
import { FaUserCircle } from "react-icons/fa";
import { TiArrowSortedDown } from "react-icons/ti";
import { SlCallIn } from "react-icons/sl";
import { usePathname } from "next/navigation";
import { IoIosMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

export default function Page() {
  const [isHidden, setIsHidden] = useState(false);
  const { scrollY } = useScroll();
  const lastYRef = useRef(0);
  const pathname = usePathname();

  useMotionValueEvent(scrollY, "change", (y) => {
    const difference = y - lastYRef.current;
    if (Math.abs(difference) > 50) {
      setIsHidden(difference > 0);

      lastYRef.current = y;
    }
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleToggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  function handleListClick() {
    setIsMenuOpen(false);
  }

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
        className="w-screen fixed top-0 left-0 z-50 h-24 bg-white font-montserrat font-semibold text-primary text-sm"
      >
        <nav className="max-w-7xl h-full w-screen mx-auto flex justify-between px-8 xl:px-0 xl:justify-evenly items-center overflow-hidden">
          <Link href="/">
            <Image
              priority
              src={Logo}
              alt="Company Logo"
              className="object-center object-cover"
              quality={80}
            />
          </Link>
          <ul className="list-none hidden xl:flex items-center space-x-7">
            <li>
              <Link
                href="/"
                className={`hover:text-secondary uppercase ${pathname === "/" && "text-secondary"}`}
              >
                home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`hover:text-secondary uppercase ${pathname.includes("about") && "text-secondary"}`}
              >
                about
                <TiArrowSortedDown className="ml-1 inline w-4 h-4 fill-gray-400" />
              </Link>
            </li>
            <li>
              <Link
                href="/contacts"
                className={`hover:text-secondary uppercase ${pathname.includes("contacts") && "text-secondary"}`}
              >
                contacts
              </Link>
            </li>
            <li>
              <Link
                href="/renter_login"
                className={`hover:text-secondary uppercase ${pathname.includes("renter_login") && "text-secondary"}`}
              >
                renter login
              </Link>
            </li>
            <li>
              <Link
                href="/host_login"
                className={`hover:text-secondary uppercase ${pathname.includes("host_login") && "text-secondary"}`}
              >
                host login
              </Link>
            </li>
          </ul>
          <div className="hidden lg:flex lg:-ml-[34rem] xl:m-0 items-center">
            <SlCallIn className="w-14 h-14 fill-secondary stroke-2 px-2 border-r border-r-gray-300" />
            <div className="flex flex-col px-2 justify-center items-start">
              <p className="capitalize text-xs">Call Us Today!</p>
              <p className="font-bold text-sm">+1 755 302 8549</p>
            </div>
          </div>
          <div className="flex xl:hidden items-center">
            <IoIosMenu
              className="w-8 h-8 text-black"
              onClick={handleToggleMenu}
            />
          </div>
        </nav>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="absolute top-0 left-0 h-screen overflow-hidden w-[60vw] md:w-[40vw] lg:w-[20vw] bg-white flex flex-col justify-start space-y-6 items-start py-6 sm:py-8 xl:hidden font-montserrat font-semibold text-sm text-primary z-50"
              initial={{ x: -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 0.25 }}
              exit={{ x: -250, opacity: 0 }}
            >
              <div className="self-end px-4 md:px-8">
                <IoMdClose
                  onClick={handleToggleMenu}
                  className="w-7 h-7 fill-black"
                />
              </div>
              <ul className="list-none flex flex-col items-start px-4 md:px-8 space-y-5">
                <li>
                  <Link
                    href="/"
                    className={`hover:text-secondary uppercase ${pathname === "/" && "text-secondary"}`}
                    onClick={handleListClick}
                  >
                    home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className={`hover:text-secondary uppercase ${pathname.includes("about") && "text-secondary"}`}
                    onClick={handleListClick}
                  >
                    about
                    <TiArrowSortedDown className="ml-1 inline w-4 h-4 fill-gray-400" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contacts"
                    className={`hover:text-secondary uppercase ${pathname.includes("contacts") && "text-secondary"}`}
                    onClick={handleListClick}
                  >
                    contacts
                  </Link>
                </li>
                <li>
                  <Link
                    href="/login"
                    className={`uppercase flex items-center ${pathname.includes("login") && "text-secondary"}`}
                    onClick={handleListClick}
                  >
                    <FaUserCircle className="inline w-4 h-4 mr-2" />
                    login
                  </Link>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
