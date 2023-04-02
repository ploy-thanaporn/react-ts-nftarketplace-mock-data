import { useContext } from "react";
import { FiSearch } from "react-icons/fi";
import { FilterContext } from "../../context/FilterContext";

const Search = () => {
  const { textSearchQuery } = useContext(FilterContext);

  return (
    <div className="bg-white flex items-center rounded text-neutral-700 border-solid border-[1px] border-neutral-400 w-[216px] 2xl:w-[400px] 2xl:h-[60px]">
      <input
        type="text"
        placeholder="Search NFT"
        className="px-4 py-2 w-full mx-2 focus:outline-none 2xl:text-20"
        onChange={(e) => textSearchQuery(e.target.value)}
      />
      <FiSearch className="lg:w-3 lg:h-3 2xl:w-6 2xl:h-6 text-neutral-400 mr-3 cursor-pointer" />
    </div>
  );
};

export default Search;
