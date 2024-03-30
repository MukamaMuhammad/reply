"use client";
import React from "react";
import { Button } from "./ui/button";
import { Component } from "./component/component";

const Hero = () => {
  const prompt = "generate for me 3 tweets";
  const handleClick = async () => {
    const response = await fetch("api/test", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(prompt),
    });
    const tweetText = await response.json();
    console.log(tweetText);
  };
  return (
    <section className=" md:h-auto  flex flex-col md:pt-32 pt-20 ">
      <div className="flex flex-col justify-center items-center gap-6 md:gap-7 text-center">
        <h1>
          Grow on Twitter <span className="text-primary">10x Faster</span>
        </h1>
        <h3>
          Generate human like replies using AI with a single click. Get more
          eyeballs on your profile.
        </h3>
        <div>
          <Button onClick={handleClick}>Get Started for Free</Button>
        </div>
        <h4>No credit card required</h4>
      </div>
      <div>
        <Component />
      </div>
    </section>
  );
};

export default Hero;
