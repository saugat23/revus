"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

async function page() {
  const cookieStore = cookies();
  const renterLoginToken = cookieStore.get("token_loginrenter");
  if (renterLoginToken) {
    redirect("/renter_dashboard/profile");
  } else {
    redirect("/renter_login");
  }
}

export default page;
