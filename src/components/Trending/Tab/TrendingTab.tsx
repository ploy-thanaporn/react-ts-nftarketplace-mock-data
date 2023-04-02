import { assetData } from "../../../data/Asset";
import TrendingGroup from "../TrendingGroup";
import useViewModel from "./viewModel";

const TrendingTab = () => {
  const { openTab, setOpentab, tabs } = useViewModel();

  return (
    <div className="relative z-10 w-full">
      <div className="flex justify-center">
        <div className="flex items-center p-2 min-w-fit bg-[#F6F6F6] h-[49.31px] md:h-[63.95] lg:h-[71.95px] rounded-[10.72px] md:rounded-[15.96px] cursor-pointer">
          {tabs.map(({ label, value }) => (
            <div
              key={value}
              className={`flex items-center justify-center px-4 py-2.5 mx-1 my-1 lg:my-2.5 h-[38.59px] lg:h-[52px] text-14 md:text-16 lg:text-18 text-center font-semibold rounded-lg 
                   ${
                     openTab === value
                       ? "bg-[#255495] text-white"
                       : "text-neutral-600"
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
        {tabs.map(({ value, trendingDay }) => (
          <div key={value}>
            {openTab === value ? (
              <TrendingGroup
                trendingItems={assetData
                  .filter((data) => data.trendingDay === trendingDay)
                  .slice(0, 3)}
              />
            ) : (
              ""
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingTab;
