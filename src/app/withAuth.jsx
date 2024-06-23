"use client";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { toast } from "sonner";

const withAuth = (WrappedComponent) => {
  const Wrapper = (props) => {
    const router = useRouter();

    useEffect(() => {
      const token = Cookies.get("token_login");

      if (!token) {
        router.push("/user_login");
        toast.error("You have to Login to access Dashboard!");
      }
    });

    return <WrappedComponent {...props} />;
  };

  return Wrapper;
};

export default withAuth;
