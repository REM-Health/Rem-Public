import { memo, useCallback, useState, type ChangeEvent } from "react";
import { SEARCH_OPTIONS } from "@/constants/medication.constants";

const SearchComponent = () => {
  const [query, setQuery] = useState("");
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleSelect = useCallback(
    (option: string) => () => {
      setSelectedOption(option);
      setQuery(option);
    },
    [],
  );

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  }, []);

  return (
    <div className="relative w-full">
      <input
        type="text"
        value={query}
        onChange={onChange}
        className="mt-5 h-15 w-full rounded border border-black px-4 font-sans text-base font-medium leading-tight"
        placeholder="Search..."
      />
      <div className="mt-5 w-full rounded border border-neutral-100 bg-white p-2">
        {SEARCH_OPTIONS.map((option, index) => (
          <div key={index} className="flex h-15 items-center border-b p-2" onClick={handleSelect(option)}>
            <button
              className={`mr-3 h-5 w-5 rounded-full border ${selectedOption === option ? "bg-rem-green-400" : "bg-neutral-100"}`}
            />
            <span className="font-sans text-base font-medium leading-tight">{option}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(SearchComponent);
