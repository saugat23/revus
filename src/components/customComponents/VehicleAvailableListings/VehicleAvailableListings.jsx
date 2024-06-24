import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import CarDetailBG from "@/../public/cardetailbg.jpeg";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { LuGauge } from "react-icons/lu";
import { FaRegStar } from "react-icons/fa";
import "./vehicle.css";
import useEmblaCarousel from "embla-carousel-react";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import { Button } from "@/components/ui/button";
import { MdOutlinePhone } from "react-icons/md";
import { FaCircleUser } from "react-icons/fa6";
import Datepicker from "react-tailwindcss-datepicker";

function Listings({ imgSrc, model, deposit, make, price }) {
  return (
    <motion.div
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      transition={{ type: "spring", stiffness: 60 }}
      className="h-auto w-auto flex flex-col justify-center items-center bg-primary text-primary-foreground hover:bg-secondary transition-colors duration-300 ease-in-out cursor-pointer relative group"
    >
      <div className="h-3/4 w-full relative">
        <Image
          src={imgSrc}
          priority
          alt={model}
          width={600}
          height={500}
          className="object-center object-fill"
        />
        <div className="absolute inset-0 bg-primary/70 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex justify-center items-center">
          <button className="absolute top-2 right-2">
            <FaRegStar className="inline w-full h-full p-2 bg-white fill-primary hover:fill-primary-foreground hover:bg-secondary transition-colors ease-in-out" />
          </button>
          <button className="text-primary bg-white p-3 text-xs font-medium hover:bg-secondary hover:text-secondary-foreground transition-colors ease-in-out flex items-center space-x-2">
            <LuGauge className="inline w-4 h-4" />
            <span> Add to Compare</span>
          </button>
        </div>
      </div>
      <div className="w-full bg-transparent py-6 flex flex-col justify-center items-center space-y-5">
        <div className="w-full flex justify-around items-center font-montserrat text-xs pb-5 border-b border-b-gray-400">
          <div className="px-2 flex space-x-2 border-r border-r-gray-400">
            <p>{(price * 1).toFixed(0)} /day</p>
          </div>
          <div className="px-2 flex space-x-2 border-r border-r-gray-400">
            <p>{(price * 7).toFixed(0)} /week</p>
          </div>
          <div className="px-2 flex space-x-2 border-r border-r-gray-400">
            <p>{(price * 30).toFixed(0)} /month</p>
          </div>
        </div>
        <h1 className="font-montserrat font-bold text-lg">
          {deposit && (
            <span className="bg-[#81d742] p-2 font-semibold text-white">
              DEPOSIT
            </span>
          )}{" "}
          {model}
        </h1>
        <div className="w-full flex justify-around items-center font-montserrat text-xs pb-5 border-b border-b-gray-400">
          <div className="px-2 flex space-x-2 border-r border-r-gray-400">
            <p>{make}</p>
          </div>
          <div className="px-2 flex space-x-2 border-r border-r-gray-400">
            <p>31500</p>
          </div>
          <div className="px-2 flex space-x-2 border-r border-r-gray-400">
            <p>Petrol</p>
          </div>
          <div className="px-2 flex space-x-2">
            <p>Automatic</p>
          </div>
        </div>
        <h1 className="w-full flex justify-center font-semibold items-center text-lg">
          ${(price / 24).toFixed(2)} /hour
        </h1>
      </div>
    </motion.div>
  );
}

export default function Page({ data }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    slidesToScroll: 1,
    loop: "true",
    align: "center",
  });
  const [cars, setCars] = useState([]);

  useEffect(() => {
    if (data && data.availableCars) {
      setCars(data.availableCars);
    }
  }, [data]);

  useEffect(() => {
    console.log("cars is ", cars); // Log cars to ensure it's an array of car objects
  }, [cars]);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <>
      <section>
        <div className="min-h-[40vh] h-auto relative w-full overflow-hidden">
          <div className="h-full w-full">
            <Image
              priority
              quality={90}
              fill={true}
              src={CarDetailBG}
              alt="Car Detail BG"
              className="object-cover bg-cover h-full relative"
            />
          </div>
          <div className="absolute top-1/3 lg:top-[45%] left-[40%] -translate-x-1/2 -translate-y-1/2 bg-[#141b22]/90 h-[100vh] w-72 md:w-96 lg:w-[36rem] -rotate-12 flex flex-col justify-center pt-16 lg:pt-10 xl:pt-16 items-center space-y-8">
            <h1 className="text-white font-montserrat font-bold xl:text-5xl md:text-4xl text-2xl rotate-12">
              Vehicle Listings
            </h1>

            <div className="ml-3 text-white font-montserrat xl:text-base text-sm font-semibold rotate-12">
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Vehicle Listings</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto w-full px-3 lg:px-0 flex flex-col justify-center items-start font-montserrat text-primary py-8 lg:py-10 xl:py-12">
          <h1 className="font-bold text-base lg:text-xl xl:text-3xl">
            Featured Cars
          </h1>

          <div className="w-full flex justify-center items-center">
            <div className="listingsembla">
              <div className="listingsembla__viewport" ref={emblaRef}>
                <div className="listingsembla__container">
                  {cars.map((car) => {
                    return (
                      <div
                        key={car.car_id}
                        className={`listingsembla__slide !basis-1/${cars.length}`}
                      >
                        <Listings
                          imgSrc={car.images[0]}
                          model={car.model}
                          make={car.year}
                          price={car.daily_rate}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="listingsembla__controls">
                <div className="listingsembla__buttons">
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
        </div>

        <div className="max-w-6xl w-full mx-auto px-3 lg:px-0 flex flex-col lg:flex-row justify-center items-start space-x-5 py-8 lg:py-10 xl:py-12 font-montserrat text-sm lg:text-base xl:text-lg">
          <div className="w-full lg:w-1/4 flex flex-col justify-center items-center space-y-5 font-montserrat text-sm text-primary font-semibold">
            <div className="w-full bg-[#F1F5FA] flex flex-col justify-center items-center space-y-5 px-4">
              <div className="w-full bg-[#253241] flex flex-col items-center text-primary-foreground -mx-4">
                <h2 className="w-full py-4 border-b border-b-gray-500 text-center">
                  <span className="font-medium mb-1 mr-1">Price</span>$13/Hour
                </h2>
                <h2 className="w-full flex justify-center items-center">
                  <span className="w-1/2 text-center border-r border-gray-500 py-4 ">
                    $13/Hour
                  </span>
                  <span className="w-1/2 text-center py-4">$55/Day</span>
                </h2>
              </div>
              <Datepicker
                className="p-3 bg-primary-foreground w-full"
                showShortcuts={true}
              />
              <input
                type="text"
                name="pickup_location"
                id="pickup_location"
                className="p-3 bg-primary-foreground w-full"
                placeholder="Pickup Location"
              />
              <input
                type="text"
                name="dropoff_location"
                id="dropoff_location"
                className="p-3 bg-primary-foreground w-full"
                placeholder="Pickup Location"
              />
              <div className="w-full flex justify-between items-center py-2 border-b border-b-gray-500">
                <span className="flex items-center">
                  <input
                    type="checkbox"
                    name="baby_seat"
                    id="baby_seat"
                    className="mr-2"
                  />
                  <label htmlFor="baby_seat">BABY SEAT</label>
                </span>
                <span className="font-semibold">$100/DAY</span>
              </div>
              <div className="w-full flex justify-between items-center py-2 border-b border-b-gray-500">
                <span className="flex items-center">
                  <input
                    type="checkbox"
                    name="baby_seat"
                    id="baby_seat"
                    className="mr-2"
                  />
                  <label htmlFor="baby_seat">GPS NAVIGATION</label>
                </span>
                <span className="font-semibold">$300/DAY</span>
              </div>
              <div className="w-full flex justify-between items-center py-2 border-b border-b-gray-500">
                <span className="flex items-center">
                  <input
                    type="checkbox"
                    name="baby_seat"
                    id="baby_seat"
                    className="mr-2"
                  />
                  <label htmlFor="baby_seat">RENT A DRIVER</label>
                </span>
                <span className="font-semibold">$100/DAY</span>
              </div>
              <Button className="w-full">BOOK NOW</Button>
              <p className="text-xs pb-8">
                <span className="text-red-500">*</span> You pay only a deposit
                of 20%
              </p>
            </div>
            <div className="bg-white w-full flex flex-col justify-center items-center border border-gray-500">
              <div className="w-full bg-[#253241] flex justify-center space-x-3 items-center text-primary-foreground p-4 text-white">
                <FaCircleUser className="w-16 h-16" />
                <div className="flex flex-col justify-center space-y-1">
                  <p>Leon Davis</p>
                  <p className="font-medium">Member Since: December</p>
                  <p>2023</p>
                  <p>PROFILE</p>
                </div>
              </div>
              <div className="flex justify-center items-center space-x-3 py-8">
                <MdOutlinePhone className="w-8 h-8 fill-secondary" />
                <span>Contact Seller</span>
              </div>
            </div>
            <div className="w-full bg-[#F1F5FA] flex flex-col justify-center items-center space-y-5 px-4">
              <div className="w-full bg-[#253241] flex flex-col items-center text-primary-foreground -mx-4">
                <h2 className="w-full py-6 border-b border-b-gray-500 px-4 font-bold">
                  MESSAGE SELLER
                </h2>
              </div>
              <div className="w-full flex flex-col justify-center items-start space-y-2">
                <label htmlFor="name">Your Name (required)</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="bg-white w-full p-3 rounded-lg"
                />
              </div>
              <div className="w-full flex flex-col justify-center items-start space-y-2">
                <label htmlFor="email">Your Email (required)</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-white w-full p-3 rounded-lg"
                />
              </div>
              <div className="w-full flex flex-col justify-center items-start space-y-2">
                <label htmlFor="message">Your Message (required)</label>
                <textarea
                  name="message"
                  id="message"
                  className="bg-white w-full p-3 rounded-lg h-12 resize-none"
                />
              </div>
              <Button className="w-full">SEND MESSAGE</Button>
            </div>
          </div>

          <div className="w-full lg:w-3/4 flex flex-col justify-center items-center space-y-5 font-montserrat text-sm text-primary font-semibold"></div>
        </div>
      </section>
    </>
  );
}
