"use client";

import Image from "next/image";
import React, { useCallback } from "react";
import { ImQuotesLeft } from "react-icons/im";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import CustomerTestimonial from "./CustomerTestimonial";
import CustomerTestimonialImage from "@/../public/homepage/customertestimonial.jpg";

export default function Page() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      slidesToScroll: 1,
      loop: "true",
      align: "center",
    },
    [Autoplay()],
  );

  const onNavButtonClick = useCallback((emblaApi) => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop;

    resetOrStop();
  }, []);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
    emblaApi,
    onNavButtonClick,
  );

  return (
    <>
      <section className="h-auto w-full bg-[url('/homepage/customerbg.jpeg')] object-center object-fill">
        <div className="w-full max-w-7xl mx-auto px-3 py-12 flex flex-col justify-center items-center font-montserrat text-primary-foreground tracking-wider">
          <p className="font-semibold text-xs uppercase my-1">
            what people say about us
          </p>
          <h2 className="font-bold xl:text-4xl md:text-2xl text-lg flex items-center my-1">
            Customer <span className="text-secondary ml-2">Reviews</span>
          </h2>
          <div className="flex items-center space-x-3 my-8">
            <div className="h-[2px] w-4 bg-primary-foreground"></div>
            <ImQuotesLeft className="w-6 h-6 fill-white" />
            <div className="h-[2px] w-4 bg-primary-foreground"></div>
          </div>
          <div className="w-full flex justify-center items-center">
            <div className="customersembla">
              <div className="customersembla__viewport" ref={emblaRef}>
                <div className="customersembla__container">
                  <div className="customersembla__slide">
                    <div className="w-full h-full">
                      <CustomerTestimonial
                        imgSrc={CustomerTestimonialImage}
                        name="Marta Nash"
                        color="#34404e"
                        testimonial="Saying moved own. Above kind stars after was Seed Created fish divided creeping they're after them stars heaven seed male and and won't god also be said seas, had Waters give gathering life may third.
"
                      />
                    </div>
                  </div>
                  <div className="customersembla__slide">
                    <div className="w-full h-full">
                      <CustomerTestimonial
                        imgSrc={CustomerTestimonialImage}
                        name="Marta Nash"
                        color="#fff"
                        testimonial="Saying moved own. Above kind stars after was Seed Created fish divided creeping they're after them stars heaven seed male and and won't god also be said seas, had Waters give gathering life may third.
"
                      />
                    </div>
                  </div>
                  <div className="customersembla__slide">
                    <div className="w-full h-full">
                      <CustomerTestimonial
                        imgSrc={CustomerTestimonialImage}
                        name="Marta Nash"
                        color="#34404e"
                        testimonial="Saying moved own. Above kind stars after was Seed Created fish divided creeping they're after them stars heaven seed male and and won't god also be said seas, had Waters give gathering life may third.
"
                      />
                    </div>
                  </div>
                  <div className="customersembla__slide">
                    <div className="w-full h-full">
                      <CustomerTestimonial
                        imgSrc={CustomerTestimonialImage}
                        name="Marta Nash"
                        color="#fff"
                        testimonial="Saying moved own. Above kind stars after was Seed Created fish divided creeping they're after them stars heaven seed male and and won't god also be said seas, had Waters give gathering life may third.
"
                      />
                    </div>
                  </div>
                  <div className="customersembla__slide">
                    <div className="w-full h-full">
                      <CustomerTestimonial
                        imgSrc={CustomerTestimonialImage}
                        name="Marta Nash"
                        color="#34404e"
                        testimonial="Saying moved own. Above kind stars after was Seed Created fish divided creeping they're after them stars heaven seed male and and won't god also be said seas, had Waters give gathering life may third.
"
                      />
                    </div>
                  </div>
                  <div className="customersembla__slide">
                    <div className="w-full h-full">
                      <CustomerTestimonial
                        imgSrc={CustomerTestimonialImage}
                        name="Marta Nash"
                        color="#fff"
                        testimonial="Saying moved own. Above kind stars after was Seed Created fish divided creeping they're after them stars heaven seed male and and won't god also be said seas, had Waters give gathering life may third.
"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="customersembla__controls">
                <div className="embla__dots">
                  {scrollSnaps.map((_, index) => (
                    <DotButton
                      key={index}
                      onClick={() => onDotButtonClick(index)}
                      className={"embla__dot !border-2 !border-white".concat(
                        index === selectedIndex
                          ? " embla__dot--selected !bg-secondary"
                          : "",
                      )}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
