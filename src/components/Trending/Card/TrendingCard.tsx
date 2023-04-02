import heart from "../../../assets/icons/heartsolid.svg";
import Skeleton from "../Skeleton";
import useViewModel from "./viewModel";

const TrendingCard = ({
  imgUser,
  assetImg,
  username,
  name,
  tokenCoin,
  price,
}: {
  imgUser: string;
  assetImg: string;
  username: string;
  name: string;
  tokenCoin: string;
  price: number;
}) => {
  const { isLoading } = useViewModel();

  return (
    <div className="md:odd:mt-[55px] mx-2 lg:mx-4">
      {isLoading ? (
        <Skeleton />
      ) : (
        <div>
          {/* mobile */}
          <div className="w-[359px] h-[98px] bg-white rounded-lg shadow-trendMb my-2 md:hidden">
            <div className="flex mx-2 py-2">
              <img
                src={assetImg}
                alt=""
                className="w-[82px] h-[82px] rounded-lg"
              />
              <div className="flex flex-col ml-2 w-[252px]">
                <div className="flex">
                  <img src={imgUser} alt="" className="w-9 h-9 rounded-full" />
                  <div className="mx-1">
                    <p className="text-14 font-semibold">{name}</p>
                    <p className="text-12">{username}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-2.5">
                  <div className="flex items-center">
                    <img
                      src={tokenCoin}
                      alt=""
                      className="w-[14px] h-[14px]"
                    ></img>
                    <p className="text-14 font-bold mx-1.5">{price}</p>
                    <span className="text-12 font-semibold text-neutral-600">
                      ETH
                    </span>
                  </div>
                  <button className="bg-primary w-[128px] h-[36px] rounded-[9.5px] text-white text-14">
                    Place Bid
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* tablet */}
          <div className="hidden md:block">
            <div className="flex justify-center">
              <img
                src={assetImg}
                alt=""
                className="w-[180px] h-[180px] lg:w-[263px] lg:h-[263px] rounded-xl"
              />
            </div>
            <div className="h-[118.07px] w-[231.11px] rounded-[13.4px] lg:w-[330px] lg:h-[141px] lg:rounded-2xl shadow-trend bg-white">
              <div className="flex -mt-5">
                <div className="flex mt-[18px] pl-3 pt-2 lg:mt-[26px]">
                  <img
                    src={imgUser}
                    alt=""
                    className="w-[30.14px] h-[30.14px] lg:w-9 lg:h-9 rounded-full"
                  />
                  <div className="flex justify-between w-[180px] lg:w-[270px]">
                    <div className="mx-1 lg:mx-2.5">
                      <p className="text-xs lg:text-nav font-normal">{name}</p>
                      <p className="text-10 lg:mt-1 text-[#443E3E]">
                        {username}
                      </p>
                    </div>
                    <div className="flex flex-col">
                      <p className="text-10 text-right font-normal">Price</p>
                      <div className="mt-2.5 text-right ">
                        <div>
                          <div className="flex items-center justify-end w-[86px] lg:w-[90px]">
                            <img
                              src={tokenCoin}
                              alt=""
                              className="w-[18px] h-[18px] lg:w-[22px] lg:h-[22px]"
                            ></img>
                            <div className="flex text-12 lg:text-14 font-semibold">
                              <p className="ml-[5px]">{price} ETH</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center mx-3 mt-2 lg:mt-4">
                <button className="bg-primary w-[88px] h-[36px] rounded-lg text-white text-14">
                  Place Bid
                </button>
                <div className="flex text-12 lg:text-16 items-center text-neutral-400 font-semibold">
                  <img
                    src={heart}
                    alt=""
                    className="mr-1 w-[11.01px] h-[11.01px] lg:w-[20px] lg:h-[18.33px]"
                  />
                  <span>820</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TrendingCard;
