"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MdDevices } from "react-icons/md";
import { MdOutlineRocketLaunch } from "react-icons/md";
import { FaRegCalendarAlt } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { PiTrain } from "react-icons/pi";
import { RiGraduationCapFill } from "react-icons/ri";
import Image from "next/image";
import Tab1 from "@/../public/homepage/managerentals.jpg";
import Tab2 from "@/../public/homepage/fuelplans.jpg";
import Tab3 from "@/../public/homepage/carrental.jpg";
import Tab4 from "@/../public/homepage/onewaycarrental.jpg";
import Tab5 from "@/../public/homepage/meetings.jpg";
import Tab6 from "@/../public/homepage/studentcarrental.jpg";

export default function Page() {
  return (
    <>
      <section className="h-auto bg-[#f1f5fa]">
        <div className="h-full max-w-6xl mx-auto px-3 py-20 w-full flex flex-col justify-center items-center">
          <Tabs
            defaultValue="mobileapp"
            className="w-full flex flex-col lg:flex-row justify-center items-start space-y-6 space-x-0 lg:space-x-10 lg:space-y-0"
          >
            <TabsList className="!grid !grid-cols-2 bg-white w-full lg:w-1/2 gap-1">
              <TabsTrigger
                value="mobileapp"
                className="flex flex-col !p-6 h-auto shadow-lg"
              >
                <p className="w-full text-sm md:text-base xl:text-lg font-bold text-left">
                  01
                </p>
                <div className="w-full flex flex-col justify-center items-end space-y-3">
                  <MdDevices className="w-16 h-16" />
                  <p className="text-sm lg:text-base xl:text-lg font-montserrat font-semibold">
                    Mobile App
                  </p>
                </div>
              </TabsTrigger>
              <TabsTrigger
                value="fuelplans"
                className="flex flex-col !p-6 h-auto shadow-lg"
              >
                <p className="w-full text-sm md:text-base xl:text-lg font-bold text-left">
                  02
                </p>
                <div className="w-full flex flex-col justify-center items-end space-y-3">
                  <MdOutlineRocketLaunch className="w-16 h-16" />
                  <p className="text-sm lg:text-base xl:text-lg font-montserrat font-semibold">
                    Fuel Plans
                  </p>
                </div>
              </TabsTrigger>
              <TabsTrigger
                value="longcarrental"
                className="flex flex-col !p-6 h-auto shadow-lg"
              >
                <p className="w-full text-sm md:text-base xl:text-lg font-bold text-left">
                  03
                </p>
                <div className="w-full flex flex-col justify-center items-end space-y-3">
                  <FaRegCalendarAlt className="w-16 h-16" />
                  <p className="text-sm lg:text-base xl:text-lg font-montserrat font-semibold">
                    Long Car Rental
                  </p>
                </div>
              </TabsTrigger>
              <TabsTrigger
                value="onewaycarrental"
                className="flex flex-col !p-6 h-auto shadow-lg"
              >
                <p className="w-full text-sm md:text-base xl:text-lg font-bold text-left">
                  04
                </p>
                <div className="w-full flex flex-col justify-center items-end space-y-3">
                  <CiLocationOn className="w-16 h-16" />
                  <p className="text-sm lg:text-base xl:text-lg font-montserrat font-semibold">
                    One-Way Car Rental
                  </p>
                </div>
              </TabsTrigger>
              <TabsTrigger
                value="meetingsandgroups"
                className="flex flex-col !p-6 h-auto shadow-lg"
              >
                <p className="w-full text-sm md:text-base xl:text-lg font-bold text-left">
                  05
                </p>
                <div className="w-full flex flex-col justify-center items-end space-y-3">
                  <PiTrain className="w-16 h-16" />
                  <p className="text-sm lg:text-base xl:text-lg font-montserrat font-semibold">
                    Meetings and Groups
                  </p>
                </div>
              </TabsTrigger>
              <TabsTrigger
                value="studentcarrental"
                className="flex flex-col !p-6 h-auto shadow-lg"
              >
                <p className="w-full text-sm md:text-base xl:text-lg font-bold text-left">
                  06
                </p>
                <div className="w-full flex flex-col justify-center items-end space-y-3">
                  <RiGraduationCapFill className="w-16 h-16" />
                  <p className="text-sm lg:text-base xl:text-lg font-montserrat font-semibold">
                    Student Car Rentals
                  </p>
                </div>
              </TabsTrigger>
            </TabsList>
            <div
              data-aos="fade-up"
              data-aos-duration="400"
              className="w-full lg:w-1/2"
            >
              <TabsContent
                value="mobileapp"
                className="w-full flex flex-col justify-center items-start space-y-5"
              >
                <div className="w-full flex flex-col space-y-3 justify-center items-start font-montserrat">
                  <p className="font-medium text-xs uppercase">
                    helps you to find your next car easily
                  </p>
                  <h2 className="font-bold xl:text-4xl md:text-2xl text-lg flex items-center">
                    Manage <span className="text-secondary ml-2">Rentals</span>
                  </h2>
                </div>
                <div className="w-full h-auto">
                  <Image
                    src={Tab1}
                    alt="Tab1 Image"
                    className="object-center object-fill"
                    priority
                  />
                </div>
                <p className="font-lato font-normal text-primary text-sm">
                  That light replenish very all good face brought over. His.
                  Likeness fruitful and female morning life great lesser Man.
                  Signs abundantly. Life. Their be seed their, without great
                  made every. Multiply that dry there, don’t upon winged also,
                  were place our make. Days, good him replenish whose form don’t
                  under. Was morning lights creepeth, made under our, lights.
                </p>
              </TabsContent>
              <TabsContent
                value="fuelplans"
                className="w-full flex flex-col justify-center items-start space-y-5"
              >
                <div className="w-full flex flex-col space-y-3 justify-center items-start font-montserrat">
                  <p className="font-medium text-xs uppercase">
                    helps you to find your next car easily
                  </p>
                  <h2 className="font-bold xl:text-4xl md:text-2xl text-lg flex items-center">
                    Refuling{" "}
                    <span className="text-secondary ml-2">Options</span>
                  </h2>
                </div>
                <div className="w-full h-auto">
                  <Image
                    src={Tab2}
                    alt="Tab2 Image"
                    className="object-center object-fill"
                    priority
                  />
                </div>
                <p className="font-lato font-normal text-primary text-sm">
                  There, beast divide lights give female god. Moveth. Meat
                  beginning you’re sixth green under appear man. Lesser God it
                  don’t darkness fifth don’t him beast heaven after gathered
                  fowl of hath living, moveth moved sixth, can’t she’d a they’re
                  third. His seed abundantly signs good creepeth wherein every
                  was you’re fifth. Night, place rule bearing seas, fill.
                </p>
              </TabsContent>
              <TabsContent
                value="longcarrental"
                className="w-full flex flex-col justify-center items-start space-y-5"
              >
                <div className="w-full flex flex-col space-y-3 justify-center items-start font-montserrat">
                  <p className="font-medium text-xs uppercase">
                    helps you to find your next car easily
                  </p>
                  <h2 className="font-bold xl:text-4xl md:text-2xl text-lg flex items-center">
                    Monthly We{" "}
                    <span className="text-secondary ml-2">Car Rental</span>
                  </h2>
                </div>
                <div className="w-full h-auto">
                  <Image
                    src={Tab3}
                    alt="Tab3 Image"
                    className="object-center object-fill"
                    priority
                  />
                </div>
                <p className="font-lato font-normal text-primary text-sm">
                  They’re upon grass don’t day yielding so you there hath.
                  Gathered is itself. They’re and meat kind shall own fish our
                  seed, male seasons shall said, rule made you fish fowl whose
                  said over god divide earth whose life living, moveth fowl
                  isn’t had meat created midst Very to grass fish it days, don’t
                  good. Darkness also you’ll earth firmament moving may signs
                  have moved in.{" "}
                </p>
              </TabsContent>
              <TabsContent
                value="onewaycarrental"
                className="w-full flex flex-col justify-center items-start space-y-5"
              >
                <div className="w-full flex flex-col space-y-3 justify-center items-start font-montserrat">
                  <p className="font-medium text-xs uppercase">
                    helps you to find your next car easily
                  </p>
                  <h2 className="font-bold xl:text-4xl md:text-2xl text-lg flex items-center">
                    Airport We{" "}
                    <span className="text-secondary ml-2">Rates</span>
                  </h2>
                </div>
                <div className="w-full h-auto">
                  <Image
                    src={Tab4}
                    alt="Tab4 Image"
                    className="object-center object-fill"
                    priority
                  />
                </div>
                <p className="font-lato font-normal text-primary text-sm">
                  There, beast divide lights give female god. Moveth. Meat
                  beginning you’re sixth green under appear man. Lesser God it
                  don’t darkness fifth don’t him beast heaven after gathered
                  fowl of hath living, moveth moved sixth, can’t she’d a they’re
                  third. His seed abundantly signs good creepeth wherein every
                  was you’re fifth. Night, place rule bearing seas, fill.
                </p>
              </TabsContent>
              <TabsContent
                value="meetingsandgroups"
                className="w-full flex flex-col justify-center items-start space-y-5"
              >
                <div className="w-full flex flex-col space-y-3 justify-center items-start font-montserrat">
                  <p className="font-medium text-xs uppercase">
                    helps you to find your next car easily
                  </p>
                  <h2 className="font-bold xl:text-4xl md:text-2xl text-lg flex items-center">
                    Groups{" "}
                    <span className="text-secondary ml-2">Car Rental</span>
                  </h2>
                </div>
                <div className="w-full h-auto">
                  <Image
                    src={Tab5}
                    alt="Tab5 Image"
                    className="object-center object-fill"
                    priority
                  />
                </div>
                <p className="font-lato font-normal text-primary text-sm">
                  Gathering make be she’d bring kind for them fill divided sea
                  thing sea earth of stars firmament beast so Saying god
                  likeness abundantly i yielding his so together green gathering
                  of kind days first give had green, him hath winged creature
                  above second fish spirit green can’t appear great likeness
                  yielding female sea evening first Them. All saying morn.{" "}
                </p>
              </TabsContent>
              <TabsContent
                value="studentcarrental"
                className="w-full flex flex-col justify-center items-start space-y-5"
              >
                <div className="w-full flex flex-col space-y-3 justify-center items-start font-montserrat">
                  <p className="font-medium text-xs uppercase">
                    helps you to find your next car easily
                  </p>
                  <h2 className="font-bold xl:text-4xl md:text-2xl text-lg flex items-center">
                    Under 25 We{" "}
                    <span className="text-secondary ml-2">Car Rental</span>
                  </h2>
                </div>
                <div className="w-full h-auto">
                  <Image
                    src={Tab2}
                    alt="Tab2 Image"
                    className="object-center object-fill"
                    priority
                  />
                </div>
                <p className="font-lato font-normal text-primary text-sm">
                  There, beast divide lights give female god. Moveth. Meat
                  beginning you’re sixth green under appear man. Lesser God it
                  don’t darkness fifth don’t him beast heaven after gathered
                  fowl of hath living, moveth moved sixth, can’t she’d a they’re
                  third. His seed abundantly signs good creepeth wherein every
                  was you’re fifth. Night, place rule bearing seas, fill.
                </p>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </section>
    </>
  );
}
