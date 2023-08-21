"use client";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function Page() {
  const user = useAuthContext();
  const router = useRouter();

  if (user == null) {
    router.push("/login");
  }

  return (
    <div>
      <h1>Welcome to your profile!</h1>
    </div>
  );
}
