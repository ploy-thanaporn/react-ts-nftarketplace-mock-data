import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { FilterContext } from "../../context/FilterContext";
import { FilterPriceContext } from "../../context/FilterContextPrice";
import { menuTopBarAccount } from "../../data/nav";
import ProfileArtist from "../artist/ProfileArtist";
import ButtonFilterPrice from "../filter/ButtonFilterPrice";
import ButtonItem from "../filter/ButtonItem";
import FilterBar from "../filter/FilterBar";
import TopBar from "../filter/TopBar";
import ScrollToTop from "../ScollTop";

const CollectedPage = () => {
  const {
    openBar,
    onOpen,
    openSort,
    filterState,
    onFilterChanged,
    removeItem,
    filters,
    onHeaderChanged,
  } = useContext(FilterContext);
  const { filterPrice, clearAll } = useContext(FilterPriceContext);

  return (
    <div>
      <ScrollToTop />
      <div
        className={`relative ${openBar || openSort ? "hidden lg:block" : ""}`}
      >
        <ProfileArtist />
      </div>

      <div className={`${openBar ? "hidden lg:block" : ""}`}>
        <div className="mt-[18.5px] lg:mt-16 border-b-[2px] border-solid border-neutral-50">
          <TopBar handleClick={onOpen} menuTopBar={menuTopBarAccount} />
        </div>
      </div>
      <div className={openBar || openSort ? "" : "px-4 lg:px-8"}>
        <div className="flex-none lg:flex">
          <div className={`relative ${openBar ? "lg:pr-4" : "lg:pr-0"}`}>
            {openBar ? (
              <FilterBar
                onFilterChanged={onFilterChanged}
                filterState={filterState}
                onHeaderChanged={onHeaderChanged}
              />
            ) : (
              ""
            )}
          </div>

          <div className="w-full">
            <div className="hidden lg:block">
              <div className="lg:flex items-center ml-3 my-5 mt-[26px]">
                {filters().map((item) => (
                  <div key={item.key}>
                    <ButtonItem
                      item={item}
                      onClose={() => removeItem(item)}
                      key={item.key}
                    />
                  </div>
                ))}

                {filterPrice.min === 0 &&
                filterPrice.max === 0 &&
                filterPrice.currency === "" ? (
                  ""
                ) : (
                  <div>
                    <ButtonFilterPrice />
                  </div>
                )}

                {filters().length > 0 ||
                filterPrice.min ||
                filterPrice.max ||
                filterPrice.currency ? (
                  <div>
                    <span
                      className="text-neutral-500 mx-3 text-16 2xl:text-18 font-semibold  cursor-pointer"
                      onClick={clearAll}
                    >
                      Clear
                    </span>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>

            <div
              className={`w-full mt-7 lg::mt-0 ${
                openBar || openSort ? "hidden lg:block" : ""
              }`}
            >
              <Outlet />
            </div>
          </div>
        </div>
      </div>
      <div className={`${openBar || openSort ? "hidden lg:block" : ""}`}>
        <div className="mx-8">
          <div className="mt-16  border-b-[2px] border-neutral-50"></div>
        </div>
      </div>
    </div>
  );
};

export default CollectedPage;
