"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "motion/react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
export default function Page() {
  const [currentStep, setCurrentStep] = useState(0);
  return (
    <main className="h-dvh w-dvw relative overflow-hidden">
      <motion.div
        className="magicblob flex justify-center items-center -translate-x-1/2 -translate-y-1/2 bg-no-repeat! absolute"
        initial={{
          height: "80%",
          width: "80%",
          top: "50%",
          left: "50%",
        }}
        animate={{
          height: currentStep > 0 ? "30%" : "80%",
          width: currentStep > 0 ? "30%" : "80%",
          top: currentStep > 0 ? "15%" : "50%",
          left: currentStep > 0 ? "50%" : "50%",
        }}
        transition={{
          duration: 0.6,
          //   ease: "easeInOut",
          stiffness: 100,
          type: "spring",
        }}
      >
        <motion.div
          className="h-2/3 w-2/3"
          initial={{ y: 0 }}
          animate={{ y: [-20, 20, -20] }}
          transition={{
            duration: 10,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        >
          <Image
            src={"/povi_flying.webp"}
            height={500}
            width={300}
            draggable={false}
            className="h-full w-full object-contain"
            alt="povii-fly"
          />
        </motion.div>
      </motion.div>
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        initial={{ opacity: 0, display: "none" }}
        animate={{
          opacity: currentStep > 0 ? 1 : 0,
          display: currentStep > 0 ? "block" : "none",
        }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-center">Hi, I'm Povii!</h1>
        <p className="text-center text-muted-foreground mt-4 text-sm">
          My main goal is to help you study and learn effectively.
          <br />
          With my AI Skills and interactive features, I can make your learning
          experience fun and engaging!
        </p>
        <div className="flex justify-center items-center mt-6">
          <Button className="mx-auto">Click here for tutorial</Button>
        </div>
      </motion.div>
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        initial={{ opacity: 0, display: "none" }}
        animate={{
          opacity: currentStep > 1 ? 1 : 0,
          display: currentStep > 1 ? "block" : "none",
        }}
        transition={{ duration: 3 }}
      >
        <h1 className="text-4xl font-bold text-center">Hi, I'm Povii!</h1>
        <p className="text-center text-muted-foreground mt-4 text-sm">
          My main goal is to help you study and learn effectively.
          <br />
          With my AI Skills and interactive features, I can make your learning
          experience fun and engaging!
        </p>
        <div className="flex justify-center items-center mt-6">
          <Button className="mx-auto">Click here for tutorial</Button>
        </div>
      </motion.div>
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2  flex gap-4">
        <Button
          onClick={() => {
            setCurrentStep(currentStep - 1);
          }}
          className={cn(currentStep > 0 ? "block" : "hidden")}
          variant={"ghost"}
        >
          Go back
        </Button>
        <Button
          onClick={() => {
            setCurrentStep(currentStep + 1);
          }}
          variant={currentStep > 0 ? "link" : "default"}
          asChild={currentStep >= 1}
        >
          {currentStep === 0 ? (
            "Introduce Yourself"
          ) : (
            <Link href="/app">Start Learning with Povii</Link>
          )}
        </Button>
      </div>
    </main>
  );
}
