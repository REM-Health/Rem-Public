"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Tabs, TabsTrigger } from "@/components/common/Tabs";
import { TabsList } from "@radix-ui/react-tabs";
import { CheckHeart, User03 } from "@untitled-ui/icons-react";
import ColumnEditMenu from "../../../components/data-table/ColumnEditMenu";
import {
  ColumnSort,
  getCoreRowModel,
  getSortedRowModel,
  OnChangeFn,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import {
  keepPreviousData,
  QueryClient,
  QueryClientProvider,
  useInfiniteQuery,
} from "@tanstack/react-query";
import { useVirtualizer } from "@tanstack/react-virtual";

import DataTable from "@/components/data-table/DataTable";
import getColumns from "@/app/manage/commission/get-columns";
import FilterMenu from "@/components/data-table/FilterMenu";
import downloadExcel from "@/utils/excelDownloadReports";
import { CommissionDatum } from "@/types";

type ApiResponse = {
  data: CommissionDatum[];
  meta: {
    totalRowCount: number;
  };
};
const fetchSize = 50;

const formatDateToMMDDYY = (date: Date): string => {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear() % 100;
  return `${day}/${month}/${year}`;
};

const filterDataByDateRange = (
  data: CommissionDatum[],
  startDate: Date,
  endDate: Date
) => {
  const formattedStartDate = formatDateToMMDDYY(startDate);
  const formattedEndDate = formatDateToMMDDYY(endDate);

  const res = data.filter((item) => {
    if (!item["Disenrollment Date"]) return false;

    return (
      item["Disenrollment Date"] >= formattedStartDate &&
      item["Disenrollment Date"] <= formattedEndDate
    );
  });

  return res;
};

const queryClient = new QueryClient();

const CApp = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <CommissionPage />
    </QueryClientProvider>
  );
};

const CommissionPage = () => {
  const [currentTab, setCurrentTab] = useState("members");
  const [data, setData] = useState<CommissionDatum[]>([]);
  const [sorting, setSorting] = useState<SortingState>([]);
  const [selectedCarriers, setSelectedCarriers] = useState<string[]>([]);
  const [dataFromCsv, setDataFromCsv] = useState<CommissionDatum[]>(data);
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const [carrierFiltredData, setCarrierFiltredData] = useState<
    CommissionDatum[]
  >([]);
  const [visibleColumnIds, setVisibleColumns] = useState<
    Set<string> | undefined
  >();
  const tableContainerRef = useRef<HTMLDivElement>(null);

  const [columnOrder, setColumnOrder] = useState<string[]>([]);

  const fetchData = async (
    start: number,
    size: number,
    sorting: SortingState
  ) => {
    // TODO this is using a stubbed out endpoint that return sample data.
    const response = await fetch("/api/commission");
    const json = await response.json();

    const dbData = [...json];
    if (sorting.length) {
      const sort = sorting[0] as ColumnSort;
      const { id, desc } = sort as { id: keyof CommissionDatum; desc: boolean };
      dbData.sort((a, b) => {
        if (desc) {
          return a[id] < b[id] ? 1 : -1;
        }
        return a[id] > b[id] ? 1 : -1;
      });
    }

    return {
      data: dbData.slice(start, start + size),
      meta: {
        totalRowCount: dbData.length,
      },
    };
  };

  const {
    data: fetchedData,
    fetchNextPage,
    isFetching,
    isLoading,
  } = useInfiniteQuery<ApiResponse>({
    queryKey: [
      "commission",
      sorting, //refetch when sorting changes
    ],
    queryFn: async ({ pageParam = 0 }) => {
      const start = (pageParam as number) * fetchSize;
      const fetchedData = await fetchData(start, fetchSize, sorting); //pretend api call

      return fetchedData;
    },
    initialPageParam: 0,
    getNextPageParam: (_lastGroup, groups) => groups.length,
    refetchOnWindowFocus: false,
    placeholderData: keepPreviousData,
  });

  const flatData = useMemo(
    () => fetchedData?.pages?.flatMap((page) => page.data) ?? [],
    [fetchedData]
  );
  useEffect(() => {
    setDataFromCsv(flatData);
  }, [flatData]);

  const totalDBRowCount = fetchedData?.pages?.[0]?.meta?.totalRowCount ?? 0;
  const totalFetched = flatData.length;

  const fetchMoreOnBottomReached = useCallback(
    (containerRefElement?: HTMLDivElement | null) => {
      if (containerRefElement) {
        const { scrollHeight, scrollTop, clientHeight } = containerRefElement;
        //once the user has scrolled within 500px of the bottom of the table, fetch more data if we can
        if (
          scrollHeight - scrollTop - clientHeight < 500 &&
          !isFetching &&
          totalFetched < totalDBRowCount
        ) {
          fetchNextPage();
        }
      }
    },
    [fetchNextPage, isFetching, totalFetched, totalDBRowCount]
  );

  useEffect(() => {
    fetchMoreOnBottomReached(tableContainerRef.current);
  }, [fetchMoreOnBottomReached]);

  useEffect(() => {
    if (selectedCarriers.length) {
      const res = dataFromCsv.filter((item) =>
        selectedCarriers.includes(item.CARRIER)
      );
      setCarrierFiltredData(res);
    } else {
      setCarrierFiltredData(dataFromCsv);
    }
  }, [selectedCarriers, dataFromCsv]);

  useEffect(() => {
    if (startDate && endDate && carrierFiltredData) {
      const res = filterDataByDateRange(carrierFiltredData, startDate, endDate);
      setData(res);
    } else {
      setData(carrierFiltredData);
    }
  }, [carrierFiltredData, startDate, endDate]);

  const uniqueCarriers = Array.from(
    new Set(dataFromCsv.map((item) => item.CARRIER).filter(Boolean))
  );

  const columns = useMemo(() => getColumns(currentTab), [currentTab]);

  const table = useReactTable<CommissionDatum>({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
    },
    onSortingChange: setSorting,
  });

  const handleSortingChange: OnChangeFn<SortingState> = (updater) => {
    setSorting(updater);
    if (!!table.getRowModel().rows.length) {
      rowVirtualizer.scrollToIndex?.(0);
    }
  };

  table.setOptions((prev) => ({
    ...prev,
    onSortingChange: handleSortingChange,
  }));

  const { rows } = table.getRowModel();

  const rowVirtualizer = useVirtualizer({
    count: rows.length,
    estimateSize: () => 33, //estimate row height for accurate scrollbar dragging
    getScrollElement: () => tableContainerRef.current,
    //measure dynamic row height, except in firefox because it measures table border height incorrectly
    measureElement:
      typeof window !== "undefined" &&
      navigator.userAgent.indexOf("Firefox") === -1
        ? (element) => element?.getBoundingClientRect().height
        : undefined,
    overscan: 5,
  });

  const handleColumnVisibilityChange = (columns: Set<string>) => {
    setVisibleColumns(columns);
  };

  if (isLoading) {
    return <>Loading...</>;
  }
  return (
    <div className='flex h-screen w-full flex-col overflow-y-auto ml-64'>
      <div className='px-8 py-6 font-header text-3xl text-evergreen-800'>
        Commission
      </div>
      <div className='h-full py-4'>
        <Tabs
          value={currentTab}
          onValueChange={setCurrentTab}
          className='pl-8 pr-2.5'>
          <TabsList className='w-full flex items-center justify-between'>
            <div className='flex'>
              <TabsTrigger
                value='members'
                className='flex gap-1.5 items-center'>
                <User03 />
                Members
              </TabsTrigger>
              <TabsTrigger
                value='enrollments'
                className='flex gap-1.5 items-center'>
                <CheckHeart />
                Enrollments
              </TabsTrigger>
              <TabsTrigger
                value='commissions'
                className='flex gap-1.5 items-center'>
                <CheckHeart />
                Commissions
              </TabsTrigger>
            </div>
            <div className='flex gap-x-1'>
              <ColumnEditMenu
                key={currentTab}
                onColumnVisibilityChange={handleColumnVisibilityChange}
                setColumnOrder={setColumnOrder}
                columnOrder={columnOrder}
                table={table}
              />
              <FilterMenu
                selectedCarriers={selectedCarriers}
                setSelectedCarriers={setSelectedCarriers}
                carriers={uniqueCarriers}
                setStartDate={setStartDate}
                setEndDate={setEndDate}
                startDate={startDate}
                endDate={endDate}
              />
              <button
                className='flex items-center justify-center w-9 h-9 bg-white rounded-[8px] shadow-md '
                onClick={() => downloadExcel(data, visibleColumnIds)}>
                <svg
                  width='21'
                  height='21'
                  viewBox='0 0 21 22'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M19.9569 13.3311V14.5311C19.9569 16.2112 19.9569 17.0513 19.6299 17.693C19.3423 18.2575 18.8834 18.7165 18.3189 19.0041C17.6771 19.3311 16.8371 19.3311 15.1569 19.3311H6.75691C5.07675 19.3311 4.23667 19.3311 3.59494 19.0041C3.03045 18.7165 2.57151 18.2575 2.28389 17.693C1.95691 17.0513 1.95691 16.2112 1.95691 14.5311V13.3311M15.9569 8.33105L10.9569 13.3311M10.9569 13.3311L5.95691 8.33105M10.9569 13.3311V1.33105'
                    stroke='#172A25'
                    stroke-width='2'
                  />
                </svg>
              </button>
            </div>
          </TabsList>
        </Tabs>

        <div
          onScroll={(e) => fetchMoreOnBottomReached(e.currentTarget)}
          ref={tableContainerRef}
          style={{
            overflow: "auto", //our scrollable table container
            position: "relative", //needed for sticky header
            height: "1000px", //should be a fixed height
          }}>
          <DataTable
            columnOrder={columnOrder}
            setColumnOrder={setColumnOrder}
            table={table}
            rowVirtualizer={rowVirtualizer}
            isFetching={isFetching}
          />
        </div>
      </div>
    </div>
  );
};

export default CApp;
