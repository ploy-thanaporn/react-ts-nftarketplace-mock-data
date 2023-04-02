import { useState } from "react";
import { useMediaQuery } from "usehooks-ts";
import { CATEGORY_VALUE } from "../../../../enum/enum";

const useViewModel = () => {
  const [openTab, setOpentab] = useState(1);
  const matches = useMediaQuery("(min-width: 1024px)");

  const tabs = [
    {
      label: "All",
      value: CATEGORY_VALUE.CATEGORY_ALL,
    },
    {
      label: "3D ART",
      value: CATEGORY_VALUE.CATEGORY_ART,
    },

    {
      label: "Photography",
      value: CATEGORY_VALUE.CATEGORY_PHOTOGRAPHY,
    },
    {
      label: "Games",
      value: CATEGORY_VALUE.CATEGORY_GAMES,
    },
    {
      label: "Abstract",
      value: CATEGORY_VALUE.CATEGORY_ABSTRACT,
    },
  ];

  return { openTab, setOpentab, matches, tabs };
};

export default useViewModel;
