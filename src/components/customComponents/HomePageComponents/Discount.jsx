"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import CarListing from "./CarListing";
import Peugeot from "@/../public/homepage/peugeot-508.jpg";
import Mercedes from "@/../public/homepage/mercedes-amg.jpg";
import Ford from "@/../public/homepage/ford-st.jpg";
import BMWFX from "@/../public/homepage/bmw-fx.jpg";
import AudiS5 from "@/../public/homepage/audi-s5.jpg";
import BMW7 from "@/../public/homepage/bmw-7.jpg";
import AudiR8 from "@/../public/homepage/audi-r8.jpg";
import Jaguar from "@/../public/homepage/jaguar.jpg";
import { Button } from "@/components/ui/button";
import Autoplay from "embla-carousel-autoplay";

export default function Page() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      slidesToScroll: 1,
      loop: "true",
      align: "end",
    },
    [Autoplay()],
  );

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
                  <div className="embla__slide">
                    <div className="w-full h-full">
                      <CarListing
                        imgSrc={Peugeot}
                        model="Peugeot 508 Sports"
                        price={44}
                        make={2019}
                        range={2000}
                        type="Petrol"
                      />
                    </div>
                  </div>
                  <div className="embla__slide">
                    <div className="w-full h-full">
                      <CarListing
                        imgSrc={Mercedes}
                        model="Mercedes AMG"
                        price={20}
                        make={2016}
                        range={12000}
                        type="LPG"
                      />
                    </div>
                  </div>
                  <div className="embla__slide">
                    <div className="w-full h-full">
                      <CarListing
                        imgSrc={Ford}
                        model="Ford Focus ST"
                        price={62}
                        make={2019}
                        range={20000}
                        type="Diesel"
                      />
                    </div>
                  </div>
                  <div className="embla__slide">
                    <div className="w-full h-full">
                      <CarListing
                        imgSrc={BMWFX}
                        model="BMW FX"
                        price={72}
                        make={2019}
                        range={8000}
                        type="Diesel"
                      />
                    </div>
                  </div>
                  <div className="embla__slide">
                    <div className="w-full h-full">
                      <CarListing
                        imgSrc={AudiS5}
                        model="Audi S5 Sportsback"
                        price={72}
                        make={2019}
                        range={16000}
                        type="Electric"
                      />
                    </div>
                  </div>
                  <div className="embla__slide">
                    <div className="w-full h-full">
                      <CarListing
                        imgSrc={BMW7}
                        model="BMW 7 Series"
                        price={100}
                        make={2019}
                        range={12000}
                        type="Electric"
                      />
                    </div>
                  </div>
                  <div className="embla__slide">
                    <div className="w-full h-full">
                      <CarListing
                        imgSrc={AudiR8}
                        model="Audi R8"
                        price={112}
                        make={2022}
                        range={12000}
                        type="Diesel"
                      />
                    </div>
                  </div>
                  <div className="embla__slide">
                    <div className="w-full h-full">
                      <CarListing
                        imgSrc={Jaguar}
                        model="Jaguar XJ50"
                        price={102}
                        make={2020}
                        range={15000}
                        type="LPG"
                      />
                    </div>
                  </div>
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
