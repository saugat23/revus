"use client";

import Image from "next/image";
import React, { useState } from "react";
import AuthBG from "@/../public/authbg.jpeg";
import { FaKey, FaMobile, FaUser } from "react-icons/fa6";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { Login } from "@/services/api";
import { toast } from "sonner";
import { Toaster } from "sonner";
import Loader from "@/components/customComponents/Loader";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export default function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function onSubmit(data) {
    setLoading(true);
    try {
      const response = await Login(data);
      toast.success("Logged in! Successfully!!");
      Cookies.set("token_loginhost", response.token, { expires: 7 });
      console.log("response : ", response);
      router.push("/host_dashboard");
    } catch (error) {
      console.error("Error: ", error);
      toast.error("Login Failed!!");
    } finally {
      setLoading(false);
    }
    reset();
  }

  return (
    <>
      <Toaster richColors position="bottom-right" expand />
      <section className="h-auto max-w-screen bg-white">
        <div className="flex flex-col justify-center space-y-4">
          <div className="h-80 w-full relative">
            <Image
              priority
              fill={true}
              src={AuthBG}
              alt="Auth Background"
              className="object-center object-cover relative"
            />
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="py-8 max-w-6xl w-full mx-auto px-3 flex flex-col justify-center items-start font-montserrat text-primary"
          >
            <h1 className="font-bold xl:text-2xl md:text-xl text-base">
              Login
            </h1>
            <p className="font-medium text-sm mt-4">
              Please fill your information below
            </p>
            <div className="w-full relative mt-7">
              <FaMobile className="inline w-4 h-4 fill-gray-600 absolute top-1/2 left-5 -translate-x-1/2 -translate-y-1/2" />
              <input
                type="email"
                {...register("email", {
                  required: "Email is required!",
                })}
                placeholder="Email"
                className="bg-gray-100 rounded-lg pl-10 pr-3 py-4 w-full h-full font-medium text-sm outline-none"
              />
            </div>
            {errors.email && (
              <p className="text-red-500 ml-4 text-sm font-semibold mt-2">{`${errors.email.message}`}</p>
            )}
            <div className="w-full relative mt-4">
              <FaKey className="inline w-4 h-4 fill-gray-600 absolute top-1/2 left-5 -translate-x-1/2 -translate-y-1/2" />
              <input
                type="password"
                {...register("password", {
                  required: "Password is required!",
                })}
                placeholder="Password"
                className="bg-gray-100 rounded-lg pl-10 pr-3 py-4 w-full h-full font-medium text-sm outline-none"
              />
            </div>
            {errors.password && (
              <p className="text-red-500 ml-4 text-sm font-semibold mt-2">{`${errors.password.message}`}</p>
            )}
            <div className="w-full flex justify-center items-center mt-4">
              <button
                type="submit"
                className="py-3 px-20 rounded-lg font-semibold text-primary-foreground bg-[#006AFF] hover:bg-[#004099] transition-colors ease-in-out duration-300"
                disabled={isSubmitting}
              >
                {loading ? (
                  <div className="mx-auto flex items-center justify-center gap-4">
                    <p>Log In...</p> <Loader />
                  </div>
                ) : (
                  "Log In"
                )}
              </button>
            </div>

            <div className="w-full flex justify-center items-center mt-4">
              <p className="text-primary text-xs font-medium">
                Don&apos;t have an account?{" "}
                <span>
                  <Link href="/host_signup" className="text-[#006AFF]">
                    Sign Up
                  </Link>
                </span>
              </p>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
