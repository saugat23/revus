import React from "react";
import Navbar from "@/components/customComponents/HomePageComponents//Navbar";
import { BottomFooter } from "@/components/customComponents/HomePageComponents/Footer";

export default function page({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <BottomFooter />
    </>
  );
}
