import { useState, useCallback, useMemo } from "react";

export const useBoolean = (initialValue: boolean) => {
  const [value, setValue] = useState<boolean>(initialValue);

  const on = useCallback(() => {
    setValue(true);
  }, []);

  const off = useCallback(() => {
    setValue(false);
  }, []);

  const toggle = useCallback(() => {
    setValue((prevValue) => !prevValue);
  }, []);

  const handlers = useMemo(() => ({ on, off, toggle }), [on, off, toggle]);

  return [value, handlers] as const;
};
