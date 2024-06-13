"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

async function page() {
  // const cookieStore = cookies();
  // const coordinatorToken = cookieStore.get('token_coordinator');
  // if (coordinatorToken) {
  redirect("user_dashboard/profile");
  // } else {
  //  redirect("/coordinator_login");
  // }
}

export default page;
