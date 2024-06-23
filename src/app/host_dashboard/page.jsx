"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

async function page() {
  const cookieStore = cookies();
  const loginToken = cookieStore.get("token_login");
  if (loginToken) {
    redirect("/host_dashboard/profile");
  } else {
    redirect("/host_login");
  }
}

export default page;
