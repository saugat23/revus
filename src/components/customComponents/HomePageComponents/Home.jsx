"use client";
import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Welcome from "./Welcome";
import Discount from "./Discount";
import Tabs from "./Tabs";
import Offers from "./Offers";
import Listing from "./Listing";

export default function Page() {
  return (
    <>
      <main className="h-auto w-full font-lato">
        <Navbar />
        <Hero />
        <Welcome />
        <Discount />
        <Tabs />
        <Offers />
        <Listing />
      </main>
    </>
  );
}
