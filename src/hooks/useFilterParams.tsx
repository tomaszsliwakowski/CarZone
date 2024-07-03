import { useSearchParams } from "react-router-dom";

export const useFilterParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = (queryName: string, value: string) => {
    if (value !== "") {
      setSearchParams((prev) => {
        prev.set(`${queryName}`, value);
        return prev;
      });
    } else {
      setSearchParams((prev) => {
        prev.delete(queryName);
        return prev;
      });
    }
  };

  return { handleChange, searchParams };
};
