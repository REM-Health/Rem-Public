"use client";
import { useEffect, useState } from "react";

import {
  OverviewCard,
  ChartCard,
  // DoughnutChart,
  DonutChart,
  BarChart,
  SelectedBar,
} from "@/components/overview";
// import FilterMenu from "@/components/data-table/FilterMenu";
import {
  geEnrollmentsByCarrierDoughnut,
  getCommissionsByAgencyBar,
  getCommissionsByCarrierDoughnut,
  getEnrollmentsByAgencyBar,
} from "@/utils/overviewUtils";
import { chartData, IChart } from "@/utils/chartUtils";

export default function OverviewPage() {
  const [data, setData] = useState<IChart | null>(null);

  useEffect(() => {
    setData(chartData);
  }, [chartData]);

  return (
    <div className="flex h-full w-full flex-col ml-64">
      <div className="flex flex-wrap gap-2 justify-between items-center px-8 py-6 border-b border-b-black/5">
        <h1 className="font-header text-3xl text-evergreen-800">Overview</h1>
        <div className="flex flex-wrap items-center gap-6">
          <SelectedBar name="Carriers" value="6 selected" />
          <SelectedBar name="Date Range" value="Oct 2024 — Dec 2024" />
          {/* <FilterMenu /> */}
        </div>
      </div>
      <div className="h-full px-8 py-6">
        <div className="flex flex-wrap gap-4">
          <OverviewCard title="Total Agent" value="635" />
          <OverviewCard title="All Members" value="26.1K" />
          <OverviewCard title="Commissions YTD" value="$9,226,210" />
          <OverviewCard title="Chargeback YTD" value="-$768,558" />
        </div>
        <div className="flex flex-wrap gap-y-10 gap-x-4 mt-10">
          <ChartCard title="New Enrollments by Carrier">
            {data && (
              <DonutChart data={geEnrollmentsByCarrierDoughnut(data)} />
            )}
          </ChartCard>
          <ChartCard title="New Enrollments by Agency">
            {data && <BarChart data={getEnrollmentsByAgencyBar(data)} />}
          </ChartCard>
          <ChartCard title="Commissions by Carrier">
            {data && (
              <DonutChart data={getCommissionsByCarrierDoughnut(data)} />
            )}
          </ChartCard>
          <ChartCard title="Commissions by Agency">
            {data && <BarChart data={getCommissionsByAgencyBar(data)} />}
          </ChartCard>
        </div>
      </div>
    </div>
  );
}
