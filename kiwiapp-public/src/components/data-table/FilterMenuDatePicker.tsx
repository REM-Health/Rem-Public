import { Button } from "@/components/common/Button";
import { Calendar } from "@/components/common/Calendar";
import { Label } from "@/components/common/Label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/common/Popover";
import { Calendar as CalendarIcon } from "@untitled-ui/icons-react";
import { SelectSingleEventHandler } from "react-day-picker";
import { format } from "date-fns";
import { Dispatch, SetStateAction, useCallback, useState } from "react";

interface FilterMenuDatePickerProps {
  id: string;
  label: string;
  onSelect: Dispatch<SetStateAction<Date | undefined>>;
  value: Date | undefined;
}

export default function FilterMenuDatePicker({
  label,
  id,
  onSelect,
  value,
}: FilterMenuDatePickerProps) {
  const [isOpen, setIsOpen] = useState(false);

  const togleOpenHandler = useCallback(
    () => setIsOpen(!isOpen),
    [setIsOpen, isOpen]
  );

  const clearHandler = useCallback(() => onSelect(undefined), [onSelect]);

  const selectHandler = useCallback((date: Date | undefined) => {
    onSelect(date);
    setIsOpen(false);
  }, []);

  return (
    <Popover open={isOpen} onOpenChange={togleOpenHandler}>
      <div className="flex justify-between items-center mb-1">
        <Label htmlFor={id}>{label}</Label>
        <Button
          variant="ghost"
          className="text-green-400 p-0 h-auto"
          onClick={clearHandler}
        >
          Clear
        </Button>
      </div>
      <PopoverTrigger id={id} asChild>
        <Button variant="outline" className="flex w-[180px] justify-between">
          <span>{value ? format(value, "P") : "00/00/0000"}</span>
          <CalendarIcon />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        {/* Using an older version of the react-day-picker here.
         * [See this issue](https://github.com/shadcn-ui/ui/issues/5417)
         */}
        <Calendar
          mode="single"
          selected={value}
          onSelect={selectHandler}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
