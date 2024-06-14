"use client";
import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Welcome from "./Welcome";
import Discount from "./Discount";
import Tabs from "./Tabs";
import Offers from "./Offers";
import Listing from "./Listing";
import Customers from "./Customers";
import { TopFooter, BottomFooter } from "./Footer";
import "aos/dist/aos.css";
import AOS from "aos";

export default function Page() {
  useEffect(() => {
    AOS.init({
      startEvent: "DOMContentLoaded",
      once: true,
      offset: 50,
    });
  }, []);

  return (
    <>
      <Navbar />
      <main
        data-aos="fade-up"
        data-aos-duration="400"
        className="h-auto w-full font-lato"
      >
        <Hero />
        <Welcome />
        <Discount />
        <Tabs />
        <Offers />
        <Listing />
        <Customers />
        <TopFooter />
        <BottomFooter />
      </main>
    </>
  );
}
