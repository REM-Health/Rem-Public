"use client";
import React, { memo, useRef, useState, useEffect, type FC } from "react";
import Image from "next/image";
import Link from "next/link";
import CheckIcon from "@/components/icons/CheckIcon";
import { STEPS } from "@/constants/steps-line.constants";
import { cn } from "@/utils/common.utils";
import type { Step } from "@/types/steps.types";

interface StepLineProps {
  activeStep: number;
}

const StepLine: FC<StepLineProps> = ({ activeStep }) => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const [stepObject, setStepObject] = useState<Step>(STEPS[0]);

  useEffect(() => {
    const currentStep = STEPS.find((step) => step.id === activeStep);
    if (currentStep) {
      setStepObject(currentStep);
    }
  }, [activeStep]);

  return (
    <div ref={wrapperRef} className="mt-7 px-5 md:mt-15">
      <div className="flex w-full flex-col items-center">
        <div className="flex w-full items-center rounded-full">
          <div className="z-20 flex w-full items-center justify-center md:justify-around">
            <div className="h-px w-full rounded-full bg-rem-green-400 md:max-w-19" />
            {STEPS.map((step, index, array) => {
              const isLast = index === array.length - 1;

              return (
                <div
                  key={step.id}
                  className={cn("flex flex-row items-center md:w-full", {
                    "md:w-auto": isLast,
                  })}
                >
                  <Link
                    href={`?tab=${step.query}`}
                    className={cn(
                      "relative flex min-h-10 min-w-10 items-center justify-center rounded-full bg-gray-300 text-black",
                      {
                        "bg-rem-green-400": step.id <= stepObject.id,
                      },
                    )}
                  >
                    <div className="hidden md:block">
                      {step.id < stepObject.id ? (
                        <CheckIcon />
                      ) : (
                        <span className="font-sans text-xl font-medium">{step.id}</span>
                      )}
                    </div>
                    <div className="flex items-center justify-center md:hidden">
                      <Image src={step.icon} alt={step.label} />
                    </div>
                    <div
                      className={cn(
                        `absolute -bottom-10 w-max rounded-full border border-neutral-100 px-4 py-1 font-sans text-xs font-medium md:block
                        md:rounded-none md:border-none md:px-0 md:py-0 md:text-xl`,
                        {
                          hidden: step.id !== activeStep,
                        },
                      )}
                    >
                      {step.label}
                    </div>
                  </Link>
                  <div
                    className={cn("h-px w-4 rounded-full bg-rem-green-400 md:w-full", {
                      hidden: isLast,
                      "bg-gray-200": step.id >= stepObject.id,
                    })}
                  />
                </div>
              );
            })}
            <div
              className={cn("h-px w-full rounded-full bg-gray-200 md:max-w-19", {
                "bg-rem-green-400": STEPS[STEPS.length - 1].id === stepObject.id,
              })}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(StepLine);
