import { Button } from "@/components/common/Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/common/DropdownMenu";
import FilterMenuDatePicker from "@/components/data-table/FilterMenuDatePicker";
import SelectDropdownMultiple from "@/components/select/SelectDropdownMultiple";
import { FilterLines } from "@untitled-ui/icons-react";
import { useState } from "react";

export default function FilterMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();

  return (
    <DropdownMenu open={isOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          className="data-[state=open]:bg-evergreen-100 data-[state=open]:text-green-400 data-[state=closed]:bg-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FilterLines />
          Filter
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="flex-col px-5 py-4 gap-y-2"
        onInteractOutside={(event) => {
          event.preventDefault();
          setIsOpen(false);
        }}
      >
        <div>
          <div className="mb-2">Date Range</div>
          <div className="flex justify-between gap-x-2">
            <div>
              <FilterMenuDatePicker
                id="startDate"
                label="Start Date"
                value={startDate}
                onSelect={setStartDate}
              />
            </div>
            <div>
              <FilterMenuDatePicker
                id="endDate"
                label="End Date"
                value={endDate}
                onSelect={setEndDate}
              />
            </div>
          </div>
        </div>
        <div>
          <div className="mb-2">Carriers</div>
          <SelectDropdownMultiple
            placeholder="woo"
            selectedValue={["blah", "woo"]}
            options={[
              { label: "Blah", value: "blah" },
              { label: "Woo Woo Woo", value: "woo" },
              { label: "Yar", value: "yar yar yar" },
            ]}
            onSelectedOptionChange={() => undefined}
            onSelectedOptionClear={() => undefined}
          />
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
