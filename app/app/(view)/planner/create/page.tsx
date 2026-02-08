"use client";
import { defineStepper } from "@stepperize/react";
import Image from "next/image";

export default function Page() {
  const { useStepper } = defineStepper(
    { id: "goals", title: "Goals" },
    { id: "timeefficiency", title: "Time & Efficiency" },
    { id: "others", title: "Others" },
    { id: "done", title: "Done" },
  );

  const stepper = useStepper();

  return (
    <main className="w-full h-[90dvh] flex flex-col justify-center items-center container px-4">
      {/* <p>Step: {stepper.state.current.data.title}</p>
      <div className="flex-1 w-full">
        <div className="">
          {stepper.flow.switch({
            goals: () => <p>What is your name?</p>,
            timeefficiency: () => <p>What is your email?</p>,
            others: () => <p>Other information.</p>,
            done: () => <p>All done!</p>,
          })}
        </div>
        <div className="">
          {!stepper.state.isFirst && (
            <button onClick={() => stepper.navigation.prev()}>Back</button>
          )}
          {stepper.state.isLast ? (
            <button onClick={() => stepper.navigation.reset()}>Reset</button>
          ) : (
            <button onClick={() => stepper.navigation.next()}>Next</button>
          )}
        </div>
      </div> */}
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
        </div>
      </div>
    </main>
  );
}
