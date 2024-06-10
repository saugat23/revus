"use client";

import React from "react";
import ListingCard from "./ListingCard";
import VehicleListing from "./VehicleListing";
import SalesCard from "./SalesCard";
import Peugeot from "@/../public/homepage/peugeot-508.jpg";
import Mercedes from "@/../public/homepage/mercedes-amg.jpg";
import Ford from "@/../public/homepage/ford-st.jpg";
import BMW7 from "@/../public/homepage/bmw-7.jpg";
import AudiR8 from "@/../public/homepage/audi-r8.jpg";
import Jaguar from "@/../public/homepage/jaguar.jpg";
import { Button } from "@/components/ui/button";
import SalesMember from "@/../public/homepage/salesmember.jpg";

export default function Page() {
  return (
    <>
      <section className="h-auto bg-white">
        <div className="max-w-6xl w-full px-3 mx-auto flex flex-col justify-center items-center space-y-15 pb-10">
          <div className="-mt-6 w-full flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            <ListingCard title="vehicles stock" end={3855} />
            <ListingCard title="dealers served" end={127} suffix="+" />
            <ListingCard title="happy customers" end={6554} />
            <ListingCard title="vehicles on sale" end={1450} suffix="+" />
          </div>
          <div className="mt-24 flex flex-col justify-center items-center font-montserrat">
            <p className="font-semibold text-xs uppercase my-1">
              helps you to find your next car easily
            </p>
            <h2 className="font-bold xl:text-4xl md:text-2xl text-lg flex items-center my-1">
              Our Vehicles <span className="text-secondary ml-2">Listing</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-10 gap-8">
              <VehicleListing
                imgSrc={Ford}
                model="Ford Focus ST"
                make="2019"
                range="31500"
                type="Petrol"
                transimission="Automatic"
                price="12"
              />
              <VehicleListing
                imgSrc={AudiR8}
                model="Audi R8"
                make="2019"
                range="18500"
                type="Petrol"
                transimission="Automatic"
                price="15"
              />
              <VehicleListing
                imgSrc={BMW7}
                model="BMW 7 Series"
                make="2021"
                range="30000"
                type="Petrol"
                transimission="Manual"
                price="16"
              />
              <VehicleListing
                imgSrc={Mercedes}
                model="Mercedes AMG"
                make="2018"
                range="16500"
                type="Petrol"
                transimission="Automatic"
                price="10"
              />
              <VehicleListing
                imgSrc={Peugeot}
                model="Peugeot 508 Sports"
                make="2016"
                range="14000"
                type="Petrol"
                transimission="Manual"
                price="08"
              />
              <VehicleListing
                imgSrc={Jaguar}
                model="Jaguar XJ50"
                make="2020"
                range="24000"
                type="Petrol"
                transimission="Automatic"
                price="14"
              />
            </div>
            <div className="flex justify-center items-center mt-6">
              <Button className="py-6 px-6">Show More</Button>
            </div>
          </div>
          <div className="mt-24 flex flex-col justify-center items-center font-montserrat">
            <p className="font-semibold text-xs uppercase my-1">
              helps you to find your next car easily
            </p>
            <h2 className="font-bold xl:text-4xl md:text-2xl text-lg flex items-center my-1">
              Our Sales <span className="text-secondary ml-2">Team</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 mt-10 gap-8">
              <SalesCard
                imgSrc={SalesMember}
                name="Alex Leeman"
                position="Director"
                number="1 755 302 8579"
              />
              <SalesCard
                imgSrc={SalesMember}
                name="Alex Leeman"
                position="Director"
                number="1 755 302 8579"
              />
              <SalesCard
                imgSrc={SalesMember}
                name="Alex Leeman"
                position="Director"
                number="1 755 302 8579"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
