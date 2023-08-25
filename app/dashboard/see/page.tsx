import React from "react";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function Page() {
  const user = useAuthContext();
  const router = useRouter();

  if (user == null) {
    router.push("/login");
  } else return <div>page</div>;
}
