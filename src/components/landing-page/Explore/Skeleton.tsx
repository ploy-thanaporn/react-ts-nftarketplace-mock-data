import logo from "../../../assets/logo-skeleton.png";

const Skeleton = () => {
  return (
    <div className="w-[178px] h-[279.82px] md:w-[222px] md:h-[336.41px] lg:w-[231px] lg:h-[351.13px] 2xl:w-[266px] 2xl:h-[375px] rounded-xl bg-white">
      <div className="flex flex-col justify-center mx-2 pt-2 pb-[7px] b">
        {/* image asset */}
        <div className="rounded-2xl w-[162px] h-[162px] md:w-[205.93px] md:h-[206.94px] lg:w-[207px] lg:h-[207px] 2xl:w-[248px] 2xl:h-[248px] bg-loading">
          <div className="flex justify-center items-center h-full">
            <img src={logo} alt="" />
          </div>
        </div>
        {/* name nft */}
        <div className="w-[207px] h-[23px] bg-loading mt-1.5"></div>
      </div>
      <div className="flex">
        {/* image user */}
        <div className="ml-2 w-[28.2px] h-[28.2px] rounded-full bg-loading" />
        <div className="flex justify-between">
          <div className="ml-[7.83px]">
            {/* name */}
            <div className="w-[130.83px] h-[18px] bg-loading"></div>
            {/* username */}
            <div className="w-[130.83px] h-[10px] bg-loading mt-[3px]"></div>
          </div>
          <div className="flex flex-col w-full ml-[3px]">
            {/* price */}
            <div className="w-[37px] h-[18px] bg-loading"></div>
            <div className="mt-1 text-right">
              <div className="flex items-center md:-mt-1">
                {/* token coin */}
                <div className="w-[37px] h-[10px] bg-loading mt-[3px]"></div>
                <div className="flex text-8 md:text-ten font-semibold ">
                  {/* Eth */}
                  <p className="ml-1"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-2 flex items-center justify-between">
        <button className="bg-neatual-50 w-full h-[36px] rounded-lg bg-loading mt-2 md:my-2"></button>
        <div className="flex text-12 text-neutral-400 font-semibold"></div>
      </div>
    </div>
  );
};

export default Skeleton;
