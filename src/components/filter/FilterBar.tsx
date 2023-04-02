import {
  category,
  chains,
  collections,
  status,
} from "../../data/filterCollected";

import { HiCheck } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { FilterPrice, FilterStatuses } from "../../data/type";
import { useContext } from "react";
import FilterPriceComponent from "./price/FilterPrice";

import FilterItem from "./FilterItem";
import { FilterContext } from "../../context/FilterContext";
import { FilterPriceContext } from "../../context/FilterContextPrice";
import { FILTER_ITEM_TYPE } from "../../enum/enum";

const FilterBar = ({
  onHeaderChanged,
  filterState,
}: {
  onFilterChanged: (filterStatus: FilterStatuses) => void;
  onHeaderChanged: (headerKey: string) => void;
  filterState: FilterStatuses;
}) => {
  const { onOpen, onClickItem, clearAll } = useContext(FilterContext);
  const { filterPrice, updateFilteredPrice } = useContext(FilterPriceContext);

  const onClickHeader = (key: string) => {
    onHeaderChanged(key);
  };

  return (
    <div className="lg:relative lg:mr-4 top-0 left-0 h-full fixed z-50 flex flex-row bg-white">
      <div className="relative w-[390px] md:w-[768px] lg:w-full 2xl:w-[380px] bg-white overflow-y-auto">
        {/*  mobile */}
        <div>
          <div>
            <div className="flex justify-center items-center my-[22px] lg:hidden">
              <span className="text-neutral-900 font-bold">Filters</span>
              <div className="absolute right-0 mr-4">
                <AiOutlineClose
                  className="w-[22px] h-[22px] text-neutral-700"
                  onClick={onOpen}
                />
              </div>
            </div>
          </div>

          {/* option filter */}
          <ul className="lg:mt-[46px]">
            {/* status */}
            <FilterItem
              header={status.header.name}
              headerKey={status.header.key}
              onClickHeader={onClickHeader}
              onClickItem={onClickItem}
              items={status.items}
              itemSelecteds={filterState.STATUS.itemSelecteds}
              active={filterState.STATUS.active}
              itemType={FILTER_ITEM_TYPE.NO_IMG}
            />

            {/* price */}
            <FilterPriceComponent
              headerKey="PRICE"
              onClickHeader={() =>
                updateFilteredPrice({
                  ...filterPrice,
                  active: !filterPrice.active,
                })
              }
              onChanged={(state: FilterPrice) => updateFilteredPrice(state)}
              active={filterPrice.active}
            />

            {/* collections */}
            <FilterItem
              header={collections.header.name}
              headerKey={collections.header.key}
              onClickHeader={onClickHeader}
              onClickItem={onClickItem}
              items={collections.items}
              itemSelecteds={filterState.COLLECTION.itemSelecteds}
              active={filterState.COLLECTION.active}
              itemType={FILTER_ITEM_TYPE.WITH_IMG}
            />

            {/* chains */}
            <FilterItem
              header={chains.header.name}
              headerKey={chains.header.key}
              onClickHeader={onClickHeader}
              onClickItem={onClickItem}
              items={chains.items}
              itemSelecteds={filterState.CHAIN.itemSelecteds}
              active={filterState.CHAIN.active}
              itemType={FILTER_ITEM_TYPE.WITH_IMG}
            />

            {/* category */}
            <FilterItem
              header={category.header.name}
              headerKey={category.header.key}
              onClickHeader={onClickHeader}
              onClickItem={onClickItem}
              items={category.items}
              itemSelecteds={filterState.CATEGORY.itemSelecteds}
              active={filterState.CATEGORY.active}
              itemType={FILTER_ITEM_TYPE.NO_IMG}
            />
          </ul>

          <div className="flex text-sm text-primary lg:hidden mx-4 mb-[15px]">
            <button
              className="flex justify-center items-center bg-white w-full h-[44px] mr-2  border-2 border-primary rounded-[10px]"
              onClick={clearAll}
            >
              <AiOutlineClose className="text-primary w-4 h-4 font-medium" />
              <span className="ml-4">Clear all</span>
            </button>
            <button
              className="flex items-center justify-center bg-primary text-neutral-50 w-full h-[44px] rounded-[10px]"
              onClick={onOpen}
            >
              <HiCheck size={20} />
              <span className="ml-4">Done</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
