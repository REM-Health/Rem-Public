"use client";
import { useCallback, type FC, type FormEvent } from "react";
import Image from "next/image";
import ActionButtons from "@/components/common/ActionButtons";
import { H2 } from "@/components/common/Headers";
import { Container } from "@/components/common/Container";
import StepImage1 from "public/assets/images/step1Image.png";
import { IStep } from "@/types/steps.types";

const PlanType: FC<IStep> = ({ onPrevStep, onNextStep }) => {
  const handleChange = useCallback((e: FormEvent<HTMLInputElement>) => {
    e.currentTarget.value = e.currentTarget.value.replace(/\D/g, "").slice(0, 5);
  }, []);

  return (
    <div className="mt-2">
      <Container>
        <div className="flex flex-col items-center justify-center">
          <Image src={StepImage1} alt="Plan type" className="py-11" />
          <div className="mt-11 flex w-full flex-col items-center justify-center px-5">
            <H2 className="font-normal">What’s Your ZIP Code?</H2>
            <span className="mt-3 text-center text-base font-medium capitalize leading-tight md:mt-5">
              We need to know this in order to check which plans are available in your area.
            </span>
          </div>
          <div className="mt-7 flex w-full flex-col px-5 md:mt-10">
            <input
              className="h-15 w-full rounded-md border border-evergreen-800 bg-white px-5 placeholder-evergreen-800 md:w-full"
              placeholder="Enter Zip Code"
              maxLength={5}
              inputMode="numeric"
              onInput={handleChange}
              title="Enter exactly 5 digits"
              required
            />
            <ActionButtons
              className="mt-7 md:mt-10"
              onClickPrimaryButton={onNextStep}
              onClickSecondaryButton={onPrevStep}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PlanType;
