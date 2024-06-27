"use client";
import React from "react";
import Link from "next/link";
import dashboard_items from "./dashboard_items";
import { usePathname } from "next/navigation";
import { Toaster } from "sonner";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { IoIosMenu } from "react-icons/io";
import { PiHandWavingFill } from "react-icons/pi";
import withAuthHost from "@/app/withAuthHost";
import { IoNotificationsOutline } from "react-icons/io5";
import { BiUserCircle } from "react-icons/bi";
import { MdLogout } from "react-icons/md";

const Layout = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname();
  const items = dashboard_items;
  const today = new Date();

  function handleLogout() {
    let currentDate = new Date();
    currentDate.setDate(currentDate.getDate() - 1);
    let yesterday = currentDate;

    router.push("/admin_login");
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
              className="py-3 w-full rounded-lg bg-[#474747] text-white hover:scale-y-110 text-center font-semibold font-montserrat group flex items-center justify-center space-x-2"
            >
              <MdLogout className="inline w-6 h-6 fill-white group-hover:fill-red-600" />
              <span>Logout</span>
            </button>
          </div>
        </div>

        <div className="w-full bg-white ml-[15vw]">{children}</div>
      </div>
    </>
  );
};

export default withAuthHost(Layout);
