import ExploreTab from "./Tab/ExploreTab";
import ArrowRight from "../../../assets/icons/ArrowrightRed.svg";

const ExploreSection = () => {
  return (
    <div className="mt-[136px] mb-12">
      <div className="flex justify-center">
        <h2 className="text-23 md:text-39 2xl:text-5xl font-bold text-neutral-900">
          Explore NFTs
        </h2>
      </div>
      {/* Explore Tab */}
      <div className="lg:mt-[38px] md:mt-4 mt-[22px]">
        <ExploreTab />
      </div>

      <div className="flex justify-center 2xl:mt-6">
        <button
          type="button"
          className="flex items-center text-primary font-semibold border-primary border-2 focus:outline-none rounded-lg w-[186px] h-[36px] md:w-[210px] md:h-[44px] lg:w-[252px] lg:h-[52px]"
        >
          <div className="flex items-center ml-3.5">
            <span className="text-14 md:text-16 lg:text-18">
              View All Explore NFT
            </span>
            <img src={ArrowRight} alt="" className="ml-2 lg:ml-5 lg:w-3" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default ExploreSection;
