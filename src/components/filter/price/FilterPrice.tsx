import { currency as data } from "../../../data/filterCollected";
import { useContext } from "react";
import arrowFilter from "../../../assets/collected/arrowFilter.png";
import { FilterPriceContext } from "../../../context/FilterContextPrice";
import { FilterPrice } from "../../../data/type";
import useViewModel from "./viewModel";

const FilterPriceComponent = ({
  headerKey,
  onClickHeader,
  onChanged,
  active,
}: {
  headerKey: string;
  onClickHeader: (headerKey: string) => void;
  onChanged: (filterPrice: FilterPrice) => void;
  active: boolean;
}) => {
  const { updateFilteredPrice } = useContext(FilterPriceContext);

  const {
    priceMin,
    priceMax,
    priceCurrency,
    updatePriceMin,
    updatePriceMax,
    updatePriceCurrency,
  } = useViewModel();

  const applyFilter = () => {
    onChanged({
      min: priceMin,
      max: priceMax,
      currency: priceCurrency,
      active: active,
    });

    updateFilteredPrice({
      min: priceMin,
      max: priceMax,
      currency: priceCurrency,
      active: active,
    });
  };

  return (
    <li className="mx-4 mb-4 lg:mx-0">
      <div className="flex items-center justify-between font-bold text-fourteen px-[18px] py-[22px] w-full lg:w-[327px] lg:h-[71px]  2xl:w-[370px]">
        <span className="2xl:text-20">Price</span>
        <span>
          <img
            src={arrowFilter}
            alt=""
            onClick={() => onClickHeader(headerKey)}
            className={`${active ? "rotate-180" : ""}`}
          />
        </span>
      </div>

      {active ? (
        <div className="mt-1 px-[18px]">
          <div className="text-neutral-400 flex text-sm 2xl:text-18">
            <div className="border-solid border-[1px] px-2 py-3 rounded w-[97px] md:w-full lg:w-[85.67px] lg:h-[45px] 2xl:w-[110px] 2xl:h-14 bg-white">
              <input
                type="text"
                placeholder="Min"
                className="w-full focus:outline-none"
                onChange={(e) =>
                  updatePriceMin(Number.parseInt(e.target.value))
                }
              />
            </div>
            <div className="border-solid border-[1px] px-2 py-3 rounded w-[97px] md:w-full lg:w-[85.67px] lg:h-[45px] mx-[13px] 2xl:w-[110px] 2xl:h-14 bg-white">
              <input
                type="text"
                placeholder="Max"
                className="w-full focus:outline-none"
                onChange={(e) =>
                  updatePriceMax(Number.parseInt(e.target.value))
                }
              />
            </div>
            <div className="border-solid border-[1px] px-2 py-3 rounded w-[97px] md:w-full lg:w-[85.67px] lg:h-[45px] 2xl:w-[110px] 2xl:h-14 bg-white">
              <select
                name=""
                id=""
                className="w-full focus:outline-none"
                onChange={(e) => updatePriceCurrency(e.target.value)}
              >
                <option value="">CUR</option>
                {data.items.map((item) => (
                  <option placeholder="ETH" key={item.key}>
                    {item.key}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="mt-[34px]" onClick={applyFilter}>
            <button
              className="bg-primary disabled:bg-red-300 w-full h-[61px] lg:w-[283px] 2xl:w-[340px] rounded-[10px] text-white text-sm"
              disabled={!priceMin && !priceMax && !priceCurrency}
            >
              Apply
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
    </li>
  );
};

export default FilterPriceComponent;
