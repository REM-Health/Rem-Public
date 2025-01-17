"use client";

import { useEffect, useState } from "react";
import { Tabs, TabsTrigger } from "@/components/common/Tabs";
import { TabsList } from "@radix-ui/react-tabs";
import { CheckHeart, User03 } from "@untitled-ui/icons-react";
import ColumnEditMenu from "../../../components/data-table/ColumnEditMenu";
import { getCoreRowModel, getSortedRowModel, SortingState, useReactTable } from "@tanstack/react-table";
import DataTable from "@/components/data-table/DataTable";
import getColumns from "@/app/manage/commission/get-columns";
import FilterMenu from "@/components/data-table/FilterMenu";
import { CommissionDatum } from "@/types";

const CommissionPage = () => {
  const [currentTab, setCurrentTab] = useState("members");
  const [data, setData] = useState<CommissionDatum[]>([]);
  const [sorting, setSorting] = useState<SortingState>([]);
  useEffect(() => {
    const fetchData = async () => {
      // TODO this is using a stubbed out endpoint that return sample data.
      const response = await fetch("/api/commission");
      const json = await response.json();

      setData(json);
    };

    fetchData();
  }, []);

  const columns = getColumns(currentTab);

  const table = useReactTable<CommissionDatum>({
    data, // Ваши данные
    columns, // Колонки с сортировкой
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(), // Включает обработку сортировки
    state: {
      sorting, // Управляет текущим состоянием сортировки
    },
    onSortingChange: setSorting, // Обработчик изменений сортировки
  });

  return (
    <div className="flex h-screen w-full flex-col overflow-y-auto ml-64">
      <div className="px-8 py-6 font-header text-3xl text-evergreen-800">
        Commission
      </div>
      <div className="h-full py-4">
        <Tabs
          value={currentTab}
          onValueChange={setCurrentTab}
          className="pl-8 pr-2.5"
        >
          <TabsList className="w-full flex items-center justify-between">
            <div className="flex">
              <TabsTrigger
                value="members"
                className="flex gap-1.5 items-center"
              >
                <User03 />
                Members
              </TabsTrigger>
              <TabsTrigger
                value="enrollments"
                className="flex gap-1.5 items-center"
              >
                <CheckHeart />
                Enrollments
              </TabsTrigger>
              <TabsTrigger
                value="commissions"
                className="flex gap-1.5 items-center"
              >
                <CheckHeart />
                Commissions
              </TabsTrigger>
            </div>
            <div className="flex gap-x-1">
              <ColumnEditMenu key={currentTab} table={table} />
              <FilterMenu></FilterMenu>
            </div>
          </TabsList>
        </Tabs>
        <DataTable table={table} />
      </div>
    </div>
  );
};

export default CommissionPage;
