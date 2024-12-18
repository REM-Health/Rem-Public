"use client";

import { useEffect, useState } from "react";
import Papa from "papaparse";
import { Data } from "@/components/common/DataTable";

const CommissionPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/sample.csv");
      const reader = response.body?.getReader();
      const result = await reader?.read();
      const decoder = new TextDecoder("utf-8");
      const csv = decoder.decode(result?.value);
      const parsedData = Papa.parse(csv, { header: true });
      setData(parsedData.data);
    };

    fetchData();
  }, []);

  return (
    <div className="flex h-full w-full flex-col">
      <div className="px-8 py-6 font-header text-3xl text-evergreen-800">
        Commission
      </div>
      <div className="h-full px-8 py-4">
        <DataTable data={data} />
      </div>
    </div>
  );
};

export default CommissionPage;
