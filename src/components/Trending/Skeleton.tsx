import logo from "../../assets/logo-skeleton.png";

const Skeleton = () => {
  return (
    <div>
      {/* mobile */}
      <div className="w-[359px] h-[98px] bg-white rounded-lg shadow-trendMb my-2 md:hidden">
        <div className="flex mx-2 py-2">
          {/* img asset */}
          <div className="w-[82px] h-[82px] rounded-lg bg-neutral-50">
            <div className="flex justify-center items-center h-full">
              <img src={logo} alt="" />
            </div>
          </div>

          <div className="flex flex-col ml-2 w-[252px]">
            <div className="flex bg-neutral-50">
              {/* img user */}
              <div className="h-9" />
            </div>

            <div className="flex items-center justify-between mt-2.5">
              <div className="bg-neutral-50 h-6 w-[80px]"></div>
              {/* btn */}
              <button className="bg-neutral-50 w-[128px] h-[36px] rounded-[9.5px] text-white text-14"></button>
            </div>
          </div>
        </div>
      </div>

      {/* tablet */}
      <div className="hidden md:block">
        <div className="flex justify-center">
          {/* img asset */}
          <div className="w-[180px] h-[180px] lg:w-[263px] lg:h-[263px] rounded-xl bg-neutral-50">
            <div className="flex justify-center items-center h-full">
              <img src={logo} alt="" />
            </div>
          </div>
        </div>
        <div className="h-[118.07px] w-[231.11px] rounded-[13.4px] lg:w-[330px] lg:h-[141px] lg:rounded-2xl shadow-trend bg-white">
          <div className="flex -mt-5">
            <div className="flex mt-[18px] pl-3 pt-2 lg:mt-[26px">
              {/* user */}
              <div className="bg-neutral-50 w-[127px] lg:w-[147px] h-10"></div>
              <div>
                <div className="w-[180px] lg:w-[270px]"></div>
                <div className="ml-2">
                  <div className="w-[75px] lg:w-[147px] h-3.5 bg-neutral-50"></div>
                  <div className="w-[75px] lg:w-[147px] h-[22px] bg-neutral-50 mt-1"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center mx-3 mt-2 lg:mt-4">
            {/* button */}
            <button className="bg-neutral-50 w-[88px] h-[36px] rounded-lg text-white text-14"></button>
            <div className="w-[51px] h-[27px] lg:w-[63px] lg:h-[37px] bg-neutral-50 rounded-2xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skeleton;
