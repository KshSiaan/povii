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
import AppHeader from "@/components/core/app-header";
import { Suspense } from "react";

export default function Page() {
  return (
    <>
      <Suspense>
        <AppHeader />
      </Suspense>
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
