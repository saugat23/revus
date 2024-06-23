"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

async function page() {
  const cookieStore = cookies();
  const loginToken = cookieStore.get("token_login");
  if (loginToken) {
    redirect("/user_dashboard/profile");
  } else {
    redirect("/user_login");
  }
}

export default page;
