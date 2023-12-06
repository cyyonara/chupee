import { useState, useEffect } from "react";

export const useDebounce = (keyword: string, delay: number = 400): string => {
  const [debounceString, setDebouncedString] = useState<string>(keyword);

  useEffect(() => {
    let timeout = setTimeout(() => {
      setDebouncedString(keyword);
    }, delay);

    return () => {
      clearTimeout(timeout);
    };
  }, [keyword, delay]);

  return debounceString;
};
