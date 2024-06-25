"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

async function page() {
  const cookieStore = cookies();
  const hostLoginToken = cookieStore.get("token_loginhost");
  if (hostLoginToken) {
    redirect("/host_dashboard/dashboard");
  } else {
    redirect("/host_login");
  }
}

export default page;
