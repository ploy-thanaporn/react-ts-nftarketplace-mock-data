import { useContext, useEffect } from "react";
import { FilterContext } from "../../context/FilterContext";
import { FilterPriceContext } from "../../context/FilterContextPrice";
import AssetCard from "../card/AssetCard";
import EmptyNft from "../EmptyNft";

export type CollectdItemsProps = {
  id: number;
  assetImg: string;
  assetName: string;
  collectionImg: string;
  collectionName: string;
  price: number;
  currency: string;
  releaseDate: string;
  status: string;
  chain: string;
  category: string;
  createdAt: string;
};

const CollectionList = () => {
  const {
    filterState,
    filters,
    textSearch,
    filteredCollectedItems,
    updateFilteredCollectedItems,
    selectedSort,
    collected: collectedItems,
  } = useContext(FilterContext);

  const { filterPrice } = useContext(FilterPriceContext);

  useEffect(() => {
    if (
      filters().length === 0 &&
      textSearch === "" &&
      filterPrice.min == null &&
      filterPrice.max == null &&
      filterPrice.currency === ""
    ) {
      updateFilteredCollectedItems(collectedItems);
      return;
    }

    let filteredItems = collectedItems
      .filter(
        (item) =>
          item.collectionName
            .toLowerCase()
            .includes(textSearch.toLowerCase()) ||
          item.assetName.toLowerCase().includes(textSearch.toLowerCase())
      )

      .filter((item) => {
        return filterState.STATUS.itemSelecteds.length > 0
          ? filterState.STATUS.itemSelecteds.find(
              (filterState) => filterState.key === item.status
            )
          : true;
      })

      .filter((item) => {
        return filterState.COLLECTION.itemSelecteds.length > 0
          ? filterState.COLLECTION.itemSelecteds.find(
              (filterState) => filterState.name === item.collectionName
            )
          : true;
      })

      .filter((item) => {
        return filterState.CHAIN.itemSelecteds.length > 0
          ? filterState.CHAIN.itemSelecteds.find(
              (filterState) => filterState.name === item.chain
            )
          : true;
      })
      .filter((item) => {
        return filterState.CATEGORY.itemSelecteds.length > 0
          ? filterState.CATEGORY.itemSelecteds.find(
              (filterState) => filterState.name === item.category
            )
          : true;
      });

    filteredItems = filteredItems.filter((item) => {
      let priceMin = false;
      let priceMax = false;
      let priceCur = false;

      if (!isNaN(filterPrice.min)) {
        priceMin = item.price >= filterPrice.min;
      }
      if (filterPrice.max) {
        priceMax = item.price <= filterPrice.max;
      }
      if (filterPrice.max === 0) {
        priceMax = true;
      }
      if (filterPrice.currency) {
        priceCur = item.currency === filterPrice.currency;
      } else {
        priceCur = true;
      }

      return priceMin && priceMax && priceCur;
    });

    if (selectedSort === "PRICE_ASC") {
      filteredItems = filteredItems.sort((a, b) => a.price - b.price);
    } else if (selectedSort === "PRICE_DESC") {
      filteredItems = filteredItems.sort((a, b) => b.price - a.price);
    } else if (selectedSort === "NAME_ASC") {
      filteredItems = filteredItems.sort((a, b) =>
        a.assetName.localeCompare(b.assetName)
      );
    } else if (selectedSort === "NAME_DESC") {
      filteredItems = filteredItems.sort((a, b) =>
        b.assetName.localeCompare(a.assetName)
      );
    } else if (
      selectedSort === "CREATED_AT_ASC" ||
      selectedSort === "CREATED_AT_DESC"
    ) {
      filteredItems = filteredItems.sort((a, b) => {
        const aCreated = new Date(a.createdAt);
        const bCreated = new Date(b.createdAt);

        const first = selectedSort === "CREATED_AT_DESC" ? 1 : -1;
        const second = selectedSort === "CREATED_AT_DESC" ? -1 : 1;

        return aCreated > bCreated ? first : second;
      });
    }

    updateFilteredCollectedItems(filteredItems);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterState, textSearch, filterPrice, selectedSort]);

  return (
    <div>
      {filteredCollectedItems.length > 0 ? (
        <div className="w-full grid grid-cols-2 gap-x-[6.5px] gap-y-[14px] md:grid-cols-3 md:gap-x-9 lg:flex lg:flex-wrap 2xl:gap-x-8 2xl:gap-y-[22px]">
          {filteredCollectedItems.map((item) => (
            <div key={item.id}>
              <AssetCard
                key={item.id}
                assetImg={item.assetImg}
                assetName={item.assetName}
                collectionImg={item.collectionImg}
                collectionName={item.collectionName}
                price={item.price}
                currency={item.currency}
                releaseDate={item.releaseDate}
                status={item.status}
                category={item.category}
                idAsset={item.id}
              />
            </div>
          ))}
        </div>
      ) : (
        <div>
          <EmptyNft />
        </div>
      )}
    </div>
  );
};

export default CollectionList;
