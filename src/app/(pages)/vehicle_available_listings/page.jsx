"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const VehicleAvailableListings = dynamic(
  () =>
    import(
      "@/components/customComponents/VehicleAvailableListings/VehicleAvailableListings"
    ),
  {
    ssr: false,
  },
);
import { checkAvailability, getAllCars } from "@/services/api";
import { useSearchParams } from "next/navigation";

function Search() {
  const vehicleParams = useSearchParams();
  const start_date = vehicleParams.get("start_date");
  const end_date = vehicleParams.get("end_date");
  const model = vehicleParams.get("model");
  const [data, setData] = useState(null);
  const [allCars, setAllCars] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchListings() {
      try {
        console.log("Fetching listings with params:", {
          start_date,
          end_date,
          model,
        });

        // Construct parameters object based on provided query params
        const params = {};
        if (start_date) params.start_date = start_date;
        if (end_date) params.end_date = end_date;
        if (model) params.model = model;

        // Only make the API call if at least one parameter is present
        if (Object.keys(params).length > 0) {
          const response = await checkAvailability(params);
          console.log("Fetched data:", response);
          setData(response);
        } else {
          console.log("No parameters provided for API call");
        }
      } catch (error) {
        console.error("Error fetching listings:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchListings();
  }, [start_date, end_date, model]);

  useEffect(() => {
    async function fetchAllCars() {
      try {
        console.log("Fetching All Cars");
        const response = await getAllCars();
        setAllCars(response.cars);
      } catch (error) {
        console.error("Error: ", error);
      }
    }

    fetchAllCars();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <VehicleAvailableListings data={data} allCars={allCars} />
    </>
  );
}

export default function Page() {
  return (
    <>
      <Suspense>
        <Search />
      </Suspense>
    </>
  );
}
