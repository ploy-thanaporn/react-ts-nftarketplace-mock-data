import Skeleton from '../Skeleton';
import useViewModel from './viewModel';

const ExploreCard = ({
  imgUser,
  assetImg,
  username,
  name,
  tokenCoin,
  price,
  nameNft,
}: {
  imgUser: string;
  assetImg: string;
  username: string;
  name: string;
  tokenCoin: string;
  price: number;
  nameNft: string;
}) => {
  const { isLoading } = useViewModel();

  return (
    <div className="mx-1 md:flex md:justify-center">
      {isLoading ? (
        <Skeleton />
      ) : (
        <div>
          <div className="w-[178px] h-[279.82px] md:w-[222px] md:h-[336.41px] lg:w-[231px] lg:h-[351.13] 2xl:w-[266px] 2xl:h-[375px] rounded-md shadow-explore bg-white">
            <div className="flex flex-col justify-center mx-2 pt-2 pb-[7px]">
              <img
                src={assetImg}
                alt=""
                className="rounded-md w-[162px] h-[162px] md:w-[205.93px] md:h-[206.94px] lg:w-[207px] lg:h-[207px] 2xl:w-[248px] 2xl:h-[248px]"
              />
              <p className="text-16 md:text-19 text-neutral-800 font-semibold mt-2">
                {nameNft}
              </p>
            </div>
            <div className="flex mx-2">
              <img
                src={imgUser}
                alt=""
                className="w-[22.62px] h-[22.62px] md:w-[28.2px] md:h-[28.2px] rounded-full"
              />
              <div className="flex justify-between">
                <div className="mx-1">
                  <p className="text-10 md:text-tw font-normal w-[72px] md:w-[98px] 2xl:w-[124px]">
                    {name}
                  </p>
                  <p className="text-6 md:text-seven text-[#443E3E]">
                    {username}
                  </p>
                </div>
                <div className="flex flex-col w-full">
                  <p className="text-6 md:text-seven text-right font-normal">
                    Price
                  </p>
                  <div className="mt-1 text-right">
                    <div className="flex items-center md:-mt-1">
                      <img
                        src={tokenCoin}
                        alt=""
                        className="w-[13.82px] h-[13.82px] md:w-[17.24px] md:h-[17.24px]"
                      ></img>
                      <div className="flex text-8 md:text-ten font-semibold ">
                        <p className="ml-1">{price} ETH</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-2 flex items-center justify-between">
              <button className="bg-primary w-full h-[36px] rounded-lg text-white text-14 mt-2 md:my-2">
                Place Bid
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExploreCard;
