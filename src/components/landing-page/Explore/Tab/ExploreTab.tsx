import { assetData } from "../../../../data/Asset";
import ExploreGroup from "../ExploreGroup";
import useViewModel from "./viewModel";

const TrendingTab = () => {
  const { openTab, setOpentab, tabs, matches } = useViewModel();

  return (
    <div className="relative z-10 w-full">
      <div className="flex justify-center">
        <div className="flex items-center cursor-pointer max-w-[370px] overflow-x-auto md:overflow-hidden md:max-w-full px-2 py-4">
          {tabs.map(({ label, value }) => (
            <div
              key={value}
              className={`flex items-center justify-center text-14 md:text-16 lg:text-18 text-center border-primary border-2 font-semibold min-w-fit px-2.5 py-3 mx-1 my-1 rounded-[26px] h-[36px] md:h-[44px] md:px-4 md:py-4 lg:h-[52px] lg:px-4
                   ${
                     openTab === value
                       ? "bg-primary text-white"
                       : "text-primary "
                   } `}
              onClick={() => setOpentab(value)}
            >
              {label}
            </div>
          ))}
        </div>
      </div>
      {/* conetent */}
      <div>
        {tabs.map(({ value, label }) => (
          <div key={value}>
            {openTab === value && (
              <div key={value}>
                {matches ? (
                  label === "All" ? (
                    <ExploreGroup exploreItems={assetData.slice(0, 10)} />
                  ) : (
                    <ExploreGroup
                      exploreItems={assetData
                        .filter((data) => data.category === label)
                        .slice(0, 10)}
                    />
                  )
                ) : label === "All" ? (
                  <ExploreGroup exploreItems={assetData.slice(0, 12)} />
                ) : (
                  <ExploreGroup
                    exploreItems={assetData
                      .filter((data) => data.category === label)
                      .slice(0, 12)}
                  />
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingTab;
