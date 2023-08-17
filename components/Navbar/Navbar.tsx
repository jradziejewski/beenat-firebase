"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  NavigationMenuItem,
  NavigationMenuLink,
} from "@radix-ui/react-navigation-menu";
import { FiMenu, FiX } from "react-icons/fi";
import {
  NavigationMenu,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import { Button } from "../ui/button";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpenNavbar() {
    setIsOpen(!isOpen);
  }

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="absolute w-full top-0 border-b border-primary py-2 z-10 bg-background"
    >
      <div className="flex items-center justify-between xl:max-w-7xl xl:mx-auto max-w-full px-[8%] flex-wrap w-full">
        <span className="select-none font-mono font-extrabold text-xl">
          beenAt
        </span>

        <Button size="icon" className="lg:hidden" onClick={handleOpenNavbar}>
          <FiMenu className={`${isOpen ? "hidden" : "block"} h-5 w-5`} />
          <FiX className={`${isOpen ? "block" : "hidden"} h-5 w-5`} />
        </Button>

        <nav
          className={`${
            isOpen ? "block" : "hidden"
          } lg:block min-h-10 w-full flex justify-center lg:items-center lg:w-auto transition-all ease-in-out delay-150`}
        >
          <NavigationMenu>
            <NavigationMenuList className="text-base flex flex-col gap-5 my-5 lg:my-0 lg:flex-row lg:justify-between">
              <NavigationMenuItem>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <Link className="lg:px-5 py-2" href="/">
                    Home
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <Link className="lg:px-5 py-2" href="/about">
                    About
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem className="w-full">
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} bg-primary text-secondary`}
                >
                  <Link className="lg:px-5 py-2" href="/login">
                    Log In
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>
      </div>
    </motion.header>
  );
}

export default Navbar;
