import arrow from "../../../assets/icons/Arrowright.svg";
import useViewModel from "./viewModel";

const CreateSection = () => {
  const { openTab, setOpentab, tabs, previousPage, nextPage } = useViewModel();

  return (
    <div className="mt-[128px]">
      <div className="flex justify-center">
        <h2 className="text-23 md:text-39 2xl:text-5xl font-bold text-neutral-900 mb-[25.5px] md:mb-[98.5px] lg:mb-[108.96px]">
          Create and sell your NFTs
        </h2>
      </div>

      <div className="flex justify-between lg:justify-center">
        <div className="flex flex-row lg:flex-col-reverse">
          <div className="h-full flex flex-col lg:flex-row items-center">
            {/* progress bar - start - desktop */}
            <div className="hidden lg:block w-[230px] bg-primary lg:h-1 -mt-8"></div>

            {/* progress bar - start - mobile */}
            <div className="mt-[6.5px]">
              <div className="block lg:hidden w-[2.27px] bg-primary h-[46.56px] md:h-[100px] md:w-1 -ml-1 md:-ml-[26px] mt-1"></div>
            </div>

            <div className="flex flex-col lg:flex-row">
              {tabs.map(({ label, value }) => (
                <div
                  className="flex flex-row lg:flex-col items-center"
                  key={value}
                >
                  <div>
                    <div className="flex flex-row lg:flex-col">
                      <div className="flex flex-col lg:flex-row items-center ml-16 lg:ml-0">
                        <div
                          key={value}
                          className={`cursor-pointer rounded-full w-[9px] h-[9px] -ml-4 md:w-[17.29px] md:h-[18px] md:-ml-3.5 md:-mt-1 lg:w-[17.81px] relative z-10 ${
                            openTab >= value
                              ? "bg-[#DE4343]"
                              : "border-[1px] bg-neutral-50 border-solid border-neutral-200 "
                          }`}
                          onClick={() => setOpentab(value)}
                        ></div>

                        {/* progress bar - desktop*/}
                        <div>
                          <div
                            className={`hidden lg:block w-[230px] h-1  ${
                              openTab > value || openTab === tabs.length
                                ? "bg-primary"
                                : "bg-neutral-200"
                            } `}
                          ></div>
                        </div>

                        {/*  progress bar - mobile */}
                        <div
                          className={`block lg:hidden w-[2.27px] h-[52px] md:w-1 md:h-[100px] -ml-3.5 ${
                            openTab > value || openTab === tabs.length
                              ? "bg-primary"
                              : "bg-neutral-200"
                          } `}
                        ></div>
                      </div>

                      <div
                        key={value}
                        className={`text-10 md:text-14 ml-4 -mt-0.5 w-10 md:w-20 lg:m-0 lg:-ml-5 lg:mt-2.5 cursor-pointer  ${
                          openTab >= value
                            ? "text-primary text-twelve md:text-eighteen "
                            : "text-neutral-400"
                        }`}
                        onClick={() => setOpentab(value)}
                      >
                        {label}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:h-[580px]">
            {/* previous - next  : desktop */}
            <div className="flex justify-center absolute mt-32">
              <div className="flex justify-between w-[1100px]">
                {openTab >= 1 ? (
                  <div className="hidden lg:flex items-center ml-[140px]">
                    <button
                      className="bg-primary w-9 h-9  lg:w-[52px] lg:h-[52px] rounded-lg flex justify-center items-center focus:outline-none"
                      onClick={previousPage}
                      disabled={openTab === 1}
                    >
                      <img src={arrow} alt="" className="-scale-x-100 md:w-4" />
                    </button>
                  </div>
                ) : (
                  <div className="hidden lg:flex items-center"></div>
                )}

                {/* next page - desktop */}
                <div className="hidden lg:flex items-center lg:mb-0">
                  <button
                    className="bg-primary w-9 h-9  lg:w-[52px] lg:h-[52px] rounded-lg flex justify-center items-center focus:outline-none"
                    onClick={nextPage}
                    disabled={openTab === tabs.length}
                  >
                    <img src={arrow} alt="" className="md:w-4" />
                  </button>
                </div>
              </div>
            </div>

            {tabs.map(({ img, head, caption, value }) => (
              <div key={value}>
                {/* content */}
                {openTab === value ? (
                  <div className="ml-[15.5px] md:ml-[62px] lg:flex lg:justify-center">
                    <div>
                      <img
                        src={img}
                        alt=""
                        className="w-[132px] h-[132px] md:w-[315px] md:h-[315px]"
                      />
                    </div>
                    <div className="lg:ml-[48px] lg:mt-0">
                      <h2 className="text-16 md:text-33 font-bold text-neutral-700 mt-[42px]">
                        {head}
                      </h2>
                      <p className="text-10 md:text-sixteen lg:text-eighteen text-neutral-400 max-w-[180px] md:max-w-sm mt-4">
                        {caption}
                      </p>
                      <div>
                        {openTab === 4 ? (
                          <div className="hidden md:flex items-center mt-4">
                            <button className="bg-[#255495] w-[127px] h-[44px] text-white rounded-lg">
                              Create Now
                            </button>
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* previous - next : mobile */}
      <div className="flex justify-end mb-[67.5px] mr-[38.43px] lg:mb-0 lg:hidden">
        {openTab > 1 ? (
          <div className="flex">
            <button
              className="bg-primary w-9 h-9  md:w-[52px] md:h-[52px] rounded-lg flex justify-center items-center mx-2 focus:outline-none"
              onClick={previousPage}
              disabled={openTab === 1}
            >
              <img src={arrow} alt="" className="-scale-x-100 md:w-4" />
            </button>
            <button
              className="bg-primary w-9 h-9  md:w-[52px] md:h-[52px] rounded-lg flex justify-center items-center focus:outline-none"
              onClick={nextPage}
              disabled={openTab === tabs.length}
            >
              <img src={arrow} alt="" className="md:w-4" />
            </button>
          </div>
        ) : (
          <button
            className="bg-primary w-9 h-9  md:w-[52px] md:h-[52px] rounded-lg flex justify-center items-center focus:outline-none"
            onClick={nextPage}
            disabled={openTab === tabs.length}
          >
            <img src={arrow} alt="" className="md:w-4" />
          </button>
        )}
      </div>
    </div>
  );
};

export default CreateSection;
