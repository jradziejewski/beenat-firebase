"use client";
import { useAuthContext } from "@/context/AuthContext";
import Link from "next/link";
import {
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export default function LogInOutButton() {
  const authContext = useAuthContext();

  return (
    <div>
      {authContext?.user ? (
        <>Logged in as {authContext.user.email}</>
      ) : (
        <Link legacyBehavior passHref href="/login">
          <NavigationMenuLink
            className={`${navigationMenuTriggerStyle()} bg-primary text-secondary`}
          >
            Log In
          </NavigationMenuLink>
        </Link>
      )}
    </div>
  );
}
