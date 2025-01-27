import { readFile } from "node:fs/promises";
import path from "path";
import Papa from "papaparse";

import { NextResponse } from "next/server";

export interface CommissionDatum {
  CARRIER: string;
  MBI: string;
  MEMBER_ID: string;
  "Member Name": string;
  "Agent Name": string;
  "Agent NPN": string;
  "Plan Name": string;
  "Plan ID": string;
  "Effective Date": string;
  "Disenrollment Date": string;
  "Enrollment Type": string;
  "Commission Period": string;
  "Commission Paid Date": string;
  "Commission Amount Total": string;
  "Commission Compensation Type": string;
  "Commission Agent Amount": string;
  "Commission Agency 1": string;
  "Commission Agency 1 Amount": string;
  "Commission Agency 2": string;
  "Commission Agency 2 Amount": string;
  [key: string]: string | undefined;
}

export async function GET() {
  try {
    const csvFilePath = path.join(
      process.cwd(),
      "src",
      "data",
      // "sample-data.csv",
      "Commission_sample_data.csv"
    );

    const fileContents = await readFile(csvFilePath, "utf-8");
    const { data } = Papa.parse<CommissionDatum>(fileContents, {
      header: true,
    });

    const results = new Array(100).fill(undefined).map(() => {
      const randomRowIndex = Math.floor(data.length * Math.random());

      return data[randomRowIndex];
    });
    return NextResponse.json(results);
  } catch (error) {
    // Return error with 500 status code
    return NextResponse.json({ error: error });
  }
}
