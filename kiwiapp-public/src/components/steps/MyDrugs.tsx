"use client";
import Image from "next/image";
import Button from "@/components/common/Button";
import ActionButtons from "@/components/common/ActionButtons";
import MedicationTable from "@/components/common/MedicationTable";
import SearchComponent from "@/components/common/Search";
import { H2 } from "@/components/common/Headers";
import StepImage3 from "public/assets/images/step3.png";
import type { FC } from "react";
import type { IStep } from "@/types/steps.types";

const SUPPLY_INPUTS = [
  {
    id: 1,
    name: "14 day",
  },
  {
    id: 2,
    name: "30 days",
  },
  {
    id: 3,
    name: "90 days",
  },
];

const MyDrugs: FC<IStep> = ({ onPrevStep, onNextStep }) => {
  const renderSupplyInputs = () => (
    <div className="mt-5 flex gap-x-4 md:gap-x-5 lg:max-w-160">
      {SUPPLY_INPUTS.map((item) => (
        <input
          key={item.id}
          name={item.name}
          className="h-15 w-full rounded-md border border-black px-8"
          placeholder=""
        />
      ))}
    </div>
  );

  return (
    <div className="mt-7 flex w-full flex-col items-center justify-center px-5 md:mt-12">
      <div className="flex w-full flex-col items-center">
        <Image src={StepImage3} alt="My Drugs" className="mb-16" />
        <div className="md: mb-15 mt-11 hidden w-full flex-col items-center justify-center md:flex">
          <H2 className="font-normal"> Add Your Prescriptions</H2>
          <span className="mt-5 text-2xl font-medium">This Helps Us Find a Plan to Minimize Your Costs</span>
        </div>
      </div>
      <div className="flex w-full flex-col items-start gap-y-7 overflow-hidden md:gap-y-12">
        <span className="font-sans text-xl font-semibold md:text-2xl">Enrolled Drugs</span>
        <MedicationTable />
      </div>
      <div className="mt-16 w-full">
        <span className="pl-7 font-sans text-base font-semibold">Search for medication</span>
        <SearchComponent />
      </div>
      <div className="mt-15 flex w-full flex-col gap-5 lg:flex-row">
        <div>
          <span className="font-sans font-semibold md:pl-7">Supply</span>
          {renderSupplyInputs()}
        </div>
        <div className="flex flex-col">
          <span className="font-sans font-semibold md:pl-7">Quantity</span>
          <div className="mt-5 flex flex-col gap-y-7 md:flex-row md:gap-x-5">
            <input className="h-15 w-full rounded-md border border-black p-2 lg:w-78" placeholder="" />
            <Button type="fill" className="flex h-15 w-full items-center justify-center rounded-full bg-black lg:w-78">
              <span className="text-base leading-tight text-white">Add Medication</span>
            </Button>
          </div>
        </div>
      </div>
      <ActionButtons onClickPrimaryButton={onNextStep} onClickSecondaryButton={onPrevStep} />
    </div>
  );
};
export default MyDrugs;
