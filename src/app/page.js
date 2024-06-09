import React from "react";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";

const Home = dynamic(
  () => import("@/components/customComponents/HomePageComponents/Home"),
  {
    loading: () => <p></p>,
  },
);

export default function Page() {
  return (
    <>
      <Home />
    </>
  );
}
