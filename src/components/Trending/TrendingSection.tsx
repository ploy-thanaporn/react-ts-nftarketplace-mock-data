import ArrowRight from "../../assets/icons/ArrowrightRed.svg";
import Lottie from "react-lottie";
import TrendingTab from "./Tab/TrendingTab";
import useViewModel from "./viewModel";

const TrendingSection = () => {
  const { defaultOptions, matches } = useViewModel();

  return (
    <div>
      <div className="flex justify-center mt-[101px] relative z-10">
        <div className="flex flex-col justify-center text-center max-w-[320px] md:max-w-xl 2xl:max-w-3xl">
          <h2 className="text-23 md:text-39 2xl:text-5xl font-bold text-neutral-900">
            Trending NFTs
          </h2>
          <span className="text-sm md:text-16 2xl:text-xl text-neutral-600 mt-1 md:mt-2">
            They live as NFTs on an eco-friendly blockchain
          </span>
        </div>
      </div>
      <div className="relative w-full flex justify-center mt-[34.3px] overflow-hidden">
        <TrendingTab />
        <div
          className="hidden md:block absolute mt-24 lg:mt-[70px]"
          id="circle-animation"
        >
          {matches ? (
            <Lottie options={defaultOptions} width={1290} height={535} />
          ) : (
            <Lottie options={defaultOptions} width={860} height={412} />
          )}
        </div>
      </div>

      <div className="flex justify-center my-[34px]">
        <button
          type="button"
          className="flex items-center text-primary font-semibold border-primary border-2 focus:outline-none rounded-lg w-[167px] h-[36px] md:w-[190px] md:h-[44px] lg:w-[210px] lg:h-[52px]"
        >
          <div className="flex items-center ml-3.5">
            <span className="text-14 md:text-16 lg:text-18">
              View All Trending
            </span>
            <img src={ArrowRight} alt="" className="ml-3 lg:w-3 lg:ml-5" />
          </div>
        </button>
      </div>
      <div className="md:hidden block rotate-90 absolute z-0 -mt-[530px] -ml-[490px]">
        <Lottie options={defaultOptions} width={950} height={330} />
      </div>
    </div>
  );
};

export default TrendingSection;
