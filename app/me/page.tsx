import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { MailIcon, PencilIcon, Settings2Icon } from "lucide-react";
import React from "react";

export default function Page() {
  return (
    <main className="container mx-auto my-12 px-4">
      <div className=" h-[20dvh] lg:h-[30dvh] xl:h-[40dvh] border rounded-lg relative">
        <Avatar className="absolute size-[100px] bottom-0 right-0 transform -translate-x-1/2 translate-y-1/2">
          <AvatarImage />
          <AvatarFallback>UI</AvatarFallback>
        </Avatar>
      </div>
      <div className="pt-8">
        <div className="flex justify-between items-end">
          <div className="">
            <h1 className="text-3xl font-bold">Demo User</h1>
            <div className="flex items-center space-x-2 pt-4 text-sm text-muted-foreground ">
              <MailIcon className="size-4" /> <span>demo.user@example.com</span>
            </div>
          </div>
          <div className="space-x-4">
            <Button size={"icon"} variant={"outline"}>
              <PencilIcon />
            </Button>
            <Button size={"icon"} variant={"outline"}>
              <Settings2Icon />
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
