import { useState } from "react";
import { TRENDING_VALUE } from "../../../enum/enum";
const useViewModel = () => {
  const [openTab, setOpentab] = useState(1);

  const tabs = [
    {
      label: "1 day",
      value: TRENDING_VALUE.TRENDING_PERDAY,
      trendingDay: 1,
    },
    {
      label: "7 day",
      value: TRENDING_VALUE.TRENDING_WEEK,
      trendingDay: 7,
    },

    {
      label: "30 day",
      value: TRENDING_VALUE.TRENDING_MONTH,
      trendingDay: 30,
    },
  ];

  return { openTab, setOpentab, tabs };
};

export default useViewModel;
