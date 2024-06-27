"use client";
import React from "react";
import { FaCar, FaFilter, FaUser, FaUserCog } from "react-icons/fa";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { HiDocumentDuplicate, HiOutlinePhone, HiUsers } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import AreaChartComponent from "./AreaChart";

function ReportsCard({ icon, name, number }) {
  return (
    <>
      <div className="p-6 w-full rounded-md border border-gray-300 flex justify-start items-start space-x-5 font-inter font-semibold">
        <div>{icon}</div>
        <div className="flex flex-col justify-center space-y-2">
          <h1 className="text-gray-600 uppercase text-sm lg:text-base tracking-wide">
            {name}
          </h1>
          <p className="text-black text-base lg:text-lg">{number}</p>
        </div>
      </div>
    </>
  );
}

function PerformanceIndicators({ name, percent }) {
  return (
    <div className="p-6 rounded-md w-full flex flex-col justify-center items-start space-y-2 bg-[#F3F4F7] font-semibold text-black">
      <p className="text-gray-600 uppercase tracking-wide">{name}</p>
      <h4>{percent}%</h4>
    </div>
  );
}

export default function Page() {
  return (
    <>
      <section className="bg-white h-auto p-6 flex flex-col justify-center items-start space-y-4 font-inter text-sm w-[84vw] overflow-hidden">
        <div className="w-full bg-white py-4 flex flex-col justify-center items-start space-y-4">
          <h1 className="font-semibold text-black text-base lg:text-lg xl:text-xl">
            Reports
          </h1>
          <diV className="w-full grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <ReportsCard
              icon={
                <FaCar className="w-14 h-14 fill-white p-3 rounded-full bg-[#003ECB]" />
              }
              name="total rentals"
              number={3456}
            />
            <ReportsCard
              icon={
                <HiDocumentDuplicate className="w-14 h-14 fill-white p-3 rounded-full bg-[#003ECB]" />
              }
              name="total revenue"
              number={3456}
            />
            <ReportsCard
              icon={
                <FaUserCog className="w-14 h-14 fill-white p-3 rounded-full bg-[#003ECB]" />
              }
              name="total hosts"
              number={3456}
            />
            <ReportsCard
              icon={
                <HiUsers className="w-14 h-14 fill-white p-3 rounded-full bg-[#003ECB]" />
              }
              name="total users"
              number={3456}
            />
          </diV>
        </div>
        <div className="w-full h-auto bg-white rounded-md border border-gray-300 flex flex-col justify-center items-start">
          <h1 className="p-3 border-b w-full border-gray-300 font-semibold text-black text-base lg:text-lg xl:text-xl">
            Key Performance Indicators
          </h1>
          <div className="px-3 py-6 w-full flex flex-col justify-center space-y-8">
            <div className="grid w-full grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              <PerformanceIndicators
                name="average utilization rate"
                percent={75}
              />
              <PerformanceIndicators
                name="customer satisfaction"
                percent={90}
              />
              <PerformanceIndicators
                name="booking conversion rate"
                percent={12}
              />
              <PerformanceIndicators name="fleet growth rate" percent={20} />
            </div>
            <div className="mt-4 w-full h-60">
              <AreaChartComponent />
            </div>
          </div>
        </div>
        <div className="w-full bg-white shadow-custom px-4 py-6 flex flex-col justify-center items-start space-y-4">
          <div className="w-full flex justify-between items-center">
            <h1 className="font-semibold text-base lg:text-lg xl:text-xl text-black">
              Latest Orders
            </h1>
            <div className="flex justify-center space-x-4 items-center">
              <div className="py-2 px-3 text-gray-600 text-xs fill-gray-600 border-gray-300 border rounded-md">
                <FaFilter className="w-5 h-5 inline mr-1" />
                Filter
              </div>
              <div className="w-auto relative">
                <input
                  type="text"
                  name="search"
                  id="search"
                  placeholder="Search by Users by Name, Email or Date"
                  className="text-gray-800 py-3 pr-10 pl-10 outline-none rounded-lg bg-gray-100 w-full placeholder-gray-500 shadow-custom"
                />
                <CiSearch className="w-6 h-6 fill-gray-500 stroke-[0.5] absolute top-1/2 left-2 -translate-y-1/2" />
              </div>
            </div>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-center font-normal text-gray-700">
                  Customer ID
                </TableHead>
                <TableHead className="text-center font-normal text-gray-700">
                  Customer
                </TableHead>
                <TableHead className="text-center font-normal text-gray-700">
                  Vehicle
                </TableHead>
                <TableHead className="text-center font-normal text-gray-700">
                  Rental Period
                </TableHead>
                <TableHead className="text-center font-normal text-gray-700">
                  Status
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="text-center">#1006H</TableCell>
                <TableCell className="text-center">Darlene Robertson</TableCell>
                <TableCell className="text-center">Toyota</TableCell>
                <TableCell className="text-center">
                  06/01/2024 - 06/06/2024
                </TableCell>
                <TableCell className="text-center">
                  <span className="py-2 px-4 rounded-full border border-gray-300">
                    Completed
                  </span>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-center">#1006H</TableCell>
                <TableCell className="text-center">Darlene Robertson</TableCell>
                <TableCell className="text-center">Toyota</TableCell>
                <TableCell className="text-center">
                  06/01/2024 - 06/06/2024
                </TableCell>
                <TableCell className="text-center">
                  <span className="py-2 px-4 rounded-full border border-gray-300">
                    Completed
                  </span>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>
    </>
  );
}
