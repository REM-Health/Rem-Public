"use client";

import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { CheckSquare, Square } from "@untitled-ui/icons-react";
import clsx from "clsx";
import { useState } from "react";

export type SelectDropdownOption<T> = {
  label: string;
  value: T;
};

type SelectDropdownMultipleProps<T> = {
  selectedValue: T[];
  placeholder: string;
  options: SelectDropdownOption<T>[];
  onSelectedOptionChange: (newOption: T[]) => void;
};

const SelectDropdownMultiple = <T,>({
  selectedValue,
  placeholder,
  options,
  onSelectedOptionChange,
}: SelectDropdownMultipleProps<T>) => {
  const [query, setQuery] = useState("");
  const filteredOptions =
    query === ""
      ? options
      : options.filter((option) =>
          option.label.toLowerCase().includes(query.toLowerCase())
        );

  const toggleSelection = (value: T) => {
    const currentSelections = selectedValue || [];

    if (currentSelections.includes(value)) {
      onSelectedOptionChange(currentSelections.filter((v) => v !== value));
    } else {
      onSelectedOptionChange([...currentSelections, value]);
    }
  };

  return (
    <Combobox
      immediate
      multiple
      value={selectedValue}
      onClose={() => setQuery("")}>
      <div className='relative'>
        <ComboboxInput
          // autoComplete='off'
          className={clsx(
            "w-full rounded-lg border border-gray-300 py-2 pl-3 pr-10",
            "focus:border-blue-500 focus:ring-0 focus:outline-none",
            selectedValue?.length ? "text-gray-900" : "text-gray-400"
          )}
          placeholder={placeholder}
          displayValue={(carrier: string) => carrier}
          onChange={(e) => setQuery(e.target.value)}
        />
        <ComboboxButton className='group absolute inset-y-0 right-0 px-2.5'>
          <ChevronDownIcon className='size-5 fill-evergreen-800' />
        </ComboboxButton>
      </div>
      <ComboboxOptions className='z-50 w-full border bg-white p-1 shadow-lg rounded-lg'>
        {filteredOptions.map((option, index) => (
          <ComboboxOption
            key={index}
            value={option.value}
            onClick={() => toggleSelection(option.value)}
            className={clsx(
              "flex items-center gap-2 cursor-pointer px-3 py-1.5 rounded-lg",
              selectedValue?.includes(option.value)
                ? "bg-evergreen-100"
                : "hover:bg-gray-200"
            )}>
            {selectedValue?.includes(option.value) ? (
              <CheckSquare className='text-evergreen-800' />
            ) : (
              <Square className='text-gray-400' />
            )}
            <span className='text-evergreen-800'>{option.label}</span>
          </ComboboxOption>
        ))}
      </ComboboxOptions>
    </Combobox>
  );
};

export default SelectDropdownMultiple;
