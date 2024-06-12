"use client";

import React, { useState } from "react";
import Image from "next/image";
import AuthBG from "@/../public/authbg.jpeg";
import { FaKey, FaMobile, FaUser } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { RiImageAddFill } from "react-icons/ri";

function Page() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    password: "",
    profile_picture: "",
    address: "",
    driver_license: "",
    license_number: "",
    country: "",
    expiryDate: "",
  });
  const [step, setStep] = useState(1);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0]; // Get the single file from the input
    setFormData((prevData) => ({
      ...prevData,
      profile_picture: file,
    }));
  };

  const handleDriverLicenseChange = (e) => {
    const file = e.target.files[0]; // Get the single file from the input
    setFormData((prevData) => ({
      ...prevData,
      driver_license: file,
    }));
  };

  function handleStep() {
    if (
      formData.name != "" &&
      formData.email != "" &&
      formData.mobile != "" &&
      formData.password != ""
    ) {
      setError("");
      setStep(2);
    } else {
      setError("Please fill all the required fields!!");
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    // Create a new FormData object
    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("mobile", formData.mobile);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("password", formData.password);
    formDataToSend.append("address", formData.address);
    formDataToSend.append("license_number", formData.license_number);
    formDataToSend.append("country", formData.country);
    formDataToSend.append("expiryDate", formData.expiryDate);

    // Append the featured image file
    if (formData.profile_picture) {
      formDataToSend.append("profile_picture", formData.profile_picture);
    }

    if (formData.driver_license) {
      formDataToSend.append("driver_license", formData.driver_license);
    }

    try {
      for (let [key, value] of formDataToSend.entries()) {
        console.log(key, value);
      }
    } catch (error) {
      console.error("Some error occurred processing the data : ", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
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
            onSubmit={handleSubmit}
            className="py-8 max-w-6xl w-full mx-auto px-3 flex flex-col justify-center items-start font-montserrat text-primary"
          >
            {error && (
              <div className="self-end text-red-500 font-medium">{error}</div>
            )}
            {step === 1 && (
              <>
                <h1 className="font-bold xl:text-2xl md:text-xl text-base">
                  Sign Up
                </h1>
                <p className="font-medium text-sm mt-4">
                  Please fill your information below
                </p>
                <div className="w-full relative mt-7">
                  <FaUser className="inline w-4 h-4 fill-gray-600 absolute top-1/2 left-5 -translate-x-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    name="name"
                    id="name"
                    onChange={handleChange}
                    placeholder="Name"
                    className="bg-gray-100 rounded-lg pl-10 pr-3 py-4 w-full h-full font-medium text-sm outline-none"
                  />
                </div>
                <div className="w-full relative mt-4">
                  <FaMobile className="inline w-4 h-4 fill-gray-600 absolute top-1/2 left-5 -translate-x-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    name="mobile"
                    id="mobile"
                    onChange={handleChange}
                    placeholder="Mobile"
                    className="bg-gray-100 rounded-lg pl-10 pr-3 py-4 w-full h-full font-medium text-sm outline-none"
                  />
                </div>
                <div className="w-full relative mt-4">
                  <IoMdMail className="inline w-4 h-4 fill-gray-600 absolute top-1/2 left-5 -translate-x-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    name="email"
                    id="email"
                    onChange={handleChange}
                    placeholder="E-mail"
                    className="bg-gray-100 rounded-lg pl-10 pr-3 py-4 w-full h-full font-medium text-sm outline-none"
                  />
                </div>
                <div className="w-full relative mt-4">
                  <FaKey className="inline w-4 h-4 fill-gray-600 absolute top-1/2 left-5 -translate-x-1/2 -translate-y-1/2" />
                  <input
                    type="password"
                    name="password"
                    id="password"
                    onChange={handleChange}
                    placeholder="Password"
                    className="bg-gray-100 rounded-lg pl-10 pr-3 py-4 w-full h-full font-medium text-sm outline-none"
                  />
                </div>
                <div className="w-full flex justify-center items-center mt-4">
                  <button
                    type="button"
                    onClick={handleStep}
                    className="py-3 px-20 rounded-lg font-semibold text-primary-foreground bg-[#006AFF] hover:bg-[#004099] transition-colors ease-in-out duration-300"
                  >
                    Next
                  </button>
                </div>
              </>
            )}
            {step === 2 && (
              <>
                <h2 className="text-primary xl:text-2xl md:text-xl text-base font-semibold mt-4">
                  Personal Information
                </h2>
                <div className="w-full flex flex-col justify-center space-y-3 mt-7">
                  <label
                    htmlFor="profile_picture"
                    className="font-semibold text-sm"
                  >
                    Your Profile Picture
                    <div className="bg-gray-100 flex flex-col justify-center p-3 border border-dashed border-gray-500 items-center w-full rounded-xl mt-3">
                      <RiImageAddFill className="w-8 h-8 fill-gray-600 cursor-pointer" />
                      <p className="text-xs">Upload your Image</p>
                    </div>
                  </label>
                  <input
                    type="file"
                    name="profile_picture"
                    id="profile_picture"
                    handleChange={handleProfilePictureChange}
                    className="hidden"
                  />
                </div>
                <div className="w-full flex flex-col justify-center space-y-3 mt-4">
                  <label htmlFor="address" className="font-semibold text-sm">
                    Full Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    onChange={handleChange}
                    placeholder="Please enter your Full Address"
                    className="bg-gray-100 rounded-lg p-4 w-full h-full font-medium text-sm outline-none"
                  />
                </div>
                <h2 className="text-primary xl:text-2xl md:text-xl text-base font-semibold mt-7">
                  Driver&apos;s License Information
                </h2>
                <div className="w-full flex flex-col justify-center space-y-3 mt-4">
                  <label
                    htmlFor="driver_license"
                    className="font-semibold text-sm"
                  >
                    Upload Driver&apos;s License
                    <div className="bg-gray-100 flex flex-col justify-center p-3 border border-dashed border-gray-500 items-center w-full rounded-xl mt-3">
                      <RiImageAddFill className="w-8 h-8 fill-gray-600 cursor-pointer" />
                      <p className="text-xs">Upload your Image</p>
                    </div>
                  </label>
                  <input
                    type="file"
                    name="driver_license"
                    id="driver_license"
                    handleChange={handleDriverLicenseChange}
                    className="hidden"
                  />
                </div>
                <div className="w-full flex justify-between space-x-8 items-center mt-4">
                  <div className="w-1/3 flex flex-col justify-center space-y-3 mt-4">
                    <label
                      htmlFor="license_number"
                      className="font-semibold text-sm"
                    >
                      Driver&apos;s License Number
                    </label>
                    <input
                      type="text"
                      name="license_number"
                      id="license_number"
                      onChange={handleChange}
                      placeholder="Please enter Driver's License Number"
                      className="bg-gray-100 rounded-lg p-4 w-full h-full font-medium text-sm outline-none"
                    />
                  </div>
                  <div className="w-1/3 flex flex-col justify-center space-y-3 mt-4">
                    <label htmlFor="country" className="font-semibold text-sm">
                      State/Country of Issue
                    </label>
                    <input
                      type="text"
                      name="country"
                      id="country"
                      onChange={handleChange}
                      placeholder="Please enter your State/Country of Issue"
                      className="bg-gray-100 rounded-lg p-4 w-full h-full font-medium text-sm outline-none"
                    />
                  </div>
                  <div className="w-1/3 flex flex-col justify-center space-y-3 mt-4">
                    <label
                      htmlFor="expiryDate"
                      className="font-semibold text-sm"
                    >
                      Expiry Date
                    </label>
                    <input
                      type="date"
                      name="expiryDate"
                      id="expiryDate"
                      onChange={handleChange}
                      placeholder="Please enter your Full Address"
                      className="bg-gray-100 rounded-lg p-4 w-full h-full font-medium text-sm outline-none"
                    />
                  </div>
                </div>
                <div className="w-full flex justify-center items-center mt-4">
                  <button
                    type="button"
                    onClick={handleStep}
                    className="py-3 px-20 rounded-lg font-semibold text-primary-foreground bg-[#006AFF] hover:bg-[#004099] transition-colors ease-in-out duration-300"
                  >
                    Next
                  </button>
                </div>
              </>
            )}
          </form>
        </div>
      </section>
    </>
  );
}

export default Page;
