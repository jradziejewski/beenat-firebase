import { Metadata } from "next";
import Link from "next/link";
import { SignIn } from "@/components/Auth";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication forms built using the components.",
};

export default function AuthenticationPage() {
  return (
    <div className="h-full flex">
      <div className="mx-auto flex w-full flex-col justify-center my-auto space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">Log In</h1>
          <p className="text-sm text-muted-foreground">
            Enter your email & password below to log in
          </p>
        </div>
        <SignIn />
        <p className="text-sm text-foreground mx-auto">Need an account?</p>
        <Button variant="link" className="w-full">
          <Link href="/signup">Sign up</Link>
        </Button>
        <p className="px-8 text-center text-sm text-muted-foreground">
          By clicking continue, you agree to our{" "}
          <Link
            href="/terms"
            className="underline underline-offset-4 hover:text-primary"
          >
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link
            href="/privacy"
            className="underline underline-offset-4 hover:text-primary"
          >
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
