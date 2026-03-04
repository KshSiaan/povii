import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChevronLeft, MailIcon, PencilIcon, Settings2Icon } from "lucide-react";
import React, { Suspense } from "react";
import Backer from "./backert";

export default function Page() {
  return (
    <main className="container mx-auto my-12 px-4">
      <div className="pb-2">
        <Suspense>
          <Backer />
        </Suspense>
      </div>
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
            <Dialog>
              <DialogTrigger asChild>
                <Button size={"icon"} variant={"outline"}>
                  <PencilIcon />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:min-w-[90dvw] md:min-w-[60dvw] xl:min-w-[50dvw]">
                <DialogHeader>
                  <DialogTitle>Personalization</DialogTitle>
                </DialogHeader>
                <div className="border-t pt-6 space-y-4">
                  <Label>Full name</Label>
                  <Input />
                  <div className="grid grid-cols-3 gap-4">
                    <div className="space-y-4">
                      <Label>Age</Label>
                      <Input />
                    </div>
                    <div className="space-y-4">
                      <Label>Gender</Label>
                      <Input />
                    </div>
                    <div className="space-y-4">
                      <Label>Age</Label>
                      <Input />
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
            <Button size={"icon"} variant={"outline"}>
              <Settings2Icon />
            </Button>
          </div>
        </div>
      </div>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-muted aspect-video"></Card>
        <Card className="bg-muted aspect-video"></Card>
        <Card className="bg-muted aspect-video"></Card>
        <Card className="bg-muted aspect-video"></Card>
      </div>
    </main>
  );
}
