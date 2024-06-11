"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Peugeot from "@/../public/homepage/peugeot-508.jpg";
import Mercedes from "@/../public/homepage/mercedes-amg.jpg";
import Ford from "@/../public/homepage/ford-st.jpg";
import BMWFX from "@/../public/homepage/bmw-fx.jpg";
import AudiS5 from "@/../public/homepage/audi-s5.jpg";
import BMW7 from "@/../public/homepage/bmw-7.jpg";
import AudiR8 from "@/../public/homepage/audi-r8.jpg";
import Jaguar from "@/../public/homepage/jaguar.jpg";
import LogoWhite from "@/../public/logowhite.png";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { MdOutlineHeadphones } from "react-icons/md";
import { CiMail } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import {
  FaFacebookF,
  FaGoogle,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaBehance,
} from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import Link from "next/link";

export default function Page() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      slidesToScroll: 1,
      loop: "true",
      align: "center",
    },
    [Autoplay()],
  );
  var images = [Peugeot, Mercedes, Ford, BMWFX, AudiS5, BMW7, AudiR8, Jaguar];
  return (
    <>
      <section className="h-auto bg-primary">
        <div className="max-w-6xl mx-auto w-full px-3 py-12 flex flex-col justify-center items-center space-y-7 text-white font-montserrat">
          <h1 className="font-bold xl:text-4xl md:text-3xl text-2xl">
            Call Us Today For Booking Your Next Ride
          </h1>
          <h4 className="font-normal xl:text-base text-sm">
            Brought him them seas lesser yielding without also bring you unto
          </h4>
          <Button variant="dark" className="py-8 px-7">
            BOOKING CAR
          </Button>
        </div>
        <div className="w-full flex justify-stretch items-center">
          <div className="carembla w-full ml-auto">
            <div className="carembla__viewport" ref={emblaRef}>
              <div className="carembla__container">
                {images.map((image, index) => {
                  return (
                    <div key={index} className="carembla__slide">
                      <Image
                        src={image}
                        alt="Car Image"
                        className="object-center object-cover h-full w-full"
                      />
                    </div>
                  );
                })}{" "}
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-[#121820] h-auto flex flex-col justify-center items-center">
        <div className="w-full border-b border-gray-300">
          <div className="py-12 max-w-6xl mx-auto w-full flex flex-col justify-center items-center space-y-14">
            <Image
              src={LogoWhite}
              alt="Logo"
              priority
              className="object-center object-cover w-28"
            />
            <div className="w-[40%] flex justify-evenly items-center">
              <Link href="#"><FaFacebookF className="w-9 h-9 p-3 bg-primary rounded-full fill-white hover:bg-secondary cursor-pointer" /></Link>
              <Link href="#"><FaTwitter className="w-9 h-9 p-3 bg-primary rounded-full fill-white hover:bg-secondary cursor-pointer" /></Link>
              <Link href="#"><FaLinkedin className="w-9 h-9 p-3 bg-primary rounded-full fill-white hover:bg-secondary cursor-pointer" /></Link>
              <Link href="#">
                <FaYoutube className="w-9 h-9 p-3 bg-primary rounded-full fill-white hover:bg-secondary cursor-pointer" />
              </Link>
              <Link href="#">
                <FaGoogle className="w-9 h-9 p-3 bg-primary rounded-full fill-white hover:bg-secondary cursor-pointer" />
              </Link>
              <Link href="#">
                <FaInstagram className="w-9 h-9 p-3 bg-primary rounded-full fill-white hover:bg-secondary cursor-pointer" />
              </Link>
              <Link href="#">
                <FaBehance className="w-9 h-9 p-3 bg-primary rounded-full fill-white hover:bg-secondary cursor-pointer" />
              </Link>
            </div>
            <div className="w-full flex justfiy-around items-center font-montserrat text-primary-foreground">
              <div className="w-1/3 flex flex-col justify-center items-start space-y-8 text-sm px-4">
                <h2 className="text-base font-bold">About Us</h2>
                <p className="font-medium font-gray-200">
                  Ceipisicing elit sed do eiusmod tempor laboe dolore magna
                  aliqa.
                </p>
                <div className="flex flex-col w-full justify-center items-start space-y-4 text-gray-200">
                  <p className="flex items-center space-x-2">
                    <IoLocationOutline className="w-6 h-6 fill-gray-200" />
                    <span>3135 Oliver St, Fort Worth TX 76134</span>
                  </p>
                  <p className="flex items-center space-x-2">
                    <CiMail className="w-6 h-6 fill-gray-200" />
                    <span>support@domain.com</span>
                  </p>
                  <p className="flex items-center space-x-2">
                    <MdOutlineHeadphones className="w-6 h-6 fill-gray-200" />
                    <span>
                      Phone:+ <span className="font-bold">(123) 456 74700</span>
                    </span>
                  </p>
                </div>
              </div>
              <div className="w-1/3 flex flex-col justify-center items-start space-y-8 text-sm px-6">
                <h2 className="text-base font-bold">Customer Links</h2>
                <div className="flex w-full justify-between items-start text-gray-200">
                  <ul className="flex flex-col justify-center items-start space-y-3">
                    <li>
                      <Link
                        href="#"
                        className="flex items-center space-x-2 stroke-gray-200 font-montserrat hover:fill-secondary"
                      >
                        <IoIosArrowForward className="w-4 h-4" />
                        <span>Latest Cars</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="flex items-center space-x-2 fill-gray-200 font-montserrat hover:fill-secondary"
                      >
                        <IoIosArrowForward className="w-4 h-4" />
                        <span>Featured Cars</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="flex items-center space-x-2 fill-gray-200 font-montserrat hover:fill-secondary"
                      >
                        <IoIosArrowForward className="w-4 h-4" />
                        <span>Sell Your Car</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="flex items-center space-x-2 fill-gray-200 font-montserrat hover:fill-secondary"
                      >
                        <IoIosArrowForward className="w-4 h-4" />
                        <span>Buy a Car</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="flex items-center space-x-2 fill-gray-200 font-montserrat hover:fill-secondary"
                      >
                        <IoIosArrowForward className="w-4 h-4" />
                        <span>Reviews</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="flex items-center space-x-2 fill-gray-200 font-montserrat hover:fill-secondary"
                      >
                        <IoIosArrowForward className="w-4 h-4" />
                        <span>Latest News</span>
                      </Link>
                    </li>
                  </ul>
                  <ul className="flex flex-col justify-center items-start space-y-3">
                    <li>
                      <Link
                        href="#"
                        className="flex items-center space-x-2 stroke-gray-200 font-montserrat hover:fill-secondary"
                      >
                        <IoIosArrowForward className="w-4 h-4" />
                        <span>Services</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="flex items-center space-x-2 fill-gray-200 font-montserrat hover:fill-secondary"
                      >
                        <IoIosArrowForward className="w-4 h-4" />
                        <span>About Us</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="flex items-center space-x-2 fill-gray-200 font-montserrat hover:fill-secondary"
                      >
                        <IoIosArrowForward className="w-4 h-4" />
                        <span>Inventory</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="flex items-center space-x-2 fill-gray-200 font-montserrat hover:fill-secondary"
                      >
                        <IoIosArrowForward className="w-4 h-4" />
                        <span>Parts Shop</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="flex items-center space-x-2 fill-gray-200 font-montserrat hover:fill-secondary"
                      >
                        <IoIosArrowForward className="w-4 h-4" />
                        <span>Contacts</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-1/3 flex flex-col justify-center items-start space-y-8 text-sm px-4">
                <h2 className="text-base font-bold">Subscribe Newsletter</h2>
                <p className="font-medium font-gray-200">
                  Get our weekly newsletter for latest car news exclusive offers
                  and deals and more.
                </p>
                <input
                  type="email"
                  name="newsletter_email"
                  id="newsletter_email"
                  placeholder="YOUR EMAIL"
                  className="p-3 font-montserrat text-sm text-black outline-none font-medium w-full"
                />
                <Button className="py-8 px-6">SUBSCRIBE</Button>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-6xl px-3 w-full mx-auto py-14 flex flex-col lg:flex-row justify-center space-x-2 items-center font-lato font-normal text-gray-200 xl:text-base text-sm">
          <h2 className="">Copyrights &#169; 2020 Revus.</h2>
          <h2 className="">Auto Dealer Theme.</h2>
          <h2 className="">All rights reserved.</h2>
        </div>
      </footer>
    </>
  );
}
