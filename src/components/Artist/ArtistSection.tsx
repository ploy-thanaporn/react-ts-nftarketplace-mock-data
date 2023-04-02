import Arrowright from "../../assets/Arrowright.svg";
import TopArtist from "./TopArtist";
import rectangleL from "../../assets/rectangle-left.png";
import rectangleR from "../../assets/rectangle-right.png";
import ArtistAniation from "./Slideanimation/ArtistAnimation";

const ArtisitSection = () => {
  return (
    <div>
      {/*  Popular Artist */}
      <div className="flex justify-center">
        <div className="flex flex-col justify-center text-center my-10 md:my-12 lg:my-28 2xl:my-32 max-w-[300px] md:max-w-xl 2xl:max-w-3xl">
          <h2 className="text-23 md:text-39 2xl:text-5xl font-bold text-neutral-900">
            Popular Artist
          </h2>
          <span className="text-sm md:text-16 2xl:text-xl text-neutral-600 mt-1 md:mt-1.5">
            Browse and build your collection of the world’s most cutting-edge
            digital art
          </span>
        </div>
      </div>

      <div className="my-12 cursor-default">
        <ArtistAniation />
      </div>

      <div className="flex justify-center my-20 lg:mt-[189.5px]">
        <button
          type="button"
          className="flex items-center text-white font-semibold bg-primary focus:outline-none rounded-lg w-[167px] h-[36px] md:w-[178px] md:h-[44px] lg:w-[210px] lg:h-[52px] lg:px-4"
        >
          <div className="flex items-center ml-[14px] md:ml-2.5">
            <span className="text-14 md:text-16 lg:text-18">
              View All Explore
            </span>
            <img
              src={Arrowright}
              alt=""
              className="ml-[15px] md:ml-[17.5px] lg:ml-[22.25px]"
            />
          </div>
        </button>
      </div>

      {/* Top Artists */}
      <div className="flex justify-center mt-32 relative z-10">
        <div className="flex flex-col justify-center text-center max-w-[320px] md:max-w-xl 2xl:max-w-3xl">
          <h2 className="text-23 md:text-39 2xl:text-5xl font-bold text-neutral-900">
            Top Artists NFTs
          </h2>
          <span className="text-sm md:text-16 2xl:text-xl text-neutral-600 mt-1 md:mt-2">
            NFTs are the hottest art commodity in town.
          </span>
        </div>
      </div>

      <div className="my-[59px] lg:my-[86px] ">
        <div className="hidden md:flex lg:flex justify-between w-full absolute z-0">
          <div className="-mt-48 md:-mt-28">
            <img src={rectangleR} alt="" className="md:w-[287.4px]" />
          </div>
          <div className="mt-8">
            <img src={rectangleL} alt="" className="md:w-[287.4px]" />
          </div>
        </div>

        <div className="min-w-[370px] overflow-x-auto md:min-w-[768px] lg:w-full">
          <TopArtist />
        </div>
      </div>
    </div>
  );
};

export default ArtisitSection;
