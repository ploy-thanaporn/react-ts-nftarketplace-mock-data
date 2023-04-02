import { NavLink, useNavigate, useParams } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";

import { useContext, useEffect, useState } from "react";

import { MdFilterList, MdOutlineArrowDropDown } from "react-icons/md";
import { BiSortAlt2 } from "react-icons/bi";
import { FilterContext } from "../../context/FilterContext";
import { optionsSort } from "../../data/sortFilter";
import Search from "./Search";

const TopBar = ({
  handleClick,
  menuTopBar,
}: {
  handleClick: (open: boolean) => void;
  menuTopBar: {
    path: string;
    name: string;
  }[];
}) => {
  const { onOpen, openBar, onOpenSort, openSort, selectedSort, onSort } =
    useContext(FilterContext);

  const [isActive, setIsActive] = useState(false);
  const [selectSort, setSelectSort] = useState("");

  const onSortText = (option: { name: string; value: string }) => {
    onSort(option.value);
    setSelectSort(option.name);
  };

  useEffect(() => {
    if (openSort) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [openSort]);

  const { idArtist } = useParams();
  const navigate = useNavigate();
  return (
    <div className={openSort ? "" : "px-4 lg:px-8"}>
      <nav>
        <div className="flex flex-col lg:flex-row w-full lg:h-[70px]">
          <div className="hidden lg:flex items-center w-full">
            <MdFilterList
              className="text-neutral-700 cursor-pointer lg:w-5 lg:h-5 2xl:w-7 2xl:h-7"
              onClick={() => handleClick(openBar)}
            />
            {/* desktop */}
            <ul className="hidden lg:flex text-16 2xl:text-20 font-semibold items-center">
              {menuTopBar.map((item) => (
                <li className="mx-[42px] py-5" key={item.name}>
                  <NavLink
                    to={
                      item.path === "collection-list" ||
                      item.path === "created-section"
                        ? `${item.path}/${idArtist}`
                        : ""
                    }
                    className={({ isActive }) =>
                      isActive
                        ? "py-5 border-b-[5px] border-primary"
                        : "py-5 hover:border-b-[5px] hover:border-primary"
                    }
                    reloadDocument={isActive ? true : false}
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          {/* mobile */}
          <div>
            <select
              name=""
              id=""
              className="w-[105px] lg:hidden focus:outline-none"
              onChange={(e) => navigate(e.target.value)}
            >
              {menuTopBar.map((item) => (
                <option
                  key={item.name}
                  value={
                    item.path === "collection-list" ||
                    item.path === "created-section"
                      ? `${item.path}/${idArtist}`
                      : ""
                  }
                  className="absolute top-full min-w-full w-max mt-1 bg-white rounded  text-neutral-400 border-solid drop-shadow-md"
                >
                  {item.name}
                </option>
              ))}
            </select>
          </div>
          <div className="hidden lg:flex items-center justify-end 2xl:-mt-6 2xl:mr-8">
            {/* search item (nft card) */}
            <Search />
            <div>
              <div className="relative mx-2">
                <div
                  className="flex items-center text-neutral-400 justify-between w-[216px] h-[45px] 2xl:w-[300px] 2xl:h-[60px] border-solid border border-neutral-400 rounded cursor-pointer"
                  onClick={() => setIsActive(!isActive)}
                >
                  <p className="mx-2">
                    {isActive
                      ? selectSort
                        ? selectSort
                        : "Default"
                      : "Default"}
                  </p>
                  <span>
                    <MdOutlineArrowDropDown size={30} />
                  </span>
                </div>
                {isActive && (
                  <div className="absolute top-full min-w-full w-max mt-1 bg-white rounded text-neutral-400 border-solid drop-shadow-md">
                    <ul>
                      {optionsSort.map((option) => (
                        <li
                          className="px-2 py-2 cursor-pointer rounded text-18 bg-white text-neutral-400 hover:font-semibold hover:bg-[#FCF1F1] hover:text-neutral-600 border-b"
                          onClick={() => onSortText(option)}
                          key={option.value}
                          value={option.value}
                        >
                          {option.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="flex justify-between mt-5 text-sm text-primary gap-x-3 md:gap-x-4 lg:hidden">
            <button
              className="flex justify-center items-center bg-white w-full h-[44px] border-2 border-primary rounded-[10px] focus:outline-none"
              onClick={onOpen}
            >
              <MdFilterList className="w-5 h-5" />
              <span className="ml-2">Filters</span>
            </button>

            <button
              className="flex items-center justify-center bg-white w-full border-2 border-primary rounded-[10px] focus:outline-none"
              onClick={onOpenSort}
            >
              <BiSortAlt2 className="w-5 h-5" />
              <span className="ml-2">Sort</span>
            </button>
          </div>
        </div>
      </nav>
      {openSort && (
        <div className="w-full h-full absolute z-50 top-0 bg-white lg:hidden">
          <div className="flex justify-center items-center my-[22px]">
            <span className="text-neutral-900 font-bold">Sort by</span>
            <div className="absolute right-0 mr-4">
              <AiOutlineClose
                className="w-[22px] h-[22px] text-neutral-700"
                onClick={onOpenSort}
              />
            </div>
          </div>

          {/* mobile */}
          <ul className="min-h-[80%] md:min-h-[85%]">
            {optionsSort.map((option) => (
              <div
                className="flex items-center justify-between w-full lg:w-[327px] 2xl:w-[370px] px-[26px] py-3 cursor-pointer"
                onClick={() => onSort(option.value)}
              >
                <li
                  className="text-[#666363] lg:text-14 2xl:text-18"
                  key={option.value}
                  value={option.value}
                >
                  {option.name}
                </li>
                {selectedSort === option.value ? (
                  <div className="bg-[#1EDB9C] rounded-lg w-4 h-4 2xl:w-5 2xl:h-5"></div>
                ) : (
                  <div className="bg-[#F6F5F5] rounded-lg w-4 h-4 2xl:w-5 2xl:h-5"></div>
                )}
              </div>
            ))}
          </ul>

          <div className="mx-4 my-2 cursor-pointer mb-4">
            <button
              className="bg-primary w-full h-11 rounded-[10px] text-white cursor-pointer"
              onClick={onOpenSort}
            >
              Done
            </button>
          </div>
        </div>
      )}

      {openBar && (
        <div className="w-full h-screen absolute z-50 top-0 bg-white lg:hidden">
          <div className="flex justify-center items-center my-[22px]">
            <span className="text-neutral-900 font-bold">Sort by</span>

            <div className="absolute right-0 mr-4">
              <AiOutlineClose
                className="w-[22px] h-[22px] text-neutral-700"
                onClick={onOpenSort}
              />
            </div>
          </div>
          {/* mobile */}
          <ul>
            {optionsSort.map((option) => (
              <div
                className="flex items-center justify-between w-full lg:w-[327px] 2xl:w-[370px] px-[26px] py-3 cursor-pointer"
                onClick={() => onSort(option.value)}
              >
                <li
                  className="text-[#666363] lg:text-14 2xl:text-18"
                  key={option.value}
                  value={option.value}
                >
                  {option.name}
                </li>
                {selectedSort === option.value ? (
                  <div className="bg-[#1EDB9C] rounded-full w-4 h-4 2xl:w-5 2xl:h-5"></div>
                ) : (
                  <div className="bg-[#F6F5F5] rounded-full w-4 h-4 2xl:w-5 2xl:h-5"></div>
                )}
              </div>
            ))}
          </ul>

          <div className="mx-6 my-2 cursor-pointer flex items-end">
            <button
              className="bg-primary w-full h-[44px] rounded-[10px] text-white cursor-pointer"
              onClick={onOpenSort}
            >
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default TopBar;
