import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import HoggerProvider from "./hogger";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pageKey = Math.random().toString(36).substring(7);
  return (
    <main className="bg-primary h-dvh w-full flex flex-col gap-6 justify-center items-center px-4">
      <Card className="max-w-xl w-full relative overflow-visible pt-0">
        <div>
          <Image
            src={"/povii_sitting.webp"}
            height={400}
            width={100}
            className="absolute object-contain h-[240px] -top-[130px] right-0 -rotate-y-180"
            alt="povii-sit"
            priority
            draggable={false}
            key={pageKey}
          />
        </div>
        <HoggerProvider pageKey={pageKey}>{children}</HoggerProvider>
      </Card>
      <div className="">
        <p className="font-bold text-background text-sm w-full mb-6 text-center">
          OR
        </p>
        <div className="flex justify-center items-center gap-6">
          <Button
            variant={"outline"}
            className="text-background tracking-wider"
          >
            <FcGoogle /> Continue with Google
          </Button>
          <Button
            variant={"outline"}
            className="text-background tracking-wider"
          >
            <FaGithub /> Continue with Github
          </Button>
        </div>
      </div>
    </main>
  );
}
