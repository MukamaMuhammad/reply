import React from "react";
import { IoCopyOutline } from "react-icons/io5";
import { Button } from "@components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Component from "@components/Dashboard";

const page = () => {
  return (
    <div className="h-auto py-10 flex flex-col gap-5 items-center justify-center md:mx-20">
      <div className="w-full">
        <p className="text-start text-2xl font-semibold">Dashboard</p>
      </div>

      {/* <div className="flex  gap-5">
        <div>
          <Card className="w-[400px] h-[150px] bg-inherit text-background">
            <CardHeader>
              <CardTitle>Usage Details</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-between">
              <div className="flex flex-col gap-2 text-background">
                <p className="text-[15px] text-gray-500">Replies used</p>
                <p>6 / 20</p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-[15px] text-gray-500">Expires on</p>
                <p>Mar 24th, 2024</p>
              </div>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card className="w-[400px] h-[150px] bg-inherit text-background">
            <CardHeader>
              <CardTitle>API Key</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center gap-3">
              <div className="bg-gray-800 p-1 px-3 rounded">
                <p>98ee1578-4fa3-4d6e-961d-21ec7d03fd45</p>
              </div>
              <IoCopyOutline className="text-[24px] cursor-pointer" />
            </CardContent>
          </Card>
        </div>
      </div>

      <div>
        <Card className="w-[400px] h-[150px] bg-inherit text-background">
          <CardHeader>
            <CardTitle>Subscription Details</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center gap-5">
            <p>Your free trial will expire soon</p>
            <Button>Subscribe</Button>
          </CardContent>
        </Card>
      </div> */}
      <Component />
    </div>
  );
};

export default page;
