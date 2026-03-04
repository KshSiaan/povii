"use client";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import React from "react";
import { useRouter } from "next/navigation";

export default function Backer() {
  const navig = useRouter();
  return (
    <Button
      variant={"outline"}
      className="bg-background"
      onClick={() => {
        navig.back();
      }}
    >
      <ChevronLeft /> Go back
    </Button>
  );
}
