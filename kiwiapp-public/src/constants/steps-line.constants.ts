import ExtraIcon from "public/assets/icons/extras-icon.svg";
import MyDrugsIcon from "public/assets/icons/my-drugs-icon.svg";
import NotebookIcon from "public/assets/icons/notebook-icon.svg";
import AboutYouIcon from "public/assets/icons/about-you-icon.svg";
import MyDoctorIcon from "public/assets/icons/my-doctor-icon.svg";
import type { Step } from "@/types/steps.types";

export enum StepQueries {
  PlanType = "plan-type",
  AboutYou = "about-you",
  MyDrugs = "my-drugs",
  MyDoctors = "my-doctor",
  Extras = "extras",
  UsageFrequency = "usage-frequency",
}

export const STEPS: Step[] = [
  { id: 1, label: "Plan Type", icon: NotebookIcon, query: StepQueries.PlanType },
  { id: 2, label: "About You", icon: AboutYouIcon, query: StepQueries.AboutYou },
  { id: 3, label: "My Drugs", icon: MyDrugsIcon, query: StepQueries.MyDrugs },
  { id: 4, label: "My Doctors", icon: MyDoctorIcon, query: StepQueries.MyDoctors },
  { id: 5, label: "Extras", icon: ExtraIcon, query: StepQueries.Extras },
  { id: 6, label: "Usage Frequency", icon: NotebookIcon, query: StepQueries.UsageFrequency },
];
