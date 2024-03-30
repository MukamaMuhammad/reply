"use client";
import React from "react";
import { CiMenuFries } from "react-icons/ci";
import { VscClose } from "react-icons/vsc";
import { useState } from "react";
import { Button } from "./ui/button";

const links = ["Home", "About", "Portfolio", "Testimonial", "Contact"];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header class=" body-font">
      <div class=" flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a class="flex title-font font-bold items-center  mb-4 md:mb-0 cursor-pointer">
          <span class="ml-3 text-xl">ReplyBuddy</span>
        </a>
        <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <a class="mr-5 hover:text-primary cursor-pointer">How it works</a>
          <a class="mr-5 hover:text-primary cursor-pointer">Pricing</a>
          <a class="mr-5 hover:text-primary cursor-pointer">FAQ</a>
        </nav>
        <Button class="inline-flex items-center  py-1 px-3  text-base mt-7 md:mt-0">
          Sign up
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </Button>
      </div>
    </header>
  );
};

export default Navbar;
