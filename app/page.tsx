"use client";
import { Button } from "@/components/ui/button";
import { useAuthContext } from "@/context/AuthContext";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function Home() {
  const user = useAuthContext();
  if (user) {
    return redirect("/dashboard");
  }

  return (
    <div className="h-full w-full flex flex-col lg:flex-row">
      <main className="container m-auto w-full text-center lg:text-left lg:w-[50%] pl-10">
        <h1 className="text-6xl lg:text-9xl">Your live events</h1>
        <p className="text-4xl mt-10">right here</p>
      </main>
      <section className="container min-h-[40vh] lg:max-w-[50vw] flex flex-col justify-center bg-black">
        <Link href="/login" className="mx-auto w-[200px]">
          <Button variant="outline" className="w-full">
            Login
          </Button>
        </Link>
        <div className="relative mx-auto mt-10 mb-0">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-zinc-950 px-2 text-white">
              Need an account?
            </span>
          </div>
        </div>
        <Link href="/signup" className="mx-auto w-[200px] mt-1">
          <Button variant="link" className="text-white w-full">
            Sign up
          </Button>
        </Link>
      </section>
    </div>
  );
}
