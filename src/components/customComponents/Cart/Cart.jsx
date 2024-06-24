"use client";
import Image from "next/image";
import React from "react";
import CarDetailBG from "@/../public/cardetailbg.jpeg";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Cross } from "lucide-react";
import { FaCar, FaCross } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

export default function Page() {
  const cart = 1;
  return (
    <>
      <section className="h-auto mt-24">
        <div className="min-h-[30vh] h-auto  w-full overflow-hidden">
          <div className="h-full w-full relative">
            <Image
              priority
              quality={90}
              fill
              src={CarDetailBG}
              alt="Car Detail BG"
              className="object-cover bg-cover h-full w-full relative"
            />
          </div>
          <div className="absolute top-1/3 lg:top-[45%] left-[40%] -translate-x-1/2 -translate-y-1/2 bg-[#141b22]/90 h-[100vh] w-72 md:w-96 lg:w-[36rem] -rotate-12 flex flex-col justify-center pt-16 lg:pt-10 xl:pt-16 items-center space-y-8">
            <h1 className="text-white font-montserrat font-bold xl:text-5xl md:text-4xl text-2xl rotate-12">
              Lamborghini Urus
            </h1>

            <div className="ml-3 text-white font-montserrat xl:text-base text-sm font-semibold rotate-12">
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Card Page</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </div>
        </div>

        {cart === 0 ? (
          <div className="max-w-6xl mx-auto font-montserrat font-semibold text-primary text-sm py-16">
            <div className="w-full flex flex-col justify-center items-center space-y-8">
              <div className="bg-gray-200 p-3 w-full">
                Your cart is currently empty.
              </div>
              <Link href="/" className="w-full flex justify-center">
                <Button className="px-8">GO TO HOME</Button>
              </Link>
            </div>
          </div>
        ) : (
          <div className="w-full max-w-6xl mx-auto font-montserrat font-semibold text-primary text-sm flex flex-col justify-center py-16">
            <Table className="border border-gray-400">
              <TableHeader>
                <TableRow className="bg-gray-200 border-b border-b-gray-400">
                  <TableHead className="w-[10%] border-r border-r-gray-400 text-primary font-semibold"></TableHead>
                  <TableHead className="w-[20%] border-r border-r-gray-400 text-primary font-semibold"></TableHead>
                  <TableHead className="w-[30%] border-r border-r-gray-400 text-primary font-semibold">
                    Product
                  </TableHead>
                  <TableHead className="w-[15%] border-r border-r-gray-400 text-primary font-semibold">
                    Price
                  </TableHead>
                  <TableHead className="w-[25%] border-r border-r-gray-400 text-primary font-semibold">
                    Subtotal
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <IoClose className="w-6 h-6 fill-secondary" />
                  </TableCell>
                  <TableCell>
                    <FaCar className="w-8 h-8 " />
                  </TableCell>
                  <TableCell className="flex flex-col justify-center items-start space-y-3">
                    <span>Pickup 14/03/2024 California</span>
                    <span>Drop Off 15/03/2024</span>
                  </TableCell>
                  <TableCell>$110</TableCell>
                  <TableCell className="flex flex-col justify-center items-start space-y-3">
                    <span>Pickup 14/03/2024 California</span>
                    <span className="text-gray-500">
                      ($20.00 payable in deposit)
                    </span>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <div className="flex w-full justify-around items-center border-gray-400 border-l border-r border-b">
              <div className="flex justify-center items-center space-x-3 py-4">
                <input
                  type="text"
                  name="coupon"
                  id="coupon"
                  placeholder="Apply Coupon"
                  className="p-3 rounded-lg outline-none border border-gray-300"
                />
                <Button className="py-5 px-8">APPLY COUPON</Button>
              </div>
              <Button className="py-5 px-8">UPDATE CART</Button>
            </div>

            <div className="self-end w-1/2 my-5 border border-gray-400 p-4 flex flex-col justify-center items-start space-y-6">
              <h2 className="font-semibold xl:text-xl md:text-lg text-base">
                Cart Total
              </h2>
              <div className="w-full h-full border border-gray-400 flex flex-col items-start">
                <p className="border-b border-b-gray-400 h-full w-full flex justify-between">
                  <span className="w-3/4 border-r border-r-gray-400 py-5 px-3  h-full">
                    Subtotal
                  </span>
                  <span className="w-1/4 py-5 px-3  h-full">$113.30</span>
                </p>
                <p className="border-b border-b-gray-400 h-full w-full flex justify-between">
                  <span className="w-3/4 border-r border-r-gray-400 py-5 px-3  h-full">
                    Total
                  </span>
                  <span className="w-1/4 py-5 px-3  h-full">$113.30</span>
                </p>
                <p className="border-b border-b-gray-400 h-full w-full flex justify-between">
                  <span className="w-3/4 border-r border-r-gray-400 py-5 px-3  h-full">
                    Due Today
                  </span>
                  <span className="w-1/4 py-5 px-3  h-full">$20.00</span>
                </p>
                <p className="border-b border-b-gray-400 h-full w-full flex justify-between">
                  <span className="w-3/4 border-r border-r-gray-400 py-5 px-3  h-full">
                    Future Payments
                  </span>
                  <span className="w-1/4 py-5 px-3  h-full">$96.30</span>
                </p>
              </div>

              <Button className="w-full py-6">PROCEED TO CHECKOUT</Button>
            </div>
          </div>
        )}
      </section>
    </>
  );
}
