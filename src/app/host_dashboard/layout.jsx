"use client";
import React from "react";
import Link from "next/link";
import dashboard_items from "./dashboard_items";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Toaster } from "sonner";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { IoIosMenu } from "react-icons/io";
import { PiHandWavingFill } from "react-icons/pi";
import withAuthHost from "@/app/withAuthHost";
import { FaArrowRight } from "react-icons/fa";
import { IoNotificationsOutline } from "react-icons/io5";
import { BiUserCircle } from "react-icons/bi";

const Layout = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname();
  const items = dashboard_items;
  const today = new Date();

  function handleLogout() {
    let currentDate = new Date();
    currentDate.setDate(currentDate.getDate() - 1);
    let yesterday = currentDate;

    Cookies.set("token_loginhost", "", { expires: yesterday });
    router.push("/host_login");
  }

  return (
    <>
      <Toaster expand={true} richColors position="top-right" />
      <div className="flex justify-stretch">
        <div className="hidden min-w-[15%] w-[15%] shrink-0 md:fixed lg:py-6 shadow-2xl min-h-screen h-screen bg-[#1A1919] z-40 py-4 md:flex flex-col justify-between items-start">
          <div className="w-full">
            <div className="xs:py-2 xl:py-4">
              <div className="flex flex-col justify-center items-center hover:scale-105 hover:transition-all font-bold text-white xl:text-lg text-base font-montserrat">
                CAR RENTAL
              </div>
            </div>
            <div className="w-full">
              <ul className="w-full flex flex-col justify-center items-start px-3">
                {items.map((item, key) => {
                  return (
                    <li
                      key={key}
                      className={`w-full flex justify-start items-center md:px-2 hover:bg-[#006AFF] rounded-xl text-white my-[2px] ${pathname.includes(item.link) && "bg-[#006AFF]"
                        }`}
                    >
                      <Link
                        href={item.link}
                        className="flex justify-start items-center space-x-2 w-full h-full py-4"
                      >
                        <span className="inline-block">{item.icon}</span>{" "}
                        <span className="font-poppins font-medium text-base">
                          {item.title}
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="w-full flex justify-center items-center px-3">
            <button
              onClick={handleLogout}
              className="py-3 w-full rounded-lg bg-[#474747] text-white text-center font-semibold font-montserrat group"
            >
              Logout{" "}
              <span className="ml-1">
                <FaArrowRight className="w-4 h-4 fill-white hidden group-hover:inline transition-all duration-400 ease-in-out" />
              </span>
            </button>
          </div>
        </div>

        <div className="min-w-[85%] w-full md:w-[85%] bg-[#FAFAFA] fixed ml-[15%] h-[10vh]">
          <div className="flex justify-between w-full px-4 py-6 shadow-custom bg-white">
            <div className="flex flex-col justify-center items-start">
              <h3 className="font-montserrat font-semibold text-primary text-base lg:text-lg xl:text-xl">
                Welcome{" "}
                <PiHandWavingFill className="inline h-7 w-7 fill-yellow-600" />
              </h3>
            </div>
            <div className="flex justify-center items-center space-x-3">
              <p className="text-gray-400 text-xs lg:text-sm">
                {today.toDateString()}
              </p>
              <IoNotificationsOutline className="p-1 w-7 h-7 bg-gray-100 rounded-full" />
              <BiUserCircle className="w-6 h-6 fill-gray-600" />
              <select className="bg-transparent p-2 outline-none font-semibold text-xs lg:text-sm">
                <option value="Tom David">Tom David</option>
                <option value="David Tom">David Tom</option>
              </select>
            </div>
          </div>
        </div>
        <div className="w-full bg-white mt-[10vh] ml-[15vw]">{children}</div>
      </div>
    </>
  );
};

export default withAuthHost(Layout);
