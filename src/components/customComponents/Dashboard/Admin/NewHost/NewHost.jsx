"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import AddImage from "@/../public/dashboard/host/addimage.svg";
import Image from "next/image";

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
      toast.success("Registered Successfully!!");
      router.back();
    } catch (error) {
      console.error("Error", error);
      toast.error("Register Failed!!");
    } finally {
      setLoading(false);
    }
    reset();
  }

  return (
    <section className="bg-white h-auto p-6 flex flex-col justify-center items-start space-y-4 font-montserrat text-sm font-medium text-gray-900 w-[84vw] overflow-hidden">
      <div className="shadow-custom h-auto w-full bg-white p-6 flex flex-col justify-center items-start">
        <h1 className="text-base lg:text-lg xl:text-xl font-semibold text-black">
          Add New Host
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col w-full justify-center items-start space-y-6"
        >
          <div className="w-full flex justify-center items-center space-x-7">
            <div className="w-1/3 flex flex-col justify-center space-y-2 mt-4">
              <label htmlFor="image1">
                Images
                <div className="mt-2 w-36 h-32 rounded-lg border border-dashed border-gray-700 p-5 bg-gray-200 flex flex-col justify-center items-center space-y-1">
                  <Image
                    quality={90}
                    priority
                    src={AddImage}
                    alt="Add Image SVG"
                    className="w-12 h-12 fill-gray-300"
                  />
                  <span className="text-xs font-medium text-center">
                    Upload your photo
                  </span>
                </div>
              </label>
              <input
                {...register("image1", {
                  required: "Image is required!",
                })}
                id="image1"
                type="file"
                className="hidden bg-gray-100 rounded-lg pl-10 pr-3 py-4 w-full h-full font-medium text-sm outline-none"
              />
            </div>
            <div className="w-1/3 flex flex-col justify-center space-y-2 mt-4">
              <label htmlFor="image2">
                Images
                <div className="mt-2 w-36 h-32 rounded-lg border border-dashed border-gray-700 p-5 bg-gray-200 flex flex-col justify-center items-center space-y-1">
                  <Image
                    quality={90}
                    priority
                    src={AddImage}
                    alt="Add Image SVG"
                    className="w-12 h-12 fill-gray-300"
                  />
                  <span className="text-xs font-medium text-center">
                    Upload your photo
                  </span>
                </div>
              </label>
              <input
                {...register("image2", {
                  required: "Image is required!",
                })}
                id="image2"
                type="file"
                className="hidden bg-gray-100 rounded-lg pl-10 pr-3 py-4 w-full h-full font-medium text-sm outline-none"
              />
            </div>
            <div className="w-1/3 flex flex-col justify-center space-y-2 mt-4">
              <label htmlFor="image3">
                Images
                <div className="mt-2 w-36 h-32 rounded-lg border border-dashed border-gray-700 p-5 bg-gray-200 flex flex-col justify-center items-center space-y-1">
                  <Image
                    quality={90}
                    priority
                    src={AddImage}
                    alt="Add Image SVG"
                    className="w-12 h-12 fill-gray-300"
                  />
                  <span className="text-xs font-medium text-center">
                    Upload your photo
                  </span>
                </div>
              </label>
              <input
                {...register("image3", {
                  required: "Image is required!",
                })}
                id="image3"
                type="file"
                className="hidden bg-gray-100 rounded-lg pl-10 pr-3 py-4 w-full h-full font-medium text-sm outline-none"
              />
            </div>
          </div>
          <div className="w-full flex justify-between items-center space-x-7">
            <div className="w-1/3 flex flex-col justify-center items-start space-y-2">
              <label htmlFor="registration_number">Registration Number</label>
              <input
                {...register("registration_number", {
                  required: "Registration Number is required!",
                })}
                type="text"
                className="bg-gray-100 rounded-lg  p-3 w-full h-full font-medium text-sm outline-none"
              />
            </div>
            <div className="w-1/3 flex flex-col justify-center items-start space-y-2">
              <label htmlFor="year">Year</label>
              <input
                {...register("year", {
                  required: "Year is required!",
                })}
                type="text"
                className="bg-gray-100 rounded-lg  p-3 w-full h-full font-medium text-sm outline-none"
              />
            </div>
            <div className="w-1/3 flex flex-col justify-center items-start space-y-2">
              <label htmlFor="model">Model</label>
              <input
                {...register("model", {
                  required: "Model is required!",
                })}
                type="text"
                className="bg-gray-100 rounded-lg  p-3 w-full h-full font-medium text-sm outline-none"
              />
            </div>
          </div>
          <div className="w-full flex justify-start items-center space-x-7">
            <div className="w-1/3 flex flex-col justify-center items-start space-y-2">
              <label htmlFor="daily_rate">Daily Rate</label>
              <input
                {...register("daily_rate", {
                  required: "Daily Rate is required!",
                })}
                type="text"
                className="bg-gray-100 rounded-lg  p-3 w-full h-full font-medium text-sm outline-none"
              />
            </div>
            <div className="w-1/3 flex flex-col justify-center items-start space-y-2">
              <h2>Availability</h2>
              <div className="flex items-center justify-center space-x-3">
                <input
                  {...register("availability", {
                    required: "Availability is required!",
                  })}
                  id="true"
                  value="true"
                  type="radio"
                  className="bg-gray-100 rounded-lg  p-3 w-full h-full font-medium text-sm outline-none"
                />
                <label htmlFor="true">True</label>
                <input
                  {...register("availability", {
                    required: "Availability is required!",
                  })}
                  id="false"
                  value="false"
                  type="radio"
                  className="bg-gray-100 rounded-lg  p-3 w-full h-full font-medium text-sm outline-none"
                />
                <label htmlFor="false">False</label>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="w-auto h-auto px-8 py-2 text-sm lg:text-base xl:text-lg text-primary-foreground bg-[#D01818] rounded-lg hover:shadow-custom hover:scale-105"
          >
            Save
          </button>
        </form>
      </div>
    </section>
  );
}
