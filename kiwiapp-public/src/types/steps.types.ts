import type { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface Step {
  id: number;
  icon: StaticImport;
  label: string;
  query: string;
}

export interface IStep {
  onNextStep: () => void;
  onPrevStep: () => void;
}
