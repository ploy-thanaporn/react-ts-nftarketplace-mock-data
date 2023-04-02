import { useContext } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FilterPriceContext } from "../../context/FilterContextPrice";

const ButtonFilterPrice = () => {
  const { filterPrice, updateFilteredPrice } = useContext(FilterPriceContext);

  const close = () => {
    updateFilteredPrice({
      min: 0,
      max: 0,
      currency: "",
      active: true,
    });
  };

  return (
    <div>
      <button className="border-solid border-[1px] border-neutral-500 py-[15px] px-[20px] rounded-[30px] flex items-center focus:outline-none">
        <span className="text-16 2xl:text-18 text-neutral-500 mr-[10px]">
          {filterPrice.min ? `Min ${filterPrice.min}` : ""}

          {filterPrice.min && filterPrice.max ? `, ` : ""}

          {filterPrice.max ? `Max ${filterPrice.max}` : ""}

          {filterPrice.currency ? (
            ` ${filterPrice.currency}`
          ) : (
            <span>
              {(filterPrice.min && filterPrice.currency) ||
              (filterPrice.max && filterPrice.currency)
                ? ` ${filterPrice.currency}`
                : ""}
            </span>
          )}
        </span>

        <AiOutlineClose
          className="w-[15px] h-[15px] cursor-pointer"
          onClick={() => close()}
        />
      </button>
    </div>
  );
};

export default ButtonFilterPrice;
