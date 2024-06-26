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

export default function Page() {
  return (
    <>
      <section className="bg-white h-auto p-6 flex flex-col justify-center items-start space-y-4 font-montserrat text-sm w-[84vw] overflow-hidden">
        <div className="w-full bg-white shadow-custom px-4 py-6 flex flex-col justify-center items-start space-y-4">
          <h1 className="font-semibold text-base lg:text-lg xl:text-xl text-black">
            Lists of Incidents Reported
          </h1>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="font-normal text-gray-700">
                  Incident ID
                </TableHead>
                <TableHead className="text-center font-normal text-gray-700">
                  Car Information
                </TableHead>
                <TableHead className="text-center font-normal text-gray-700">
                  Date of Incident
                </TableHead>
                <TableHead className="text-center font-normal text-gray-700">
                  Description
                </TableHead>
                <TableHead className="text-center font-normal text-gray-700">
                  Reported By
                </TableHead>
                <TableHead className="text-center font-normal text-gray-700">
                  Status
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium ">1</TableCell>
                <TableCell className="font-medium text-center">
                  BMW X5, 2021 Black
                </TableCell>
                <TableCell className="font-medium text-center">
                  June 20, 2024
                </TableCell>
                <TableCell className="font-medium text-center">
                  Broken Side Mirror
                </TableCell>
                <TableCell className="font-medium text-center">
                  Alice Johnson
                </TableCell>
                <TableCell className="flex space-x-2 items-center justify-center">
                  <div className="w-3 h-3 mr-1 bg-green-500 outline outline-green-500 outline-offset-1 rounded-full"></div>
                  <span>Resolved</span>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium ">1</TableCell>
                <TableCell className="font-medium text-center">
                  BMW X5, 2021 Black
                </TableCell>
                <TableCell className="font-medium text-center">
                  June 20, 2024
                </TableCell>
                <TableCell className="font-medium text-center">
                  Broken Side Mirror
                </TableCell>
                <TableCell className="font-medium text-center">
                  Alice Johnson
                </TableCell>
                <TableCell className="flex space-x-2 items-center justify-center">
                  <div className="w-3 h-3 mr-1 bg-green-500 outline outline-green-500 outline-offset-1 rounded-full"></div>
                  <span>Resolved</span>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium ">1</TableCell>
                <TableCell className="font-medium text-center">
                  BMW X5, 2021 Black
                </TableCell>
                <TableCell className="font-medium text-center">
                  June 20, 2024
                </TableCell>
                <TableCell className="font-medium text-center">
                  Broken Side Mirror
                </TableCell>
                <TableCell className="font-medium text-center">
                  Alice Johnson
                </TableCell>
                <TableCell className="flex space-x-2 items-center justify-center">
                  <div className="w-3 h-3 mr-1 bg-green-500 outline outline-green-500 outline-offset-1 rounded-full"></div>
                  <span>Resolved</span>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium ">1</TableCell>
                <TableCell className="font-medium text-center">
                  BMW X5, 2021 Black
                </TableCell>
                <TableCell className="font-medium text-center">
                  June 20, 2024
                </TableCell>
                <TableCell className="font-medium text-center">
                  Broken Side Mirror
                </TableCell>
                <TableCell className="font-medium text-center">
                  Alice Johnson
                </TableCell>
                <TableCell className="flex space-x-2 items-center justify-center">
                  <div className="w-3 h-3 mr-1 bg-green-500 outline outline-green-500 outline-offset-1 rounded-full"></div>
                  <span>Resolved</span>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium ">1</TableCell>
                <TableCell className="font-medium text-center">
                  BMW X5, 2021 Black
                </TableCell>
                <TableCell className="font-medium text-center">
                  June 20, 2024
                </TableCell>
                <TableCell className="font-medium text-center">
                  Broken Side Mirror
                </TableCell>
                <TableCell className="font-medium text-center">
                  Alice Johnson
                </TableCell>
                <TableCell className="flex space-x-2 items-center justify-center">
                  <div className="w-3 h-3 mr-1 bg-green-500 outline outline-green-500 outline-offset-1 rounded-full"></div>
                  <span>Resolved</span>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>
    </>
  );
}
