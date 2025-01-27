import { Button } from "@/components/common/Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/common/DropdownMenu";
import DatePicker from "@/components/data-table/DatePicker";
import SelectDropdownMultiple from "@/components/select/SelectDropdownMultiple";
import { FilterLines } from "@untitled-ui/icons-react";
import { useState } from "react";

interface FilterMenuProps {
  carriers: string[]; 
  setSelectedCarriers: React.Dispatch<React.SetStateAction<string[]>>;
  selectedCarriers: string[];
  startDate: Date | undefined;
  setStartDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
  endDate: Date | undefined;
  setEndDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
}

export default function FilterMenu({
  carriers,
  setSelectedCarriers,
  selectedCarriers,

  setStartDate,
  setEndDate,
  startDate,
  endDate,
}: FilterMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DropdownMenu open={isOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          className='data-[state=open]:bg-evergreen-100 data-[state=open]:text-green-400 data-[state=closed]:bg-white'
          onClick={() => setIsOpen(!isOpen)}>
          <FilterLines />
          Filter
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align='end'
        className='flex-col px-5 py-4 gap-y-2'
        onInteractOutside={(event) => {
          event.preventDefault();
          setIsOpen(false);
        }}>
        <div>
          <div className='mb-2'>Date Range</div>
          <div className='flex justify-between gap-x-2'>
            <div>
              <DatePicker
                id='startDate'
                label='Start Date'
                value={startDate}
                onSelect={setStartDate}
              />
            </div>
            <div>
              <DatePicker
                id='endDate'
                label='End Date'
                value={endDate}
                onSelect={setEndDate}
              />
            </div>
          </div>
        </div>
        <div>
          <div className='mb-2'>Carriers</div>
          <SelectDropdownMultiple
            placeholder='Select carriers'
            selectedValue={selectedCarriers}
            options={carriers?.map((carrier) => ({
              label: carrier,
              value: carrier,
            }))}
            onSelectedOptionChange={(values) => {
              setSelectedCarriers(values);
            }}
          />
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
