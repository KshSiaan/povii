"use client";
import { Button } from "@/components/ui/button";
import { defineStepper } from "@stepperize/react";
import Image from "next/image";
import { z } from "zod";

const goaltime = z.object({
  mainGoal: z.string().min(1, "Main goal is required"),
  subTopics: z.array(z.string()).min(1, "At least one sub-topic is required"),
  selectTimeType: z.enum(["daily", "hour"]),
  time: z.string().min(1, "Time is required"),
});

const learningEfficiency = z.object({
  learnerType: z.enum(["fast", "medium", "slow"]),
  depth: z.enum(["shallow", "medium", "deep"]),
  microRevisionInterval: z.string().optional(),
  lastRevision: z.string().default("1"),
  mainMode: z.enum(["relax", "strict"]),
});

export type GoalTimeSchema = z.infer<typeof goaltime>;
export type LearningEfficiencySchema = z.infer<typeof learningEfficiency>;

export default function Page() {
  const { useStepper } = defineStepper(
    { id: "goals", title: "What are your goals to achieve?", schema: goaltime },
    {
      id: "timeefficiency",
      title: "Tell me about your time & efficiency",
      schema: learningEfficiency,
    },
    { id: "finalize", title: "Lets see if everything looks good" },
  );

  const stepper = useStepper();

  return (
    <main className="w-full h-[90dvh] flex flex-col justify-center items-center container px-4">
      <div className="h-full aspect-square w-full rounded-lg bg-white shadow">
        <div className="h-full w-full grid lg:grid-cols-3">
          <div className="h-full w-full flex justify-center items-center">
            <div className="h-full w-3/4 relative">
              <Image
                src={"/povii_planning.webp"}
                fill
                alt="Planning Image"
                className="object-contain object-center"
              />
            </div>
          </div>
          <div className="h-full w-full col-span-2 p-4 flex flex-col justify-start items-start">
            <div className="text-xl font-bold">
              {stepper.state.current.data.title}
            </div>
            <div className="flex-1 w-full flex flex-col justify-start items-start gap-4">
              <div className="flex-1 w-full">
                {stepper.flow.switch({
                  goals: () => <p>What is your name?</p>,
                  timeefficiency: () => <p>What is your email?</p>,
                })}
              </div>
              <div className="flex gap-2 justify-between w-full">
                <Button
                  onClick={() => stepper.navigation.prev()}
                  variant={"outline"}
                  disabled={stepper.state.isFirst}
                >
                  Back
                </Button>

                <Button
                  onClick={() => stepper.navigation.next()}
                  disabled={stepper.state.isLast}
                >
                  Next
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
