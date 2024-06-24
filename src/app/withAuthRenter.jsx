"use client";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { toast } from "sonner";

const withAuthRenter = (WrappedComponent) => {
  const Wrapper = (props) => {
    const router = useRouter();

    useEffect(() => {
      const token = Cookies.get("token_loginrenter");

      if (!token) {
        router.push("/renter_login");
        toast.error("You have to Login to access Dashboard!");
      }
    });

    return <WrappedComponent {...props} />;
  };

  return Wrapper;
};

export default withAuthRenter;
