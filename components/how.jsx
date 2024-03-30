import React from "react";
import Image from "next/image";
import { BiSolidQuoteAltRight } from "react-icons/bi";

const How = () => {
  return (
    <section className=" h-[auto] text-center">
      <h2 className="">How It Works</h2>
      <section class="md:mx-10">
        <div class="md:py-10  flex flex-col md:flex-row gap-10">
          <div class="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:text-left text-center">
            <div class="flex flex-col mb-10 lg:items-start items-center">
              <div class="flex-grow">
                <h2 class="md:text-[24px] text-xl font-semibold mb-3">
                  Download the Chrome Extension
                </h2>
                <h3>
                  Use the link after purchase to download the chrome extension
                  into your browser with a single click.
                </h3>
              </div>
            </div>
            <div class="flex flex-col mb-10 lg:items-start items-center">
              <div class="flex-grow">
                <h2 class=" md:text-[24px] text-xl font-semibold mb-3">
                  Save your API key
                </h2>
                <h3>
                  Copy your secret API key from your dashboard and save it in
                  the extension
                </h3>
              </div>
            </div>
            <div class="flex flex-col mb-10 lg:items-start items-center">
              <div class="flex-grow">
                <h2 class=" md:text-[24px] text-xl font-semibold mb-3">
                  Generate reply
                </h2>
                <h3>
                  Click on Reply button of a post and use the magic button to
                  generate reply
                </h3>
              </div>
            </div>
          </div>
          <div class="lg:w-1/2 w-full max-md:h-[60vh] mb-10 lg:mb-0 rounded-lg overflow-hidden bg-primary"></div>
        </div>
      </section>
    </section>
  );
};

export default How;
