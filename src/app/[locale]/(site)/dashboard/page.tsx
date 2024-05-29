import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/en/signin");
  }
  console.log("🚀 ~ Header ~ session:", session);
  return (
    <div className="container py-20">
      <div className="w-full my-16 text-center">
        <h1 className="text-3xl font-bold text-white">Dashboard</h1>
      </div>
    </div>
  );
}
