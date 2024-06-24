"use client";
import React from "react";
import VehicleAvailableListings from "@/components/customComponents/VehicleAvailableListings/VehicleAvailableListings";
import { checkAvailability } from "@/services/api";
import { useSearchParams } from "next/navigation";

export default function Page() {
  const vehicleParams = useSearchParams();
  const start_date = vehicleParams.get("start_date");
  const end_date = vehicleParams.get("end_date");
  const data = {};

  async function fetchListings() {
    const formData = {
      start_date: start_date,
      end_date: end_date,
    };

    data = await checkAvailability(formData);
  }
  return (
    <>
      <VehicleAvailableListings />
    </>
  );
}
