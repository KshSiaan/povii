import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ClockIcon, PlusIcon, ZapIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <main className="w-full flex flex-col justify-center items-center">
      <div className="flex justify-between items-center w-full h-full container mx-auto px-4">
        <h1 className="text-2xl font-semibold">Study Planner</h1>
        <Button asChild>
          <Link href={"/app/planner/create"}>
            <PlusIcon /> Create a new plan
          </Link>
        </Button>
      </div>
      <div className="w-full container mx-auto px-4 py-6">
        <Card className="w-full h-full bg-muted">
          <CardHeader>
            <CardTitle className="text-sm text-muted-foreground">
              Plan #1
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="font-bold text-xl">
              Goal: Learn React in 30 days
            </div>
            <p>
              Learn Basics &gt; Read Theories &gt; Build Projects &gt; Practice
              Daily &gt; Revise Everything
            </p>
          </CardContent>
          <CardFooter className="flex justify-between items-center">
            <div className="space-x-2">
              <Badge variant={"destructive"}>
                <ZapIcon /> Strict
              </Badge>
              <Badge variant={"outline"}>
                <ClockIcon /> 3 days
              </Badge>
            </div>
            <Button variant={"outline"}>View Details</Button>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
}
