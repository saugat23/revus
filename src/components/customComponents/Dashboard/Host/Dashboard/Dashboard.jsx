"use client";
import React from "react";
import ApexChart from "./AreaChart";
import DonutChart from "./DonutChart";
import { FaArrowDown, FaArrowUp, FaUser } from "react-icons/fa";
import Image from "next/image";
import ChartDecrease from "@/../public/dashboard/host/chartdecrease.svg";
import ChartIncrease from "@/../public/dashboard/host/chartincrease.svg";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { HiOutlinePhone } from "react-icons/hi2";

function CustomersContainer({ name, count, increase, decrease, percentage }) {
  return (
    <div className="w-auto rounded-xl border border-gray-300 p-4 flex flex-col justify-center items-start space-y-3">
      <div className="w-full flex justify-between items-center">
        <h2 className="text-black font-semibold text-xs lg:text-sm">{name}</h2>
        <span>
          {increase ? (
            <FaArrowUp className="inline mr-1 w-5 h-5 fill-green-500" />
          ) : (
            <FaArrowDown className="inline mr-1 w-5 h-5 fill-red-500" />
          )}
          <span
            className={`font-medium ${increase ? "text-green-500" : "text-red-500"}`}
          >
            {percentage} %
          </span>
        </span>
      </div>
      <h2 className="text-sm lg:text-base font-semibold">{count}</h2>
      <Image
        src={increase ? ChartIncrease : ChartDecrease}
        alt="Chart"
        priority
        quality={90}
        className="object-center object-cover w-full"
      />
    </div>
  );
}

function OrdersContainer({ id, dueDate, name, contact, model, registration }) {
  return (
    <>
      <div className="p-4 rounded-xl border border-gray-300 flex flex-col justify-center items-start space-y-3 font-semibold">
        <h1 className="text-black text-sm lg:text-base">{id}</h1>
        <div className="w-full flex justify-between items-center">
          <button className="bg-gray-100 text-sm py-2 px-4">
            Due Date : {dueDate}
          </button>
          <button className="bg-[#4C4DDC] p-2 rounded-full text-sm">
            In Use
          </button>
        </div>
        <div className="w-full flex items-start">
          <div className="w-1/2 flex flex-col justify-center items-start space-y-3">
            <div className="w-full flex flex-col space-y-1">
              <span>Customer</span>
              <span>
                <FaUser className="w-4 h-4 fill-black inline mr-1" />
                <span className="text-sm">{name}</span>
              </span>
            </div>
            <div className="w-full flex flex-col space-y-1">
              <span>Car Model</span>
              <span>{model}</span>
            </div>
          </div>
          <div className="w-1/2 flex flex-col justify-center items-start space-y-3">
            <div className="w-full flex flex-col space-y-1">
              <span>Contact Detail</span>
              <span>
                <HiOutlinePhone className="w-4 h-4 fill-black inline mr-1" />
                <span className="text-sm">{contact}</span>
              </span>
            </div>
            <div className="w-full flex flex-col space-y-1">
              <span>Registration</span>
              <span>{registration}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default function Page() {
  return (
    <>
      <section className="bg-white ml-[15vw] h-auto p-6 flex flex-col justify-center items-start space-y-4 font-montserrat text-sm w-[84vw] overflow-hidden">
        <div className="shadow-lg w-full h-auto flex flex-col justify-center items-start p-3 ">
          <div className="w-full flex justify-between items-center">
            <div className="flex justify-center items-center space-x-8">
              <h1 className="text-black font-semibold">Earning Summary</h1>
              <span>
                <select className="p-2 bg-transparent outline-none text-gray-500 text-xs">
                  <option value="Mar 2022 - Oct 2022">
                    Mar 2022 - Oct 2022
                  </option>
                  <option value="Oct 2022 - Nov 2022">
                    Oct 2022 - Nov 2022
                  </option>
                  <option value="Nov 2022 - Dec 2022">
                    Nov 2022 - Dec 2022
                  </option>
                </select>
              </span>
            </div>
            <div className="flex justify-center items-center space-x-8">
              <span className="flex items-center text-xs text-gray-500">
                <div className="w-3 h-3 rounded-full bg-[#006AFF] mr-1"></div>
                Last 6 months
              </span>
              <span className="flex items-center text-xs text-gray-500">
                <div className="w-3 h-3 rounded-full bg-gray-500 mr-1"></div>
                Same period as last year
              </span>
            </div>
          </div>
          <div className="mt-8 w-full">
            <ApexChart />
          </div>
        </div>
        <div className="w-full flex justify-center items-start space-x-8">
          <div className="w-1/2 flex flex-col justify-center items-center space-y-8">
            <div className="w-full h-auto shadow-lg flex flex-col justify-center space-y-4 items-start p-4">
              <div className="w-full flex justify-between items-center">
                <h1 className="font-semibold text-gray-500 text-base lg:text-lg xl:text-xl">
                  Hire Vs Cancel
                </h1>
                <span className="text-xs text-gray-500 p-2 bg-gray-100">
                  Today
                </span>
              </div>
              <div className="w-full">
                <DonutChart />
              </div>
            </div>
            <div className="w-full h-auto shadow-lg flex flex-col justify-center space-y-4 items-start p-4">
              <div className="w-full flex justify-between items-center">
                <h1 className="font-semibold text-black text-base lg:text-lg xl:text-xl">
                  Statistics
                </h1>
                <select className="text-black text-xs lg:text-sm bg-transparent p-2 outline-none border border-gray-300 rounded-md">
                  <option value="Pass 7 Days">Pass 7 Days</option>
                  <option value="Pass 30 Days">Pass 30 Days</option>
                </select>
              </div>
              <div className="w-full grid grid-cols-2 gap-8">
                <CustomersContainer
                  name="Customers"
                  decrease={true}
                  increase={false}
                  count={20}
                  percentage={8}
                />
                <CustomersContainer
                  name="Orders"
                  decrease={false}
                  increase={true}
                  count={27}
                  percentage={12}
                />
                <CustomersContainer
                  name="Income"
                  decrease={false}
                  increase={true}
                  count={"$2000"}
                  percentage={24}
                />
                <CustomersContainer
                  name="Expenses"
                  decrease={true}
                  increase={false}
                  count={"$425"}
                  percentage={10}
                />
              </div>
            </div>
          </div>
          <div className="w-1/2 flex flex-col justify-center items-center p-4 space-y-4 shadow-lg rounded-xl">
            <div className="w-full flex justify-between items-center">
              <h1 className="font-semibold text-black text-base lg:text-lg xl:text-xl">
                Orders
              </h1>
              <button className="bg-transparent text-xs lg:text-base text-black font-semibold">
                See All
              </button>
            </div>
            <Tabs defaultValue="ongoing" className="w-full">
              <TabsList className="w-full !justify-start">
                <TabsTrigger
                  value="ongoing"
                  className="py-3 px-5 !rounded-l-xl bg-transparent border border-gray-300 text-gray-600 data-[state=active]:bg-black data-[state=active]:text-white"
                >
                  Ongoing
                </TabsTrigger>
                <TabsTrigger
                  value="next5"
                  className="py-3 px-5 !rounded-r-xl bg-transparent border border-gray-300 text-gray-600 data-[state=active]:bg-black data-[state=active]:text-white"
                >
                  Next 5 Days
                </TabsTrigger>
              </TabsList>
              <TabsContent
                value="ongoing"
                className="w-full grid grid-cols-1 mt-4"
              >
                <OrdersContainer
                  id="TOY001"
                  dueDate="11 Jun 2024"
                  name="Chris Richard"
                  contact="08476328473"
                  model="Thunder Blaze"
                  registration="ZAB-6377"
                />
                <OrdersContainer
                  id="TOY001"
                  dueDate="11 Jun 2024"
                  name="Chris Richard"
                  contact="08476328473"
                  model="Thunder Blaze"
                  registration="ZAB-6377"
                />
                <OrdersContainer
                  id="TOY001"
                  dueDate="11 Jun 2024"
                  name="Chris Richard"
                  contact="08476328473"
                  model="Thunder Blaze"
                  registration="ZAB-6377"
                />
              </TabsContent>
              <TabsContent
                value="next5"
                className="w-full grid grid-cols-1 mt-4"
              >
                <OrdersContainer
                  id="TOY001"
                  dueDate="11 Jun 2024"
                  name="Chris Richard"
                  contact="08476328473"
                  model="Thunder Blaze"
                  registration="ZAB-6377"
                />
                <OrdersContainer
                  id="TOY001"
                  dueDate="11 Jun 2024"
                  name="Chris Richard"
                  contact="08476328473"
                  model="Thunder Blaze"
                  registration="ZAB-6377"
                />
                <OrdersContainer
                  id="TOY001"
                  dueDate="11 Jun 2024"
                  name="Chris Richard"
                  contact="08476328473"
                  model="Thunder Blaze"
                  registration="ZAB-6377"
                />
                <OrdersContainer
                  id="TOY001"
                  dueDate="11 Jun 2024"
                  name="Chris Richard"
                  contact="08476328473"
                  model="Thunder Blaze"
                  registration="ZAB-6377"
                />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
    </>
  );
}
