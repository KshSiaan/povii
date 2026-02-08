"use client";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Button } from "../ui/button";
import { LayoutGridIcon, UserCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";

const nodes = [
  { name: "Agent", href: "/app" },
  { name: "Study Planner", href: "/app/planner" },
  { name: "Quiz", href: "/app/quizer" },
  { name: "Tutor", href: "/app/tutor" },
  { name: "Notepad", href: "/app/notepad" },
];

export default function AppHeader() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <header className="h-15.5 px-3 w-dvw bg-background flex justify-between items-center">
      {/* <Image
        height={64}
        width={64}
        alt="povii_icon"
        className="size-12"
        src={"/icon.webp"}
      /> */}
      <h3 className="font-black text-secondary text-xl">POVII</h3>
      <div className="">
        <Button
          variant={"ghost"}
          className="hover:text-primary"
          size={"icon-lg"}
          asChild
        >
          <Link href={"/me"}>
            <UserCircle className="size-6" />
          </Link>
        </Button>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button size={"icon-lg"} variant={"ghost"} className="text-primary">
              <LayoutGridIcon
                fill="#7637E6"
                className="size-6"
                strokeWidth={1}
              />
            </Button>
          </SheetTrigger>
          <SheetContent side="top" className="min-h-[50dvh]">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col h-full w-full flex-1">
              {/* Top Cards Grid */}

              <div className="w-full grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-6 2xl:grid-cols-8 gap-6 p-6">
                {nodes?.map((node) => (
                  <Link
                    key={node.name}
                    href={node.href}
                    onClick={() => setOpen(false)}
                  >
                    <Card
                      className={cn(
                        "aspect-video hover:bg-card transition-colors",
                        "bg-background",
                        path === node.href && "bg-card",
                      )}
                    >
                      <CardContent className="flex h-full w-full justify-center items-center">
                        <h4 className="font-bold xl:text-lg  text-primary">
                          {node.name}
                        </h4>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
                <Card className="aspect-video bg-muted">
                  <CardContent className="flex h-full w-full justify-center items-center">
                    <h4 className="text-muted-foreground">Coming soon...</h4>
                  </CardContent>
                </Card>
                {/* Add more cards here if needed */}
              </div>

              {/* Bottom Section */}
              <div className="flex-1 w-full p-6">
                <Card className="bg-muted">
                  <CardHeader>
                    <CardTitle className="border-b pb-2 border-border/30">
                      Agent Povii
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Agent Povii is an autonomous agent to answer your
                      questions, solve your problems, and assist you in various
                      tasks. It is designed to understand natural language and
                      provide helpful responses based on its training data and
                      capabilities. Whether you need information, assistance
                      with a task, or just want to have a conversation, Agent
                      Povii is here to help! Please note that while Agent Povii
                      strives to provide accurate and helpful information, it
                      may not always have the most up-to-date or comprehensive
                      knowledge. Always verify critical information from
                      reliable sources.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
