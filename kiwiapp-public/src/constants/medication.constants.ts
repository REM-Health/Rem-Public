import type { Medication } from "@/types/medication.types";

export const DEFAULT_MEDICATION_DATA: Medication[] = [
  { name: "Adderall", dosage: "10mg", quantity: 30, daysSupply: 90 },
  { name: "Ibuprofen", dosage: "10mg", quantity: 20, daysSupply: 30 },
];

export const SEARCH_OPTIONS: string[] = ["Drug Name  (Xanax)1", "Drug Name  (Xanax)2", "Drug Name  (Xanax)3"];
