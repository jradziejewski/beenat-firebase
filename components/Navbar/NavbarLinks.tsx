"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { logOut } from "@/firebase/auth";
import { useAuthContext } from "@/context/AuthContext";
import {
  NavigationMenuItem,
  NavigationMenuLink,
} from "@radix-ui/react-navigation-menu";
import {
  NavigationMenu,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";

function NavbarLinks({ closeNavbar }: { closeNavbar: () => void }) {
  const user = useAuthContext();
  const router = useRouter();

  async function onLogOut(event: React.SyntheticEvent) {
    event.preventDefault();

    const { result, error } = await logOut();

    if (error) {
      console.log(error);
    }

    console.log(result);
    return router.push("/");
  }

  return (
    <NavigationMenu>
      <NavigationMenuList className="text-base flex flex-col gap-5 my-5 lg:my-0 lg:flex-row lg:justify-between">
        <NavigationMenuItem>
          <Link className="lg:px-5 py-2" legacyBehavior passHref href="/">
            <NavigationMenuLink
              onClick={() => {
                closeNavbar();
              }}
              className={navigationMenuTriggerStyle()}
            >
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link className="lg:px-5 py-2" legacyBehavior passHref href="/about">
            <NavigationMenuLink
              onClick={() => {
                closeNavbar();
              }}
              className={navigationMenuTriggerStyle()}
            >
              About
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem className="w-full">
          {user ? (
            <>
              {`Logged in as  ${user.email} | `}
              <Button variant="link" onClick={onLogOut}>
                Log out
              </Button>
            </>
          ) : (
            <Link legacyBehavior passHref href="/login">
              <NavigationMenuLink
                className={`${navigationMenuTriggerStyle()} bg-primary text-secondary`}
              >
                Log In
              </NavigationMenuLink>
            </Link>
          )}
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default NavbarLinks;
