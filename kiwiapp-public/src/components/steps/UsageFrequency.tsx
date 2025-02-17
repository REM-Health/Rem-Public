"use client";
import type { FC } from "react";
import Image from "next/image";
import ActionButtons from "@/components/common/ActionButtons";
import RangeSelector from "@/components/common/RangeSelector";
import { H2 } from "@/components/common/Headers";
import { RANGE_LIST } from "@/constants/usage-frequenc.constants";
import StepImage6 from "public/assets/images/step6.png";
import type { IStep } from "@/types/steps.types";

const UsageFrequency: FC<IStep> = ({ onPrevStep, onNextStep }) => (
  <div className="flex w-full flex-col items-center justify-center px-5">
    <div className="flex w-full flex-col items-center">
      <Image src={StepImage6} alt="Usage Frequency" className="mt-9" />
      <div className="mt-18 flex w-full flex-col items-center justify-center md:mt-10">
        <H2 className="text-center font-normal leading-snug md:max-w-208 md:!leading-tight">
          Now All We Need To Know Is How Often You Visit Providers.
        </H2>
        <span className="mt-2 max-w-79 text-center font-normal capitalize leading-6 md:max-w-172 md:text-2xl md:normal-case md:leading-9">
          This helps us ensure we get you a good level of coverage and potentially reduce out of pocket costs.
        </span>
      </div>
    </div>
    <div className="mt-15 flex w-full flex-col gap-y-7 md:mt-24">
      {RANGE_LIST.map((item) => (
        <div key={item.id} className="flex w-full flex-col gap-y-5 md:gap-y-7">
          <span className="font-sans font-semibold md:text-xl">{item.title}</span>
          <RangeSelector />
        </div>
      ))}
    </div>
    <ActionButtons onClickSecondaryButton={onPrevStep} onClickPrimaryButton={onNextStep} />
  </div>
);

export default UsageFrequency;
