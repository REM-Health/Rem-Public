import type { StaticImageData } from "next/image";

export interface ICard {
  id: number;
  img: StaticImageData;
  label: string;
}
