"use client";

import Image from "next/image";
import React, { useState } from "react";
import Peugeot from "@/../public/homepage/peugeot-508.jpg";
import Mercedes from "@/../public/homepage/mercedes-amg.jpg";
import Ford from "@/../public/homepage/ford-st.jpg";
import BMW7 from "@/../public/homepage/bmw-7.jpg";
import AudiR8 from "@/../public/homepage/audi-r8.jpg";
import Jaguar from "@/../public/homepage/jaguar.jpg";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Datepicker from "react-tailwindcss-datepicker";
import { Button } from "@/components/ui/button";
import CarDetailBG from "@/../public/cardetailbg.jpeg";
import { FaCircleUser } from "react-icons/fa6";
import { MdOutlinePhone } from "react-icons/md";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function Page({ data }) {
  const car = data;
  console.log(car);
  const [featuredImage, setFeaturedImage] = useState(car.images[0]);

  const handleGalleryClick = (image) => {
    setFeaturedImage(image);
  };

  return (
    <>
      <section className="h-auto mt-24 max-w-screen w-screen">
        <div className="min-h-[30vh] h-auto relative w-full overflow-hidden">
          <div className="h-full w-full">
            <Image
              priority
              quality={90}
              fill={true}
              src={CarDetailBG}
              alt="Car Detail BG"
              className="object-cover bg-cover h-full relative"
            />
          </div>
          <div className="absolute top-1/3 lg:top-[45%] left-[40%] -translate-x-1/2 -translate-y-1/2 bg-[#141b22]/90 h-[100vh] w-72 md:w-96 lg:w-[36rem] -rotate-12 flex flex-col justify-center pt-16 lg:pt-10 xl:pt-16 items-center space-y-8">
            <h1 className="text-white font-montserrat font-bold xl:text-5xl md:text-4xl text-2xl rotate-12">
              {car.model}
            </h1>

            <div className="ml-3 text-white font-montserrat xl:text-base text-sm font-semibold rotate-12">
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/">Vehicle Lisings</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/">Peugeot</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </div>
        </div>

        <div className="max-w-6xl w-full px-3 mx-auto flex flex-col lg:flex-row lg:px-0 justify-center items-start space-y-4 space-x-0 lg:space-y-0 lg:space-x-8 font-montserrat text-base py-12">
          <div className="w-full lg:w-3/4 flex flex-col justify-center items-center space-y-6">
            <div className="w-full flex flex-col justify-center items-start space-y-6 h-auto">
              <div className="w-full flex justify-start items-center">
                <Image
                  src={featuredImage}
                  alt="Car Image"
                  priority
                  className="w-full object-center object-cover"
                  width={600}
                  height={500}
                  quality={80}
                />
              </div>
              <div className="w-full flex lg:justify-stretch justify-between items-center space-x-4 overflow-hidden">
                <Image
                  src={car.images[1]}
                  alt={`Car Image`}
                  priority
                  className="object-center object-cover cursor-pointer"
                  onClick={() => handleGalleryClick(car.images[1])}
                  width={400}
                  height={300}
                  quality={75}
                />
                <Image
                  src={car.images[2]}
                  alt={`Car Image`}
                  priority
                  className="object-center object-cover cursor-pointer"
                  onClick={() => handleGalleryClick(car.images[2])}
                  width={400}
                  height={300}
                  quality={75}
                />
              </div>
            </div>
            <div className="w-full flex flex-col justify-center items-start">
              <h2 className="w-full font-bold text-base text-primary py-5 border-b border-b-gray-300">
                Vehicle Specifications
              </h2>
              <div className="w-full flex flex-col lg:flex-row justify-between space-y-3 lg:space-y-0 items-start text-sm py-8">
                <ul className="w-full lg:w-1/2 flex flex-col space-y-3 font-semibold text-left">
                  <li className="w-full justify-between flex items-center pr-16">
                    <span className="font-normal">Make: </span>
                    <span className="">Lamborghini</span>
                  </li>
                  <li className="w-full justify-between flex items-center pr-16">
                    <span className="font-normal">Year: </span>
                    <span>2019</span>
                  </li>
                  <li className="w-full justify-between flex items-center pr-16">
                    <span className="font-normal">VIN: </span>
                    <span>1VXEDYROTER</span>
                  </li>
                  <li className="w-full justify-between flex items-center pr-16">
                    <span className="font-normal">Fuel: </span>
                    <span>Hybrid</span>
                  </li>
                  <li className="w-full justify-between flex items-center pr-16">
                    <span className="font-normal">Horsepower(HP): </span>
                    <span>230</span>
                  </li>
                  <li className="w-full justify-between flex items-center pr-16">
                    <span className="font-normal">Doors: </span>
                    <span>2</span>
                  </li>
                  <li className="w-full justify-between flex items-center pr-16">
                    <span className="font-normal">Seats: </span>
                    <span>Front</span>
                  </li>
                  <li className="w-full justify-between flex items-center pr-16">
                    <span className="font-normal">Interior Color: </span>
                    <span>Blue</span>
                  </li>
                  <li className="w-full justify-between flex items-center pr-16">
                    <span className="font-normal">Warranty: </span>
                    <span>Fixed</span>
                  </li>
                </ul>
                <ul className="w-full lg:w-1/2 flex flex-col space-y-3 font-semibold">
                  <li className="w-full justify-between flex items-center pr-16">
                    <span className="font-normal">Stock Status: </span>
                    <span>In Stock</span>
                  </li>
                  <li className="w-full justify-between flex items-center pr-16">
                    <span className="font-normal">Mileage: </span>
                    <span>2000</span>
                  </li>
                  <li className="w-full justify-between flex items-center pr-16">
                    <span className="font-normal">Version: </span>
                    <span>3.8 HDI</span>
                  </li>
                  <li className="w-full justify-between flex items-center pr-16">
                    <span className="font-normal">Engine, cm3: </span>
                    <span>3900</span>
                  </li>
                  <li className="w-full justify-between flex items-center pr-16">
                    <span className="font-normal">Transmission: </span>
                    <span>Automatic</span>
                  </li>
                  <li className="w-full justify-between flex items-center pr-16">
                    <span className="font-normal">Condition: </span>
                    <span>New</span>
                  </li>
                  <li className="w-full justify-between flex items-center pr-16">
                    <span className="font-normal">Color: </span>
                    <span>Brown</span>
                  </li>
                  <li className="w-full justify-between flex items-center pr-16">
                    <span className="font-normal">Price Type: </span>
                    <span>Fixed</span>
                  </li>
                </ul>
              </div>
              <div className="py-8">
                <Tabs defaultValue="description" className="w-full">
                  <TabsList className="">
                    <TabsTrigger
                      value="description"
                      className="!text-left !lg:text-left p-4 font-semibold data-[state=active]:bg-transparent data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-secondary"
                    >
                      Vehicle Description
                    </TabsTrigger>
                    <TabsTrigger
                      value="features"
                      className="!text-left !lg:text-left p-4 font-semibold data-[state=active]:bg-transparent data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-secondary"
                    >
                      Features & Options
                    </TabsTrigger>
                    <TabsTrigger
                      value="review"
                      className="!text-left !lg:text-left p-4 font-semibold data-[state=active]:bg-transparent data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-secondary"
                    >
                      Reviews
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent
                    value="description"
                    className="font-medium text-sm py-3"
                  >
                    Lorem ipsum dolor sit amet, qui minim labore adipisicing
                    minim sint cillum sint consectetur cupidatat. Lorem ipsum
                    dolor sit amet, officia excepteur ex fugiat reprehenderit
                    enim labore culpa sint ad nisi Lorem pariatur mollit ex esse
                    exercitation amet. Nisi anim cupidatat excepteur officia.
                    Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet
                    voluptate voluptate dolor minim nulla est proident. Nostrud
                    officia pariatur ut officia. Sit irure elit esse ea nulla
                    sunt ex occaecat reprehenderit commodo officia dolor Lorem
                    duis laboris cupidatat officia voluptate. Culpa proident
                    adipisicing id nulla nisi laboris ex in Lorem sunt duis
                    officia eiusmod. Aliqua reprehenderit commodo ex non
                    excepteur duis sunt velit enim. Voluptate laboris sint
                    cupidatat ullamco ut ea consectetur et est culpa et culpa
                    duis.
                  </TabsContent>
                  <TabsContent
                    value="features"
                    className="font-medium text-sm py-3"
                  >
                    Lorem ipsum dolor sit amet, qui minim labore adipisicing
                    minim sint cillum sint consectetur cupidatat. Lorem ipsum
                    dolor sit amet, officia excepteur ex fugiat reprehenderit
                    enim labore culpa sint ad nisi Lorem pariatur mollit ex esse
                    exercitation amet. Nisi anim cupidatat excepteur officia.
                    Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet
                    voluptate voluptate dolor minim nulla est proident. Nostrud
                    officia pariatur ut officia. Sit irure elit esse ea nulla
                    sunt ex occaecat reprehenderit commodo officia dolor Lorem
                    duis laboris cupidatat officia voluptate. Culpa proident
                    adipisicing id nulla nisi laboris ex in Lorem sunt duis
                    officia eiusmod. Aliqua reprehenderit commodo ex non
                    excepteur duis sunt velit enim. Voluptate laboris sint
                    cupidatat ullamco ut ea consectetur et est culpa et culpa
                    duis.
                  </TabsContent>
                  <TabsContent
                    value="review"
                    className="font-medium text-sm py-3"
                  >
                    Lorem ipsum dolor sit amet, qui minim labore adipisicing
                    minim sint cillum sint consectetur cupidatat. Lorem ipsum
                    dolor sit amet, officia excepteur ex fugiat reprehenderit
                    enim labore culpa sint ad nisi Lorem pariatur mollit ex esse
                    exercitation amet. Nisi anim cupidatat excepteur officia.
                    Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet
                    voluptate voluptate dolor minim nulla est proident. Nostrud
                    officia pariatur ut officia. Sit irure elit esse ea nulla
                    sunt ex occaecat reprehenderit commodo officia dolor Lorem
                    duis laboris cupidatat officia voluptate. Culpa proident
                    adipisicing id nulla nisi laboris ex in Lorem sunt duis
                    officia eiusmod. Aliqua reprehenderit commodo ex non
                    excepteur duis sunt velit enim. Voluptate laboris sint
                    cupidatat ullamco ut ea consectetur et est culpa et culpa
                    duis.
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/4 flex flex-col justify-center items-center space-y-5 font-montserrat text-sm text-primary font-semibold">
            <div className="w-full bg-[#F1F5FA] flex flex-col justify-center items-center space-y-5 px-4">
              <div className="w-full bg-[#253241] flex flex-col items-center text-primary-foreground -mx-4">
                <h2 className="w-full py-4 border-b border-b-gray-500 text-center">
                  <span className="font-medium mb-1 mr-1">Price</span>$13/Hour
                </h2>
                <h2 className="w-full flex justify-center items-center">
                  <span className="w-1/2 text-center border-r border-gray-500 py-4 ">
                    $13/Hour
                  </span>
                  <span className="w-1/2 text-center py-4">$55/Day</span>
                </h2>
              </div>
              <Datepicker
                className="p-3 bg-primary-foreground w-full"
                showShortcuts={true}
              />
              <input
                type="text"
                name="pickup_location"
                id="pickup_location"
                className="p-3 bg-primary-foreground w-full"
                placeholder="Pickup Location"
              />
              <input
                type="text"
                name="dropoff_location"
                id="dropoff_location"
                className="p-3 bg-primary-foreground w-full"
                placeholder="Pickup Location"
              />
              <div className="w-full flex justify-between items-center py-2 border-b border-b-gray-500">
                <span className="flex items-center">
                  <input
                    type="checkbox"
                    name="baby_seat"
                    id="baby_seat"
                    className="mr-2"
                  />
                  <label htmlFor="baby_seat">BABY SEAT</label>
                </span>
                <span className="font-semibold">$100/DAY</span>
              </div>
              <div className="w-full flex justify-between items-center py-2 border-b border-b-gray-500">
                <span className="flex items-center">
                  <input
                    type="checkbox"
                    name="baby_seat"
                    id="baby_seat"
                    className="mr-2"
                  />
                  <label htmlFor="baby_seat">GPS NAVIGATION</label>
                </span>
                <span className="font-semibold">$300/DAY</span>
              </div>
              <div className="w-full flex justify-between items-center py-2 border-b border-b-gray-500">
                <span className="flex items-center">
                  <input
                    type="checkbox"
                    name="baby_seat"
                    id="baby_seat"
                    className="mr-2"
                  />
                  <label htmlFor="baby_seat">RENT A DRIVER</label>
                </span>
                <span className="font-semibold">$100/DAY</span>
              </div>
              <Button className="w-full">BOOK NOW</Button>
              <p className="text-xs pb-8">
                <span className="text-red-500">*</span> You pay only a deposit
                of 20%
              </p>
            </div>
            <div className="bg-white w-full flex flex-col justify-center items-center border border-gray-500">
              <div className="w-full bg-[#253241] flex justify-center space-x-3 items-center text-primary-foreground p-4 text-white">
                <FaCircleUser className="w-16 h-16" />
                <div className="flex flex-col justify-center space-y-1">
                  <p>Leon Davis</p>
                  <p className="font-medium">Member Since: December</p>
                  <p>2023</p>
                  <p>PROFILE</p>
                </div>
              </div>
              <div className="flex justify-center items-center space-x-3 py-8">
                <MdOutlinePhone className="w-8 h-8 fill-secondary" />
                <span>Contact Seller</span>
              </div>
            </div>
            <div className="w-full bg-[#F1F5FA] flex flex-col justify-center items-center space-y-5 px-4">
              <div className="w-full bg-[#253241] flex flex-col items-center text-primary-foreground -mx-4">
                <h2 className="w-full py-6 border-b border-b-gray-500 px-4 font-bold">
                  MESSAGE SELLER
                </h2>
              </div>
              <div className="w-full flex flex-col justify-center items-start space-y-2">
                <label htmlFor="name">Your Name (required)</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="bg-white w-full p-3 rounded-lg"
                />
              </div>
              <div className="w-full flex flex-col justify-center items-start space-y-2">
                <label htmlFor="email">Your Email (required)</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-white w-full p-3 rounded-lg"
                />
              </div>
              <div className="w-full flex flex-col justify-center items-start space-y-2">
                <label htmlFor="message">Your Message (required)</label>
                <textarea
                  name="message"
                  id="message"
                  className="bg-white w-full p-3 rounded-lg h-12 resize-none"
                />
              </div>
              <Button className="w-full">SEND MESSAGE</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
