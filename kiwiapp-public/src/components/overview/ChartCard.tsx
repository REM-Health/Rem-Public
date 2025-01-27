"use client";

import { FC, ReactNode } from "react";

interface ChartCardProps {
  title: string;
  children: ReactNode;
}
export const ChartCard: FC<ChartCardProps> = ({ title, children }) => {
  return (
    <div className="min-w-full lg:min-w-[48%] flex gap-2 flex-col justify-between p-7 shadow rounded-lg bg-white min-h-[115px] flex-1">
      <h4 className="font-header font-normal text-2xl leading-none">{title}</h4>
      <div className="max-w-lg min-h-[250px] mx-auto w-full h-full flex-1">
        {children}
      </div>
    </div>
  );
};
