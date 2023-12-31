"use client";
import React from "react";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import SeeEvents from "@/components/Events/SeeEvents";

export default function Page() {
  const user = useAuthContext();
  const router = useRouter();

  if (user == null) {
    router.push("/login");
  } else
    return (
      <div className="w-full h-full flex items-center flex-col justify-center">
        <SeeEvents />
      </div>
    );
}
