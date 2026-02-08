import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Textarea } from "@/components/ui/textarea";
import { Ellipsis, MenuIcon } from "lucide-react";
import React from "react";

export default function Page() {
  return (
    <main className="h-[90dvh] flex flex-col lg:grid lg:grid-cols-5 gap-6 w-full px-4 xl:px-12">
      <nav className="w-full h-fit lg:h-full shadow bg-muted rounded-lg flex items-center lg:flex-col">
        <div className="w-full p-4 text-xl font-semibold">Notes</div>
        <div className="p-4 pt-0 hidden lg:block space-y-4 w-full">
          <Button className="w-full" variant={"outline"}>
            Note #1
          </Button>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              size={"icon-lg"}
              variant={"ghost"}
              className="lg:hidden mr-4"
            >
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent side="bottom" className="min-h-[60dvh]">
            <SheetHeader>
              <SheetTitle>Saved Notes</SheetTitle>
            </SheetHeader>
            <div className="flex-1 space-y-4 p-4">
              <Button className="w-full" variant={"outline"}>
                Note #1
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </nav>

      <div className="w-full lg:col-span-4 flex-1 h-full flex flex-col justify-start items-start bg-muted shadow rounded-lg p-4">
        <div className="pb-4 w-full  flex justify-between items-center">
          <Input
            className="w-fit lg:min-w-75 bg-muted"
            placeholder="Note Title"
          />
          <p className="text-sm font-semibold text-muted-foreground/40">
            Last updated: 2024-06-01 14:30
          </p>
        </div>
        <Textarea className="bg-muted h-full" placeholder="Start Typing.." />
        <div className="flex justify-between w-full items-center mt-4">
          <Button variant={"outline"}>Draft this note</Button>
          <Button>Save this note</Button>
        </div>
      </div>
    </main>
  );
}
