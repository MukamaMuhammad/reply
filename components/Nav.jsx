"use client";
import React, { useState } from "react";
import Link from "next/link";
import { IoMenu } from "react-icons/io5";
import Image from "next/image";
import { Button } from "@components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  return (
    <div className="inset-0 bg-transparent flex justify-center items-center bg-red-500">
      <nav class="w-full z-50 top-0 start-0  bg-foreground/10 border-opacity-10">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between  p-4">
          <Link
            href="/"
            class="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span class="self-center text-2xl max-md:text-xl font-semibold whitespace-nowrap ">
              Reply Buddy
            </span>
          </Link>
          <div class="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <div className="flex md:gap-3 gap-1">
              <Button variant="secondary" className="">
                Sign In
              </Button>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger className="inline-flex items-center p-2 w-12 h-12 justify-center text-sm text-gray-500 rounded-lg md:hidden  dark:text-gray-400 ml-0">
                <IoMenu className="w-12 h-12" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link href={"/"}>Home</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href={"/#features"}>Features</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href={"/#pricing"}>Pricing</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href={"/#faqs"}>Faqs</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div
            class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border  rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  ">
              <li>
                <Link
                  href="/#features"
                  class="block py-2 px-3  rounded md:bg-transparent md:p-0 "
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/#pricing"
                  class="block py-2 px-3  rounded    md:p-0    "
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/#faqs"
                  class="block py-2 px-3  rounded    md:p-0    "
                >
                  Faqs
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
