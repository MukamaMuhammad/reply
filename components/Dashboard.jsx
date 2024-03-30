/**
 * v0 by Vercel.
 * @see https://v0.dev/t/m00aopeqfAZ
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { IoCopyOutline } from "react-icons/io5";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

export default function Component() {
  return (
    <>
      <Card className="w-full bg-inherit text-background">
        <CardHeader>
          <CardTitle className="text-xl font-normal text-white">
            Usage Details
          </CardTitle>
          <CardDescription className="text-background">
            Your plan includes 3,000 Replies per month. You've used 23% of your
            quota.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ActivityIcon className="w-6 h-6" />
            <div className="text-2xl font-semibold">1,230</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              of 3,000 replies
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm font-medium">Renews on July 1, 2023</div>
            <Progress className="w-full h-4 rounded-full" value="23" />
          </div>
        </CardContent>
      </Card>
      <Card className="w-full bg-inherit text-background">
        <CardHeader>
          <CardTitle className="text-xl font-normal text-white">
            API Key
          </CardTitle>
          <CardDescription className="text-background">
            This is your api key. Keep it secret.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex items-center gap-3">
          <div className="bg-primary p-1 px-3 rounded">
            <p>98ee1578-4fa3-4d6e-961d-21ec7d03fd45</p>
          </div>
          <IoCopyOutline className="text-[24px] cursor-pointer" />
        </CardContent>
      </Card>
      <Card className="w-full bg-inherit text-background">
        <CardHeader>
          <CardTitle className="text-xl font-normal text-white">
            Subscription
          </CardTitle>
          <CardDescription className="text-background">
            You are on the Pro plan. Your next billing date is July 15, 2023.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CreditCardIcon className="w-6 h-6" />
            <div className="text-sm font-medium">Pro Plan</div>
          </div>
          <div className="text-right">
            <div className="text-sm font-medium">Next billing date</div>
            <div className="font-semibold">$9.99/mo</div>
          </div>
        </CardContent>
      </Card>
    </>
  );
}

function ActivityIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  );
}

function CreditCardIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" x2="22" y1="10" y2="10" />
    </svg>
  );
}
