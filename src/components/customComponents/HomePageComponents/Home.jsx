"use client";
import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Welcome from "./Welcome";
import Discount from "./Discount";

export default function Page() {
  return (
    <>
      <main className="h-auto w-full font-lato">
        <Navbar />
        <Hero />
        <Welcome />
        <Discount />
      </main>
    </>
  );
}
