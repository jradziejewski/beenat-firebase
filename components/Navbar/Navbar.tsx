"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { Button } from "../ui/button";
import NavbarLinks from "./NavbarLinks";

export default function Navbar() {
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
        <Link href="/">
          <span className="select-none font-mono font-extrabold text-xl">
            beenAt
          </span>
        </Link>

        <Button size="icon" className="lg:hidden" onClick={handleOpenNavbar}>
          <FiMenu className={`${isOpen ? "hidden" : "block"} h-5 w-5`} />
          <FiX className={`${isOpen ? "block" : "hidden"} h-5 w-5`} />
        </Button>

        <nav
          className={`${
            isOpen ? "block" : "hidden"
          } lg:block min-h-10 w-full flex justify-center lg:items-center lg:w-auto transition-all ease-in-out delay-150`}
        >
          <NavbarLinks closeNavbar={() => setIsOpen(false)} />
        </nav>
      </div>
    </motion.header>
  );
}
