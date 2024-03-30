"use client";
import React from "react";
import { Button } from "@components/ui/button";

const Pricing = () => {
  return (
    <section className="overflow-hidden py-10" id="pricing">
      <div className=" md:px-5 ">
        <div className="flex flex-col text-center w-full mb-10">
          <h2 className="mb-3">Pricing</h2>
          <p className="lg:w-2/3 mx-auto leading-relaxed ">
            Use it for free! Upgrade anytime for $5/mo.
          </p>
        </div>
        <div className="flex justify-center flex-wrap -m-4 ">
          <div className="p-4 lg:w-1/4 md:w-1/2 w-full">
            <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col justify-between relative overflow-hidden">
              <div>
                <h2 className="text-sm tracking-widest title-font mb-1 font-medium">
                  STARTER
                </h2>
                <h1 className="text-5xl  pb-4 mb-4 border-b border-gray-200 leading-none">
                  $5<span className="text-lg ml-1 font-normal ">/mo</span>
                </h1>

                <p className="flex items-center  mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center   rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2.5"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  1000 replies per month
                </p>
                <p className="flex items-center  mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center   rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2.5"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Cutting-edge AI replies (GPT-4)
                </p>
                <p className="flex items-center  mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center   rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2.5"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  20 free reply credits
                </p>
                <p className="flex items-center  mb-6">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center   rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2.5"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Premium support
                </p>
              </div>
              <div>
                <Button className="w-[100%]">Buy Now</Button>

                <p className="text-xs  mt-3">
                  Special 20% off Launch offer for the first 50 customers
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 lg:w-1/4 md:w-1/2 w-full">
            <div className="h-full p-6  rounded-lg border-2 border-primary flex flex-col justify-between relative overflow-hidden">
              <div>
                <span className="bg-primary  px-3 py-1 tracking-widest text-xs absolute  right-0 top-0 rounded-bl">
                  POPULAR
                </span>
                <h2 className="text-sm tracking-widest title-font mb-1 font-medium">
                  BASIC
                </h2>
                <h1 className="text-5xl  leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                  <span>$10</span>
                  <span className="text-lg ml-1 font-normal ">/mo</span>
                </h1>

                <p className="flex items-center  mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center   rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2.5"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  3000 replies per month
                </p>
                <p className="flex items-center  mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center   rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2.5"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Cutting-edge AI replies (GPT-4)
                </p>
                <p className="flex items-center  mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center   rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2.5"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  20 free reply credits
                </p>
                <p className="flex items-center  mb-6">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center   rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2.5"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Premium support
                </p>
              </div>
              <div>
                <Button className="w-[100%]">Buy Now</Button>
                <p className="text-xs  mt-3">
                  Special 20% off Launch offer for the first 50 customers
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 lg:w-1/4 md:w-1/2 w-full">
            <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col justify-between relative overflow-hidden">
              <div>
                <h2 className="text-sm tracking-widest title-font mb-1 font-medium">
                  PROFESSIONAL
                </h2>
                <h1 className="text-5xl  leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                  <span>$20</span>
                  <span className="text-lg ml-1 font-normal ">/mo</span>
                </h1>

                <p className="flex items-center  mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center   rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2.5"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  6500 replies per month
                </p>
                <p className="flex items-center  mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center   rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2.5"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Cutting-edge AI replies (GPT-4)
                </p>
                <p className="flex items-center  mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center   rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2.5"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  20 free reply credits
                </p>
                <p className="flex items-center  mb-6">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center   rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2.5"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Premium support
                </p>
              </div>
              <div>
                <Button className="w-[100%]">Buy Now</Button>
                <p className="text-xs  mt-3">
                  Special 20% off Launch offer for the first 50 customers
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
