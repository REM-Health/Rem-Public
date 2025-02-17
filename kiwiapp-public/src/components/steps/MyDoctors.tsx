import Image from "next/image";
import ActionButtons from "@/components/common/ActionButtons";
import { H2 } from "@/components/common/Headers";
import StepImage4 from "public/assets/images/step4.png";
import ProvidersTable from "@/components/common/ProvidersTable";
import type { FC } from "react";
import type { IStep } from "@/types/steps.types";

const MyDoctors: FC<IStep> = ({ onPrevStep, onNextStep }) => (
  <div className="mt-7 flex w-full flex-col items-center justify-center px-5 md:mt-12">
    <div className="flex w-full flex-col items-center">
      <Image src={StepImage4} alt="My Doctors" />
      <div className="mt-16 flex w-full flex-col items-center justify-center">
        <H2 className="font-normal"> Add Your Providers</H2>
        <span className="mt-2 font-normal md:mt-5 md:text-2xl">This Helps Us Find a Plan to Minimize Your Costs</span>
      </div>
    </div>
    <div className="mt-15 flex w-full flex-col items-start gap-y-7 overflow-hidden">
      <span className="text-5 font-sans font-semibold md:text-3xl">Providers</span>
      <ProvidersTable />
    </div>
    <div className="mt-15 flex w-full flex-col justify-center gap-5">
      <div className="flex w-full flex-col">
        <span className="font-sans font-semibold">Zip Code</span>
        <input className="mt-5 h-15 rounded-md border border-black px-8" placeholder="Some..." />
      </div>
      <div className="flex w-full flex-col">
        <span className="font-sans font-semibold">Last Name of Provider</span>
        <input className="mt-5 h-15 rounded-md border border-black px-8" placeholder="Some..." />
      </div>
    </div>
    <ActionButtons onClickPrimaryButton={onNextStep} onClickSecondaryButton={onPrevStep} />
  </div>
);

export default MyDoctors;
