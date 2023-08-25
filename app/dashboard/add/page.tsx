"use client";
import { useAuthContext } from "@/context/AuthContext";
import React from "react";
import { useRouter } from "next/navigation";
import AddEvent from "@/components/Events/AddEvent";

export default function Page() {
  const user = useAuthContext();
  const router = useRouter();

  if (user == null) {
    router.push("/login");
  } else
    return (
      <div>
        <AddEvent />
      </div>
    );
}
