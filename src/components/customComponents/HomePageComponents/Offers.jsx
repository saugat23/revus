"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";

export default function Page() {
  return (
    <>
      <section className="bg-primary h-auto">
        <div className="max-w-6xl mx-auto px-3 w-full h-full py-16 flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
          <div className="flex flex-col justify-center space-y-3">
            <h1 className="font-montserrat font-bold text-primary-foreground text-3xl xl:text-4xl">
              35% discounts & Special Offers
            </h1>
            <p className="font-lato font-normal text-primary-foreground">
              Rent a Car for 7 Days and get 2 days extra absolutely FREE
            </p>
          </div>
          <div className="w-full lg:w-auto flex justify-around lg:justify-center items-center space-x-8">
            <Button className="py-7 px-6">GET CAR NOW</Button>
            <div className="flex flex-col justify-center space-y-2">
              <h3 className="font-lato font-normal text-primary-foreground text-sm">
                Call Us For Booking Vehicle
              </h3>
              <h3 className="font-montserrat font-semibold text-primary-foreground flex items-center space-x-2">
                <FaPhoneAlt className="w-5 h-6 fill-secondary" />
                +1 (755) 302-8549
              </h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
