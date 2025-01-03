import { CommissionData, CommissionDatum } from "@/pages/api/commission/types";
import type { NextApiRequest, NextApiResponse } from "next";
import { readFile } from "node:fs/promises";
import Papa from "papaparse";

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<CommissionData>
) => {
  const { limit = 100, sortBy, sortOrder } = req.body;

  const fileContents = await readFile(
    `${process.cwd()}/src/pages/api/commission/sample-data.csv`,
    "utf-8"
  );
  const { data } = Papa.parse<CommissionDatum>(fileContents, { header: true });

  const results = new Array(limit).fill(undefined).map(() => {
    const randomRowIndex = Math.floor(data.length * Math.random());

    return data[randomRowIndex];
  });

  res.status(200).json(results);
};

export default handler;
