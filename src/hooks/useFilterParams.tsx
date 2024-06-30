import { useState } from "react";
import { useSearchParams } from "react-router-dom";

type QueryType = {
  brand: string;
  models: string;
  body: string;
  priceFrom: string;
  priceTo: string;
  yearFrom: string;
  yearTo: string;
  fuel: string;
  mileageFrom: string;
  mileageTo: string;
  condition: string;
  powerFrom: string;
  powerTo: string;
  gear: string;
  drive: string;
};

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
