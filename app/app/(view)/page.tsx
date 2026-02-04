"use client";
import {
  PromptInput,
  PromptInputActionAddAttachments,
  PromptInputActionMenu,
  PromptInputActionMenuContent,
  PromptInputActionMenuTrigger,
  PromptInputAttachment,
  PromptInputAttachments,
  PromptInputBody,
  PromptInputFooter,
  PromptInputSubmit,
  PromptInputTextarea,
  PromptInputTools,
} from "@/components/ai/prompt-input";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Ellipsis, MenuIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Page() {
  return (
    <>
      <header className="h-16 px-4 w-dvw bg-background flex justify-between items-center">
        <Image
          height={64}
          width={64}
          alt="povii_icon"
          className="size-12"
          src={"/icon.webp"}
        />
        <Sheet>
          <SheetTrigger asChild>
            <Button size={"icon-lg"} variant={"ghost"} className="text-primary">
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent side="top" className="min-h-[50dvh]">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </header>
      <main className="flex-1 pb-12 w-full flex flex-col justify-end items-center container mx-auto px-4">
        <div className="flex-1 w-full flex flex-col justify-start items-start">
          <div className="h-full w-full flex justify-center items-center flex-1">
            <h1 className="text-center font-bold text-4xl">
              Do you have any question?
            </h1>
          </div>
        </div>
        <div className="w-full">
          <PromptInput
            className="w-full"
            onSubmit={(e) => {
              alert(e.text);
            }}
          >
            <PromptInputAttachments>
              {(attachment) => <PromptInputAttachment data={attachment} />}
            </PromptInputAttachments>
            <PromptInputBody>
              <PromptInputTextarea />
            </PromptInputBody>
            <PromptInputFooter>
              <PromptInputTools>
                <PromptInputActionMenu>
                  <PromptInputActionMenuTrigger />
                  <PromptInputActionMenuContent>
                    <PromptInputActionAddAttachments />
                  </PromptInputActionMenuContent>
                </PromptInputActionMenu>
              </PromptInputTools>
              <PromptInputSubmit />
            </PromptInputFooter>
          </PromptInput>
        </div>
      </main>
    </>
  );
}
