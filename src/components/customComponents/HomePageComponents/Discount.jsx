"use client";

import React, { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import CarListing from "./CarListing";
import { Button } from "@/components/ui/button";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";
import { getAllCars } from "@/services/api";

export default function Page() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      slidesToScroll: 1,
      loop: "true",
      align: "end",
    },
    [Autoplay()],
  );
  const [cars, setCars] = useState([]);

  useEffect(() => {
    async function fetchCars() {
      const response = await getAllCars();
      console.log(response);
      setCars(response.cars);
    }

    fetchCars();
  }, []);

  console.log(cars);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <>
      <section className="bg-primary h-auto">
        <div className="h-full w-full py-16 flex flex-col justify-center items-center space-y-9 font-montserrat text-white px-3">
          <div className="w-full max-w-6xl mx-auto flex flex-col space-y-3 justify-center items-start">
            <p className="font-semibold md:text-xs text-[10px] uppercase">
              helps you to find your next car easily
            </p>
            <h2 className="font-bold xl:text-4xl text-3xl flex items-center">
              Discount <span className="text-secondary ml-2">Vehicles</span>
            </h2>
          </div>
          <div className="w-full flex justify-end items-center">
            <div className="embla  !w-full !2xl:max-w-[80%] !2xl:w-[80%] ml-auto">
              <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                  {cars.map((car) => {
                    return (
                      <>
                        <div key={car.car_id} className="embla__slide">
                          <div className="w-full h-full">
                            <Link href={`/car_details/${car.car_id}`}>
                              <CarListing
                                id={car.car_id}
                                imgSrc={car.images[0]}
                                model={car.model}
                                price={car.daily_rate}
                                make={car.year}
                                regNumber={car.registration_number}
                              />
                            </Link>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>

              <div className="!hidden !xl:flex embla__controls">
                <div className="embla__buttons">
                  <PrevButton
                    onClick={onPrevButtonClick}
                    disabled={prevBtnDisabled}
                  />
                  <NextButton
                    onClick={onNextButtonClick}
                    disabled={nextBtnDisabled}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full max-w-6xl mx-auto flex flex-col justify-center items-start">
            <Button
              type="button"
              variant="dark"
              className="font-medium text-sm py-8 px-6"
            >
              View All Cars Listings
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
