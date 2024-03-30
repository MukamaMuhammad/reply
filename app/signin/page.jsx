"use client";
import { FaGoogle } from "react-icons/fa";
import { Button } from "@components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import React from "react";

const page = () => {
  return (
    <div className="w-full h-[100Vh] flex items-center justify-center">
      <Card className="w-[350px] bg-inherit">
        <CardHeader className="text-center">
          <CardTitle className="text-white">Welcome back</CardTitle>
        </CardHeader>
        <CardContent>
          {" "}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-primary px-2 text-white">continue with</span>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between flex-col">
          <Button className="w-full">
            <FaGoogle className="mr-2" /> Google
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default page;
