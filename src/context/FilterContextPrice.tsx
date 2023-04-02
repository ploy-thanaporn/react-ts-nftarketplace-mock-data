import { createContext, useContext, useState } from "react";
import { FilterPrice } from "../data/type";

import { FilterContext } from "./FilterContext";

type filterContext = {
  updateFilteredPrice: (state: FilterPrice) => void;
  filterPrice: FilterPrice;
  currency: string;
  min: number;
  max: number;
  updateMin: () => void;
  updateMax: () => void;
  updateCurrency: () => void;
  clearAll: () => void;
};

export const FilterPriceContext = createContext<filterContext>(
  {} as filterContext
);

const FilterPriceContextProvider = ({
  children,
}: {
  children: JSX.Element;
}) => {
  const [currency, setCurrency] = useState("");
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);

  const [filterPrice, setfilterPrice] = useState({
    min: min,
    max: max,
    currency: currency,
    active: false,
  });

  const updateFilteredPrice = (state: FilterPrice) => {
    setfilterPrice(state);
  };

  const updateMin = () => {
    setMin(min);
  };

  const updateMax = () => {
    setMax(max);
  };

  const updateCurrency = () => {
    setCurrency(currency);
  };

  const { clearAll: clear } = useContext(FilterContext);

  const clearAll = () => {
    clear();
    updateFilteredPrice({
      min: 0,
      max: 0,
      currency: "",
      active: false,
    });
  };

  return (
    <FilterPriceContext.Provider
      value={{
        currency,
        min,
        max,
        updateMin,
        updateMax,
        updateCurrency,
        filterPrice,
        updateFilteredPrice,
        clearAll,
      }}
    >
      {children}
    </FilterPriceContext.Provider>
  );
};

export default FilterPriceContextProvider;
