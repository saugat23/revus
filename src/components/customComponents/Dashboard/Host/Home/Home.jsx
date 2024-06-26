"use client";
import React from "react";
import { FaArrowDown, FaArrowUp, FaSearch, FaUser } from "react-icons/fa";
import Image from "next/image";
import ChartDecrease from "@/../public/dashboard/host/chartdecrease.svg";
import ChartIncrease from "@/../public/dashboard/host/chartincrease.svg";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { HiOutlinePhone } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function CustomersContainer({
  name,
  count,
  increase,
  decrease,
  percentage,
}) {
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

export function BookingsContainer({
  id,
  dueDate,
  name,
  contact,
  model,
  registration,
}) {
  return (
    <>
      <div className="p-4 rounded-xl border border-gray-300 flex flex-col justify-center items-start space-y-4 font-semibold">
        <h1 className="text-black text-sm lg:text-base">{id}</h1>
        <div className="w-full flex justify-between items-center">
          <button className="bg-gray-100 text-sm py-2 px-4">
            Due Date : {dueDate}
          </button>
          <button className="bg-[#D01818] py-2 px-4 rounded-full text-sm text-primary-foreground">
            In Use
          </button>
        </div>
        <div className="w-full flex items-start">
          <div className="w-1/2 flex flex-col justify-center items-start space-y-4">
            <div className="w-full flex flex-col space-y-2">
              <span>Customer</span>
              <span>
                <FaUser className="w-4 h-4 fill-black inline mr-1" />
                <span className="text-sm font-medium">{name}</span>
              </span>
            </div>
            <div className="w-full flex flex-col space-y-2">
              <span>Car Model</span>
              <span className="font-medium">{model}</span>
            </div>
          </div>
          <div className="w-1/2 flex flex-col justify-center items-start space-y-3">
            <div className="w-full flex flex-col space-y-2">
              <span>Contact Detail</span>
              <span>
                <HiOutlinePhone className="w-4 h-4 fill-black inline mr-1" />
                <span className="text-sm font-medium">{contact}</span>
              </span>
            </div>
            <div className="w-full flex flex-col space-y-2">
              <span>Registration</span>
              <span className="font-medium">{registration}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default function Page({ cars }) {
  return (
    <>
      <section className="bg-white h-auto p-6 flex flex-col justify-center items-start space-y-4 font-montserrat text-sm w-[84vw] overflow-hidden">
        <div className="shadow-custom w-full h-auto flex flex-col justify-center items-start p-3 ">
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
          <div className="mt-8 w-full"></div>
        </div>
        <div className="w-full flex justify-center items-start space-x-8">
          <div className="w-full flex flex-col justify-center items-center p-4 space-y-4 shadow-custom rounded-xl">
            <div className="w-full flex justify-between items-center">
              <h1 className="font-semibold text-black text-base lg:text-lg xl:text-xl">
                Bookings
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
                className="w-full grid grid-cols-1 gap-y-4 mt-4"
              >
                <BookingsContainer
                  id="TOY001"
                  dueDate="11 Jun 2024"
                  name="Chris Richard"
                  contact="08476328473"
                  model="Thunder Blaze"
                  registration="ZAB-6377"
                />
                <BookingsContainer
                  id="TOY001"
                  dueDate="11 Jun 2024"
                  name="Chris Richard"
                  contact="08476328473"
                  model="Thunder Blaze"
                  registration="ZAB-6377"
                />
                <BookingsContainer
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
                <BookingsContainer
                  id="TOY001"
                  dueDate="11 Jun 2024"
                  name="Chris Richard"
                  contact="08476328473"
                  model="Thunder Blaze"
                  registration="ZAB-6377"
                />
                <BookingsContainer
                  id="TOY001"
                  dueDate="11 Jun 2024"
                  name="Chris Richard"
                  contact="08476328473"
                  model="Thunder Blaze"
                  registration="ZAB-6377"
                />
                <BookingsContainer
                  id="TOY001"
                  dueDate="11 Jun 2024"
                  name="Chris Richard"
                  contact="08476328473"
                  model="Thunder Blaze"
                  registration="ZAB-6377"
                />
                <BookingsContainer
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
        <div className="w-full bg-white shadow-custom px-4 py-6 flex flex-col justify-center items-start space-y-4">
          <h1 className="font-semibold text-base lg:text-lg xl:text-xl text-black">
            Listings
          </h1>
          <div className="w-80 relative">
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search by Model Name"
              className="text-gray-800 p-3 pl-10 outline-none rounded-lg bg-gray-100 w-full placeholder-gray-500 shadow-custom"
            />
            <CiSearch className="w-6 h-6 fill-gray-500 stroke-[0.5] absolute top-1/2 left-2 -translate-y-1/2" />
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-center font-normal text-gray-700">
                  Car ID
                </TableHead>
                <TableHead className="text-center font-normal text-gray-700">
                  Model
                </TableHead>
                <TableHead className="text-center font-normal text-gray-700">
                  Year
                </TableHead>
                <TableHead className="text-center font-normal text-gray-700">
                  Price Per Day
                </TableHead>
                <TableHead className="text-center font-normal text-gray-700">
                  Availability Status
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {cars.map((car) => {
                return (
                  <TableRow key={car.car_id}>
                    <TableCell className="font-medium text-center">
                      {car.car_id}
                    </TableCell>
                    <TableCell className="font-medium text-center">
                      {car.model}
                    </TableCell>
                    <TableCell className="font-medium text-center">
                      {car.year}
                    </TableCell>
                    <TableCell className="font-medium text-center">
                      {car.daily_rate}
                    </TableCell>
                    <TableCell className="flex space-x-2 items-center justify-center">
                      <div
                        className={`w-3 h-3 mr-1 outline outline-offset-1 ${car.availability ? "bg-green-500 outline-green-500" : "bg-red-500 outline-red-500"} rounded-full`}
                      ></div>
                      <span>
                        {car.availability ? "Available" : "Not Available"}
                      </span>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      </section>
    </>
  );
}
