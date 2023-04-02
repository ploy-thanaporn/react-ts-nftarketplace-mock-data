import { useState } from 'react';

const useViewModel = () => {
  const [priceMin, setPriceMin] = useState(0);
  const [priceMax, setPriceMax] = useState(0);
  const [priceCurrency, setPriceCurrency] = useState('');

  const updatePriceMin = (e: number) => {
    setPriceMin(e);
  };

  const updatePriceMax = (e: number) => {
    setPriceMax(e);
  };

  const updatePriceCurrency = (e: string) => {
    setPriceCurrency(e);
  };

  return {
    priceMin,
    priceMax,
    priceCurrency,
    updatePriceMin,
    updatePriceMax,
    updatePriceCurrency,
  };
};
export default useViewModel;
