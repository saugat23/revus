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
import { FaPhone, FaPhoneAlt, FaUser } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import { MdOutlinePhone } from "react-icons/md";

export default function Page() {
  const [featuredImage, setFeaturedImage] = useState(AudiR8);

  const handleGalleryClick = (image) => {
    setFeaturedImage(image);
  };

  return (
    <>
      <section className="h-auto p-6">
        <div className="w-full flex justify-center items-start space-x-8 font-montserrat text-base">
          <div className="w-3/4 flex flex-col justify-center items-center space-y-6">
            <div className="w-full flex flex-col justify-center items-start space-y-6 h-auto">
              <div className="w-full flex justify-start items-center">
                <Image
                  src={featuredImage}
                  alt="Car Image"
                  priority
                  width={500}
                  height={400}
                  className="w-full h-96 object-center object-cover"
                  quality={75}
                />
              </div>
              <div className="w-full flex justify-stretch items-center space-x-4">
                <Image
                  src={Peugeot}
                  alt={`Car Image`}
                  priority
                  width={100}
                  height={80}
                  className="w-1/4 h-full cursor-pointer"
                  onClick={() => handleGalleryClick(Peugeot)}
                  quality={75}
                />
                <Image
                  src={Mercedes}
                  alt={`Car Image`}
                  priority
                  width={100}
                  height={80}
                  className="w-1/4 h-full cursor-pointer"
                  onClick={() => handleGalleryClick(Mercedes)}
                  quality={75}
                />
                <Image
                  src={Ford}
                  alt={`Car Image`}
                  priority
                  width={100}
                  height={80}
                  className="w-1/4 h-full cursor-pointer"
                  onClick={() => handleGalleryClick(Ford)}
                  quality={75}
                />
                <Image
                  src={BMW7}
                  alt={`Car Image`}
                  priority
                  width={100}
                  height={80}
                  className="w-1/4 h-full cursor-pointer"
                  onClick={() => handleGalleryClick(BMW7)}
                  quality={75}
                />
                <Image
                  src={Jaguar}
                  alt={`Car Image`}
                  priority
                  width={100}
                  height={80}
                  className="w-1/4 h-full cursor-pointer"
                  onClick={() => handleGalleryClick(Jaguar)}
                  quality={75}
                />
              </div>
            </div>
            <div className="w-full flex flex-col justify-center items-start">
              <h2 className="w-full font-bold text-base text-primary py-5 border-b border-b-gray-300">
                Vehicle Specifications
              </h2>
              <div className="w-full flex justify-between items-start text-sm py-8">
                <ul className="flex flex-col space-y-3 font-normal">
                  <li>Make:</li>
                  <li>Year:</li>
                  <li>VIN</li>
                  <li>Fuel:</li>
                  <li>Horsepower (HP) :</li>
                  <li>Doors:</li>
                  <li>Drive:</li>
                  <li>Color:</li>
                  <li>Price Type:</li>
                </ul>
                <ul className="flex flex-col space-y-3 font-semibold">
                  <li>Lamborghini</li>
                  <li>2019</li>
                  <li>1VXEDYROTER</li>
                  <li>Hybrid</li>
                  <li>230</li>
                  <li>2</li>
                  <li>Front</li>
                  <li>Blue</li>
                  <li>Fixed</li>
                </ul>
                <ul className="flex flex-col space-y-3 font-normal">
                  <li>Stock Status:</li>
                  <li>Mileage:</li>
                  <li>Version</li>
                  <li>Engine, cm3:</li>
                  <li>Transimission:</li>
                  <li>Condition:</li>
                  <li>Seats:</li>
                  <li>Inferior Color:</li>
                  <li>Warranty:</li>
                </ul>
                <ul className="flex flex-col space-y-3 font-semibold">
                  <li>In Stock</li>
                  <li>20000</li>
                  <li>3.8 HDI</li>
                  <li>3900</li>
                  <li>Automatic</li>
                  <li>New</li>
                  <li>5</li>
                  <li>Brown</li>
                  <li>Yes</li>
                </ul>
              </div>
              <div className="py-8">
                <Tabs defaultValue="description" className="w-full">
                  <TabsList>
                    <TabsTrigger
                      value="description"
                      className="font-semibold data-[state=active]:bg-transparent data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-secondary"
                    >
                      Vehicle Description
                    </TabsTrigger>
                    <TabsTrigger
                      value="features"
                      className="font-semibold data-[state=active]:bg-transparent data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-secondary"
                    >
                      Features & Options
                    </TabsTrigger>
                    <TabsTrigger
                      value="review"
                      className="font-semibold data-[state=active]:bg-transparent data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-secondary"
                    >
                      Reviews
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent
                    value="description"
                    className="font-medium text-sm"
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
                  <TabsContent value="features" className="font-medium text-sm">
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
                  <TabsContent value="review" className="font-medium text-sm">
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
          <div className="w-1/4 flex flex-col justify-center items-center space-y-5 font-montserrat text-sm text-primary font-semibold">
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
