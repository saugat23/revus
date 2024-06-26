"use client";

import React from "react";
import { CiSearch } from "react-icons/ci";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";

export default function Page({ cars }) {
  return (
    <>
      <section className="bg-white h-auto p-6 flex flex-col justify-center items-start space-y-4 font-montserrat text-sm w-[84vw] overflow-hidden">
        <div className="w-full bg-white shadow-custom px-4 py-6 flex flex-col justify-center items-start space-y-4">
          <div className="w-full flex justify-between items-center">
            <h1 className="font-semibold text-base lg:text-lg xl:text-xl text-black">
              Listings
            </h1>
            <Link
              href="/host_dashboard/list_car"
              className="bg-black flex items-center space-x-2 px-4 py-2 rounded-md"
            >
              <span className="w-4 h-4 bg-gray-600 text-white rounded-full flex justify-center items-center">
                +
              </span>
              <span className="text-primary-foreground font-medium">
                List a Car
              </span>
            </Link>
          </div>
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
