"use client";
import { Button } from "@/components/ui/button";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Page() {
  const user = useAuthContext();
  const router = useRouter();

  if (user == null) {
    router.push("/login");
  } else
    return (
      <div className="w-full h-full flex items-center flex-col justify-center">
        <h1>Welcome to your profile!</h1>
        <Link href="/dashboard/see">
          <Button variant="link">See your events</Button>
        </Link>
        <Link href="/dashboard/add">
          <Button variant="link">Add event</Button>
        </Link>
      </div>
    );
}
