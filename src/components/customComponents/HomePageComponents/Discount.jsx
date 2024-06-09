"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";

export default function Page() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    slidesToScroll: "auto",
    loop: "true",
    align: "end",
  });

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <>
      <section className="bg-primary h-[80vh]">
        <div className="h-full w-full flex flex-col justify-center items-center space-y-9 font-montserrat text-white">
          <div className="w-full max-w-6xl mx-auto flex flex-col space-y-3 justify-center items-start">
            <p className="font-medium text-xs uppercase">
              helps you to find your next car easily
            </p>
            <h2 className="font-semibold xl:text-4xl md:text-2xl text-lg flex items-center">
              Discount <span className="text-secondary ml-2">Vehicles</span>
            </h2>
          </div>
          <div className="embla max-w-[80%] w-full ml-40 bg-green-500">
            <div className="embla__viewport" ref={emblaRef}>
              <div className="embla__container">
                <div className="embla__slide bg-red-200">
                  <div className="w-full h-full bg-white text-black">1</div>
                </div>
                <div className="embla__slide bg-red-200">
                  <div className="w-full h-full bg-white text-black">2</div>
                </div>
                <div className="embla__slide bg-red-200">
                  <div className="w-full h-full bg-white text-black">3</div>
                </div>
                <div className="embla__slide bg-red-200">
                  <div className="w-full h-full bg-white text-black">4</div>
                </div>
              </div>
            </div>

            <div className="embla__controls">
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
      </section>
    </>
  );
}
