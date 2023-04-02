import { Link } from "react-router-dom";
import { CardAsset } from "../../data/type";
const AssetCard = ({
  assetImg,
  assetName,
  collectionImg,
  collectionName,
  price,
  currency,
  releaseDate,
  idAsset,
}: CardAsset) => {
  return (
    <div className="cursor-pointer">
      <Link to={`/account/asset/${idAsset}`}>
        <div className="bg-white rounded-2xl border border-neutral-200 shadow-sm min-w-[173] h-[260px] md:w-[238px] md:h-[332px] lg:w-[314px] lg:h-[449px] 2xl:w-[360px] 2xl:h-[520px]">
          <div className="flex justify-center w-full h-[167px] md:h-[240px] lg:h-[300px] 2xl:h-[350px] p-2 lg:p-2.5">
            <img
              src={assetImg}
              alt=""
              className="hover:scale-105 rounded-2xl object-cover w-full h-full"
            />
          </div>

          <div className="flex flex-col mx-4 mt-1.5 lg:mt-2 2xl:mx-5">
            <div className="flex items-center">
              <img
                src={collectionImg}
                alt=""
                className="w-[30px] h-[30px] rounded 2xl:w-12 2xl:h-12 object-cover"
              />
              <div className="flex flex-col mx-4 max-w-[101px] md:max-w-xs max-h-[28px]">
                <p className="text-10 md:text-12 2xl:text-20">
                  {collectionName}
                </p>
                <p className="text-12 md:text-14 mt-0.5 text-neutral-800 font-semibold lg:hidden">
                  {assetName}
                </p>
              </div>
            </div>
            {/* desktop */}
            <div className="hidden lg:block lg:my-2.5">
              <p className="text-19 2xl:text-[24px] text-neutral-800 font-bold">
                {assetName}
              </p>
            </div>
            <div className="w-[140px] mt-[13px] md:mt-3 md:w-[190px] lg:mt-0.5 lg:w-[282px] 2xl:w-[330px]">
              <div className="flex justify-between w-full">
                <div>
                  <p className="text-neutral-400 text-10 lg:text-twelve 2xl:text-18">
                    PRICE
                  </p>
                  <p className="text-10 md:text-12 lg:text-16 2xl:text-20 font-semibold lg:font-bold mt-[3px]">
                    {price} ETH
                  </p>
                </div>
                <div>
                  <p className="text-neutral-400 text-10 lg:text-twelve 2xl:text-18">
                    RELEASE DATE
                  </p>
                  <p className="text-10 md:tetx-12 lg:text-16 2xl:text-20 font-semibold lg:font-bold mt-[3px]">
                    {releaseDate}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
export default AssetCard;
