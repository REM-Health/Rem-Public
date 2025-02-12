import OtherImage1 from "public/assets/images/step5/direction1.png";
import OtherImage2 from "public/assets/images/step5/direction2.png";
import OtherImage3 from "public/assets/images/step5/direction3.png";
import OtherImage4 from "public/assets/images/step5/direction4.png";
import OptionImage1 from "public/assets/images/step2/option1.png";
import OptionImage2 from "public/assets/images/step2/option2.png";
import OptionImage3 from "public/assets/images/step2/option3.png";
import OptionImage4 from "public/assets/images/step2/option4.png";
import DirectionImage1 from "public/assets/images/step5/direction1.png";
import DirectionImage2 from "public/assets/images/step5/direction2.png";
import DirectionImage3 from "public/assets/images/step5/direction3.png";
import DirectionImage4 from "public/assets/images/step5/direction4.png";
import DirectionImage5 from "public/assets/images/step5/direction5.png";
import DirectionImage6 from "public/assets/images/step5/direction6.png";
import DirectionImage7 from "public/assets/images/step5/direction7.png";
import DirectionImage8 from "public/assets/images/step5/direction8.png";
import type { ICard } from "@/types/card.types";

export const ABOUT_YOU_CARDS: ICard[] = [
  {
    id: 1,
    img: OptionImage1,
    label: "Medicare Advantage Prescription Drug",
  },
  {
    id: 2,
    img: OptionImage2,
    label: "Prescription Drug Plan",
  },

  {
    id: 3,
    img: OptionImage3,
    label: "Supplemental Insurance",
  },
  {
    id: 4,
    img: OptionImage4,
    label: "No Idea Help me out",
  },
];

export const MODAL_CARDS: ICard[] = [
  { id: 1, label: "Massage", img: OtherImage1 },
  { id: 2, label: "Acupuncture", img: OtherImage2 },
  { id: 3, label: "Mental Health", img: OtherImage3 },
  { id: 4, label: "Pet Care", img: OtherImage4 },
];

export const BENEFITS_CARDS: ICard[] = [
  {
    id: 1,
    img: DirectionImage1,
    label: "Vision",
  },
  {
    id: 2,
    img: DirectionImage2,
    label: "Dental",
  },

  {
    id: 3,
    img: DirectionImage3,
    label: "Hearing Aids",
  },
  {
    id: 4,
    img: DirectionImage4,
    label: "Groceries",
  },
  {
    id: 5,
    img: DirectionImage5,
    label: "Over-the-counter Medications",
  },
  {
    id: 6,
    img: DirectionImage6,
    label: "Gym Membership",
  },

  {
    id: 7,
    img: DirectionImage7,
    label: "Transportation",
  },
  {
    id: 8,
    img: DirectionImage8,
    label: "Other",
  },
];
