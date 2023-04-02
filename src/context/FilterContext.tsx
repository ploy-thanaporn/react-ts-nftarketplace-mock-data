import { createContext, useState } from "react";
import { CollectdItemsProps } from "../components/profile-page/CollectedList";
import { FilterStatuses } from "../data/type";
import { collected } from "../data/collected";

const defaultState = {
  STATUS: {
    active: false,
    itemSelecteds: new Array<{ key: string; name: string }>(),
  },
  ITEM_QUANITY: {
    active: false,
    itemSelecteds: new Array<{ key: string; name: string }>(),
  },
  COLLECTION: {
    active: false,
    itemSelecteds: new Array<{ key: string; name: string }>(),
  },
  CHAIN: {
    active: false,
    itemSelecteds: new Array<{ key: string; name: string }>(),
  },

  CATEGORY: {
    active: false,
    itemSelecteds: new Array<{ key: string; name: string }>(),
  },
};

type filterContext = {
  filterState: typeof defaultState;
  onFilterChanged: (filters: FilterStatuses) => void;
  clearAll: () => void;
  removeItem: (item: { key: string; name: string; headerKey: string }) => void;
  filters: () => { headerKey: string; key: string; name: string }[];
  onHeaderChanged: (headerKey: string) => void;
  onOpen: () => void;
  openBar: boolean;
  onClickItem: (item: { key: string; name: string }, headerKey: string) => void;
  textSearch: string;
  textSearchQuery: (text: string) => void;
  filteredCollectedItems: CollectdItemsProps[];
  updateFilteredCollectedItems: (items: CollectdItemsProps[]) => void;
  collected: CollectdItemsProps[];
  onOpenSort: () => void;
  openSort: boolean;
  selectedSort: string;
  onSort: (e: string) => void;
};

export const FilterContext = createContext<filterContext>({} as filterContext);

const FilterContextProvider = ({ children }: { children: JSX.Element }) => {
  const [filterState, setFilterState] = useState(defaultState);

  const onClickItem = (
    item: { key: string; name: string },
    headerKey: string
  ) => {
    type objectKey = keyof typeof filterState;
    const typeKey = headerKey as objectKey;
    const oldState = filterState[typeKey];

    const alreadyHas = oldState.itemSelecteds.includes(item);

    const newState = {
      ...filterState,
      [typeKey]: {
        ...oldState,
        itemSelecteds: alreadyHas
          ? oldState.itemSelecteds.filter(
              (itemSelected) => itemSelected.key !== item.key
            )
          : [...oldState.itemSelecteds, item],
      },
    };

    onFilterChanged(newState);
  };

  const onHeaderChanged = (headerKey: string) => {
    type objectKey = keyof typeof filterState;
    const typeKey = headerKey as objectKey;

    const oldState = filterState[typeKey];

    setFilterState({
      ...filterState,
      [typeKey]: {
        ...oldState,
        active: !oldState.active,
      },
    });
  };

  const filters = () => {
    return Object.keys(filterState)
      .map((key) => {
        type objectKey = keyof typeof filterState;
        const typeKey = key as objectKey;

        return filterState[typeKey].itemSelecteds.map((item) => ({
          ...item,
          headerKey: key,
        }));
      })

      .flat();
  };

  const onFilterChanged = (filters: FilterStatuses) => {
    setFilterState(filters);
  };

  const [filteredCollectedItems, setFilteredCollectedItems] = useState(
    new Array<CollectdItemsProps>()
  );

  const updateFilteredCollectedItems = (items: CollectdItemsProps[]) => {
    setFilteredCollectedItems(items);
  };

  const removeItem = (item: {
    key: string;
    name: string;
    headerKey: string;
  }) => {
    type objectKey = keyof typeof filterState;
    const typeKey = item.headerKey as objectKey;

    const oldState = filterState[typeKey];

    const newState = {
      ...filterState,
      [typeKey]: {
        ...oldState,
        itemSelecteds: oldState.itemSelecteds.filter(
          (itemSelected) => itemSelected.key !== item.key
        ),
      },
    };

    setFilterState(newState);
  };

  const clearAll = () => {
    setFilterState(defaultState);
  };

  const [textSearch, setTextSearch] = useState("");
  const textSearchQuery = (text: string) => {
    setTextSearch(text);
  };

  const [openBar, setOpenBar] = useState(false);
  const onOpen = () => {
    setOpenBar(!openBar);
  };

  const [openSort, setOpenSort] = useState(false);

  const onOpenSort = () => {
    setOpenSort(!openSort);
  };

  const [selectedSort, setSelectedSort] = useState("ASC");

  const onSort = (e: string) => {
    setSelectedSort(e);
  };
  return (
    <FilterContext.Provider
      value={{
        filterState,
        onFilterChanged,
        clearAll,
        removeItem,
        filters,
        onHeaderChanged,
        onClickItem,
        onOpen,
        openBar,
        textSearch,
        textSearchQuery,
        filteredCollectedItems,
        updateFilteredCollectedItems,
        collected,
        onOpenSort,
        openSort,
        selectedSort,
        onSort,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export default FilterContextProvider;
