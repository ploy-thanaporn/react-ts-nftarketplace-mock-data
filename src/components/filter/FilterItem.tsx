import { useState } from "react";
import arrowFilter from "../../assets/collected/arrowFilter.png";
import { FILTER_ITEM_TYPE, FILTER_LIST } from "../../enum/enum";

const FilterItem = ({
  header,
  headerKey,
  onClickHeader,
  onClickItem,
  items,
  itemSelecteds,
  itemType,
  active,
}: {
  header: string;
  headerKey: string;
  onClickHeader: (headerKey: string) => void;
  onClickItem: (item: { key: string; name: string }, headerKey: string) => void;
  items: Array<{ key: string; name: string; img: string }>;
  itemSelecteds: Array<{ key: string; name: string }>;
  itemType: FILTER_ITEM_TYPE;
  active: boolean;
}) => {
  const [searchCollections, setSearchCollections] = useState("");

  return (
    <li className="mx-4 mb-4 lg:mx-0">
      <div className="flex items-center justify-between font-bold text-fourteen 2xl:text-20 px-[18px] py-[22px] w-full lg:w-[327px] lg:h-[71px] 2xl:w-[370px]">
        <span>{header}</span>
        <span>
          <img
            src={arrowFilter}
            alt=""
            onClick={() => onClickHeader(headerKey)}
            className={`${active ? "rotate-180" : ""}`}
          />
        </span>
      </div>

      {/* option  */}
      {active ? (
        <div className="">
          {itemType === FILTER_ITEM_TYPE.NO_IMG ? (
            <div>
              {items.map((item) => (
                <div
                  className="flex items-center justify-between w-full lg:w-[327px] 2xl:w-[370px] px-[26px] py-3"
                  key={item.key}
                  onClick={() => onClickItem(item, headerKey)}
                >
                  <span className="text-[#666363] lg:text-14 2xl:text-18">
                    {item.name}
                  </span>
                  {itemSelecteds.includes(item) ? (
                    <div className="bg-[#1EDB9C] rounded-full w-4 h-4 2xl:w-5 2xl:h-5"></div>
                  ) : (
                    <div className="bg-[#F6F5F5] rounded-full w-4 h-4 2xl:w-5 2xl:h-5"></div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            ""
          )}

          {itemType === FILTER_ITEM_TYPE.WITH_IMG ? (
            <div>
              {headerKey === FILTER_LIST.COLLECTION ? (
                <div className="mx-5">
                  <div className="border-solid border-[1px] w-full lg:w-[283px] px-2 py-3 rounded bg-white 2xl:w-[340px]">
                    <input
                      type="text"
                      placeholder="Collection Name"
                      className="focus:outline-none"
                      onChange={(e) => setSearchCollections(e.target.value)}
                    />
                  </div>
                </div>
              ) : (
                ""
              )}
              <div>
                {items
                  .filter((item) =>
                    item.name
                      .toLowerCase()
                      .includes(
                        searchCollections
                          .toLowerCase()
                          .replace(/(d|s|_|@|\.|,)/g, "")
                      )
                  )
                  .map((item) => (
                    <div
                      className="flex items-center justify-between w-full lg:w-[327px] px-[26px] py-3 2xl:w-[370px]"
                      key={item.key}
                      onClick={() => onClickItem(item, headerKey)}
                    >
                      <div className="flex items-center">
                        <img
                          src={item.img}
                          alt=""
                          className="w-[30px] h-[30px] 2xl:w-[34px] 2xl:h-[34px]"
                        />
                        <span className="text-14 text-[#666363] mx-2.5 ">
                          {item.name}
                        </span>
                      </div>
                      {itemSelecteds.includes(item) ? (
                        <div className="bg-[#1EDB9C] rounded-full w-4 h-4 2xl:w-5 2xl:h-5"></div>
                      ) : (
                        <div className="bg-[#F6F5F5] rounded-full w-4 h-4 2xl:w-5 2xl:h-5"></div>
                      )}
                    </div>
                  ))}
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      ) : (
        ""
      )}
    </li>
  );
};

export default FilterItem;
