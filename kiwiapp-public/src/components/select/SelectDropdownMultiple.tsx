"use client";

import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import { CheckSquare, Square } from "@untitled-ui/icons-react";
import clsx from "clsx";
import { useState } from "react";

export type SelectDropdownOption<T> = {
  label: string;
  value: T;
};

type SelectDropdownMultipleProps<T> = {
  selectedValue?: T[];
  placeholder: string;
  options: SelectDropdownOption<T>[];
  onSelectedOptionChange: (newOption: SelectDropdownOption<T>[]) => void;
  onSelectedOptionClear: () => void;
};

const SelectDropdownMultiple = <T,>({
  selectedValue,
  placeholder,
  options,
  onSelectedOptionChange,
  onSelectedOptionClear,
}: SelectDropdownMultipleProps<T>) => {
  const [query, setQuery] = useState("");

  const filteredOptions =
    query === ""
      ? options
      : options.filter((option) => {
          return option.label.toLowerCase().includes(query.toLowerCase());
        });

  const onComboboxChange = (values: T[]) => {
    const newOption = options.filter((option) => values.includes(option.value));
    if (newOption) {
      onSelectedOptionChange(newOption);
    } else {
      onSelectedOptionClear();
    }
  };

  return (
    <Combobox
      immediate
      multiple
      value={selectedValue}
      onChange={onComboboxChange}
      onClose={() => setQuery("")}
    >
      <div className="relative">
        <ComboboxInput
          autoComplete="off"
          className={clsx(
            "w-full rounded-lg border border-gray-300 py-1.5 pl-3 pr-8 text-lg",
            "focus:border-evergreen-800 focus:outline-none focus:ring-0",
            query !== "" || selectedValue !== undefined
              ? "text-evergreen-800"
              : "text-neutral-200"
          )}
          displayValue={(value: string | number) => {
            return (
              options.find((option) => option.value === value)?.label || ""
            );
          }}
          onChange={(event) => setQuery(event.target.value)}
          placeholder={placeholder}
        />
        <ComboboxButton className="group absolute inset-y-0 right-0 px-2.5">
          <ChevronDownIcon className="size-5 fill-evergreen-800" />
        </ComboboxButton>
      </div>

      <ComboboxOptions
        anchor="bottom"
        transition
        className={clsx(
          `z-50 w-[var(--input-width)] border bg-white p-1 [--anchor-gap:var(--spacing-1)]
          empty:invisible`,
          "transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0"
        )}
      >
        {filteredOptions.map((option) => (
          <ComboboxOption
            key={option.label}
            value={option.value}
            className="group flex cursor-default select-none items-center gap-2 rounded-lg px-3 py-1.5 data-[focus]:bg-mintly [&:group-data-[selected]_.icon-checked]"
          >
            <CheckSquare className="hidden icon-checked" />
            <Square className="hidden icon-unchecked" />
            <div className="text-lg text-evergreen-800">{option.label}</div>
          </ComboboxOption>
        ))}
      </ComboboxOptions>
    </Combobox>
  );
};

export default SelectDropdownMultiple;
