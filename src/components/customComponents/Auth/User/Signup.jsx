"use client";

import Image from "next/image";
import React, { useState } from "react";
import AuthBG from "@/../public/authbg.jpeg";
import { FaKey, FaMobile, FaUser } from "react-icons/fa6";
import { IoIosCloudUpload, IoMdMail } from "react-icons/io";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { Toaster, toast } from "sonner";
import { TbLicense } from "react-icons/tb";
import { UserSignup } from "@/services/api";
import Loader from "@/components/customComponents/Loader";

export default function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const router = useRouter();

  const [previewUrls, setPreviewUrls] = useState({
    profile_picture: "",
    license_picture: "",
  });
  const [loading, setLoading] = useState(false);

  function handleProfileChange(e) {
    const file = e.target.files[0];
    setPreviewUrls((prevUrls) => ({
      ...prevUrls,
      profile_picture: URL.createObjectURL(file),
    }));
  }

  function handleLicenseChange(e) {
    const file = e.target.files[0];
    setPreviewUrls((prevUrls) => ({
      ...prevUrls,
      license_picture: URL.createObjectURL(file),
    }));
  }

  async function onSubmit(data) {
    setLoading(true);
    console.log("Form data: ", data);

    const formData = new FormData();
    formData.append("username", data.username);
    formData.append("whatsapp_number", data.whatsapp_number);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("licence_no", data.license_no);
    formData.append("profile_picture", data.profile_picture[0]); // Append file
    formData.append("licence_picture", data.license_picture[0]); // Append file

    for (let [key, value] of formData.entries()) {
      console.log(key, value);
    }

    try {
      const response = await UserSignup(formData);
      toast.success("Registered Successfully!!");
      console.log("Response: ", response.data);
      router.push("/user_login");
    } catch (error) {
      console.error("Error", error);
      toast.error("Register Failed!!");
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
              Renter Sign Up
            </h1>
            <p className="font-medium text-sm mt-4">
              Please fill your information below
            </p>
            <div className="w-full relative mt-7">
              <FaUser className="inline w-4 h-4 fill-gray-600 absolute top-1/2 left-5 -translate-x-1/2 -translate-y-1/2" />
              <input
                type="text"
                {...register("username", {
                  required: "Username is required!",
                })}
                placeholder="Username"
                className="bg-gray-100 rounded-lg pl-10 pr-3 py-4 w-full h-full font-medium text-sm outline-none"
              />
            </div>
            {errors.username && (
              <p className="text-red-500 ml-4 text-sm font-semibold mt-2">{`${errors.username.message}`}</p>
            )}
            <div className="w-full relative mt-4">
              <FaMobile className="inline w-4 h-4 fill-gray-600 absolute top-1/2 left-5 -translate-x-1/2 -translate-y-1/2" />
              <input
                {...register("whatsapp_number", {
                  required: "Mobile Number is required!",
                })}
                type="text"
                placeholder="Mobile"
                className="bg-gray-100 rounded-lg pl-10 pr-3 py-4 w-full h-full font-medium text-sm outline-none"
              />
            </div>
            {errors.whatsapp_number && (
              <p className="text-red-500 ml-4 text-sm font-semibold mt-2">{`${errors.whatsapp_number.message}`}</p>
            )}
            <div className="w-full relative mt-4">
              <IoMdMail className="inline w-4 h-4 fill-gray-600 absolute top-1/2 left-5 -translate-x-1/2 -translate-y-1/2" />
              <input
                {...register("email", {
                  required: "Email is required!",
                })}
                type="email"
                placeholder="E-mail"
                className="bg-gray-100 rounded-lg pl-10 pr-3 py-4 w-full h-full font-medium text-sm outline-none"
              />
            </div>
            {errors.email && (
              <p className="text-red-500 ml-4 text-sm font-semibold mt-2">{`${errors.email.message}`}</p>
            )}
            <div className="w-full relative mt-4">
              <FaKey className="inline w-4 h-4 fill-gray-600 absolute top-1/2 left-5 -translate-x-1/2 -translate-y-1/2" />
              <input
                {...register("password", {
                  required: "Password is required!",
                })}
                type="password"
                placeholder="Password"
                className="bg-gray-100 rounded-lg pl-10 pr-3 py-4 w-full h-full font-medium text-sm outline-none"
              />
            </div>
            {errors.password && (
              <p className="text-red-500 ml-4 text-sm font-semibold mt-2">{`${errors.password.message}`}</p>
            )}
            <div className="w-full flex items-center space-x-5 mt-4">
              <div className="flex flex-col w-1/3">
                <div className="w-full relative mt-4">
                  <TbLicense className="inline w-4 h-4 fill-gray-600 absolute top-1/2 left-5 -translate-x-1/2 -translate-y-1/2" />
                  <input
                    {...register("license_no", {
                      required: "License Number is required!",
                    })}
                    type="text"
                    placeholder="License Number"
                    className="bg-gray-100 rounded-lg pl-10 pr-3 py-4 w-full h-full font-medium text-sm outline-none"
                  />
                </div>
                {errors.license_no && (
                  <p className="text-red-500 ml-4 text-sm font-semibold mt-2">{`${errors.license_no.message}`}</p>
                )}
              </div>
              <div className="flex flex-col w-1/3">
                <p className="font-semibold text-sm">Choose Profile Picture</p>
                <label
                  htmlFor="profile_picture"
                  className="w-full bg-gray-100 h-16 flex flex-col justify-center items-center mt-4 cursor-pointer"
                  style={{
                    backgroundImage: `url(${previewUrls.profile_picture || "/uploadfile.png"})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></label>
                <input
                  {...register("profile_picture", {
                    required: "Profile Picture is required!",
                  })}
                  id="profile_picture"
                  type="file"
                  onChange={handleProfileChange}
                  className="bg-gray-100 rounded-lg pl-10 pr-3 py-4 w-full h-full font-medium text-sm outline-none hidden"
                />
                {errors.profile_picture && (
                  <p className="text-red-500 ml-4 text-sm font-semibold mt-2">{`${errors.profile_picture.message}`}</p>
                )}
              </div>

              <div className="flex flex-col w-1/3">
                <p className="font-semibold text-sm">Choose License Picture</p>
                <label
                  htmlFor="license_picture"
                  className="w-full bg-gray-100 h-16 flex flex-col justify-center items-center mt-4 cursor-pointer"
                  style={{
                    backgroundImage: `url(${previewUrls.license_picture || "/uploadfile.png"})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></label>
                <input
                  {...register("license_picture", {
                    required: "License Picture is required!",
                  })}
                  id="license_picture"
                  type="file"
                  onChange={handleLicenseChange}
                  className="bg-gray-100 rounded-lg pl-10 pr-3 py-4 w-full h-full font-medium text-sm outline-none hidden"
                />
                {errors.license_picture && (
                  <p className="text-red-500 ml-4 text-sm font-semibold mt-2">{`${errors.license_picture.message}`}</p>
                )}
              </div>
            </div>
            <div className="w-full flex justify-center items-center mt-4">
              <button
                type="submit"
                className="py-3 px-20 rounded-lg font-semibold text-primary-foreground bg-[#006AFF] hover:bg-[#004099] transition-colors ease-in-out duration-300"
                disabled={isSubmitting}
              >
                {loading ? (
                  <div className="mx-auto flex items-center justify-center gap-4">
                    <p>Sign Up...</p> <Loader />
                  </div>
                ) : (
                  "Sign Up"
                )}
              </button>
            </div>
            <div className="w-full flex justify-center items-center mt-4">
              <p className="text-primary text-xs font-medium">
                Already have an account?{" "}
                <span>
                  <Link href="/user_login" className="text-[#006AFF]">
                    Login
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
