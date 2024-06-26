"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookingsContainer } from "@/components/customComponents/Dashboard/Host/Home/Home";

export default function Page() {
  return (
    <>
      <section className="bg-white h-auto p-6 flex flex-col justify-center items-start space-y-4 font-montserrat text-sm w-[84vw] overflow-hidden">
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
            <TabsContent value="next5" className="w-full grid grid-cols-1 mt-4">
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
      </section>
    </>
  );
}
