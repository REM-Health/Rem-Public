import ExtraIcon from "public/assets/icons/extras-icon.svg";
import MyDrugsIcon from "public/assets/icons/my-drugs-icon.svg";
import NotebookIcon from "public/assets/icons/notebook-icon.svg";
import AboutYouIcon from "public/assets/icons/about-you-icon.svg";
import MyDoctorIcon from "public/assets/icons/my-doctor-icon.svg";
import type { Step } from "@/types/steps.types";

export const STEPS: Step[] = [
  { id: 1, label: "Plan Type", icon: NotebookIcon },
  { id: 2, label: "About You", icon: AboutYouIcon },
  { id: 3, label: "My Drugs", icon: MyDrugsIcon },
  { id: 4, label: "My Doctors", icon: MyDoctorIcon },
  { id: 5, label: "Extras", icon: ExtraIcon },
  { id: 6, label: "Usage Frequency", icon: NotebookIcon },
];
