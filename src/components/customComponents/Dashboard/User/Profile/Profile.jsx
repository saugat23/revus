"use client";

import { IoCarOutline } from "react-icons/io5";
import { CiClock2 } from "react-icons/ci";
import CarListing from "@/components/customComponents/HomePageComponents/CarListing";
import AudiR8 from "@/../public/homepage/audi-r8.jpg";
import Link from "next/link";

export default function Page() {
  const carListings = [
    {
      id: 1,
      imgSrc: AudiR8,
      model: "Audi R8",
      price: 112,
      make: 2022,
      range: 12000,
      type: "Diesel",
    },
    {
      id: 2,
      imgSrc: AudiR8,
      model: "Audi R8",
      price: 112,
      make: 2022,
      range: 12000,
      type: "Diesel",
    },
    {
      id: 3,
      imgSrc: AudiR8,
      model: "Audi R8",
      price: 112,
      make: 2022,
      range: 12000,
      type: "Diesel",
    },
    {
      id: 4,
      imgSrc: AudiR8,
      model: "Audi R8",
      price: 112,
      make: 2022,
      range: 12000,
      type: "Diesel",
    },
    {
      id: 5,
      imgSrc: AudiR8,
      model: "Audi R8",
      price: 112,
      make: 2022,
      range: 12000,
      type: "Diesel",
    },
    {
      id: 6,
      imgSrc: AudiR8,
      model: "Audi R8",
      price: 112,
      make: 2022,
      range: 12000,
      type: "Diesel",
    },
    {
      id: 7,
      imgSrc: AudiR8,
      model: "Audi R8",
      price: 112,
      make: 2022,
      range: 12000,
      type: "Diesel",
    },
    {
      id: 8,
      imgSrc: AudiR8,
      model: "Audi R8",
      price: 112,
      make: 2022,
      range: 12000,
      type: "Diesel",
    },
  ];

  return (
    <>
      <section className="bg-white h-auto p-6 flex flex-col justify-center items-start space-y-4">
        <div className="bg-white w-full shadow-xl p-5 flex flex-col justify-center items-start space-y-3 rounded-lg">
          <h2 className="xl:text-lg text-base font-semibold font-montserrat text-primary">
            Car Availablity
          </h2>
          <div className="w-full flex justify-between items-center font-montserrat space-x-8 text-sm text-gray-500">
            <div className="w-1/5 px-3 rounded-lg border border-gray-300 flex justify-between items-center ">
              <IoCarOutline className="w-5 h-5 fill-gray-500" />
              <select className="p-3 outline-none bg-white">
                <option className="p-3" value="">
                  Select Make
                </option>
                <option className=" p-3" value="audi">
                  Audi
                </option>
                <option className=" p-3" value="bmw">
                  BMW
                </option>
                <option className=" p-3" value="bentley">
                  Bentley
                </option>
                <option className=" p-3" value="lamborghini">
                  Lamborghini
                </option>
              </select>
            </div>
            <div className="w-1/5 px-3 rounded-lg border border-gray-300 flex justify-between items-center ">
              <IoCarOutline className="w-5 h-5 fill-gray-500" />
              <select className="p-3 outline-none bg-white">
                <option className="p-3" value="">
                  Select Make
                </option>
                <option className=" p-3" value="audi">
                  Audi
                </option>
                <option className=" p-3" value="bmw">
                  BMW
                </option>
                <option className=" p-3" value="bentley">
                  Bentley
                </option>
                <option className=" p-3" value="lamborghini">
                  Lamborghini
                </option>
              </select>
            </div>
            <div className="w-1/5 px-3 rounded-lg border border-gray-300 flex justify-between items-center ">
              <input
                type="date"
                name="date"
                id="date"
                placeholder="Date"
                className="p-3 outline-none bg-white"
              />
            </div>
            <div className="w-1/5 px-3 rounded-lg border border-gray-300 flex justify-between items-center ">
              <CiClock2 className="w-5 h-5 fill-gray-500" />
              <select className="p-3 outline-none bg-white">
                <option className="p-3" value="">
                  Select Time
                </option>
                <option className=" p-3" value="audi">
                  Audi
                </option>
                <option className=" p-3" value="bmw">
                  BMW
                </option>
                <option className=" p-3" value="bentley">
                  Bentley
                </option>
                <option className=" p-3" value="lamborghini">
                  Lamborghini
                </option>
              </select>
            </div>
            <div className="w-1/5">
              <button
                type="button"
                className="text-white font-semibold bg-[#006aff] p-3 rounded-lg w-full"
              >
                Check
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white w-full shadow-xl p-5 flex flex-col justify-center items-start space-y-3 rounded-lg">
          <h2 className="xl:text-lg text-base font-semibold font-montserrat text-primary">
            Listings
          </h2>
          <div className="px-4 grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {carListings.map((car) => (
              <Link
                href={`/user_dashboard/profile/car_details/${car.id}`}
                key={car.id}
              >
                <CarListing
                  id={car.id}
                  imgSrc={car.imgSrc}
                  model={car.model}
                  price={car.price}
                  make={car.make}
                  range={car.range}
                  type={car.type}
                />
              </Link>
            ))}
          </div>{" "}
        </div>
      </section>
    </>
  );
}
