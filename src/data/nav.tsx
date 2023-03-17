import {
  MdOutlineExplore,
  MdOutlineGroups,
  MdQueryStats,
} from "react-icons/md";
import newsIcon from "../assets/newsIcon.svg";
import { NAV_KEY } from "../enum/enum";

export const navLink = [
  {
    key: NAV_KEY.EXPLORE,
    name: "Explore",
    path: "",
    subnav: [
      { id: 1, name: "Art", path: "" },
      { id: 2, name: "Collectibles", path: "" },
      { id: 3, name: "Photography", path: "" },
      { id: 4, name: "Utility", path: "" },
    ],
    icon: <MdOutlineExplore className="w-full -full" />,
  },
  {
    key: NAV_KEY.STATS,
    name: "Stats",
    path: "",
    subnav: [
      { id: 1, name: "Ranking", path: "" },
      { id: 2, name: "Activity", path: "" },
    ],
    icon: <MdQueryStats className="w-full -full" />,
  },
  {
    key: NAV_KEY.NEWS,
    name: "News",
    path: "",
    subnav: [
      { id: 1, name: "Blog", path: "" },
      { id: 2, name: "About us", path: "" },
      { id: 3, name: "Help Center", path: "" },
    ],
    icon: <img src={newsIcon} className="w-full -full" alt="" />,
  },
  {
    key: NAV_KEY.COMMUNITY,
    name: "Community",
    path: "",
    subnav: [{ id: 1, name: "", path: "" }],
    icon: <MdOutlineGroups className="w-full -full" />,
  },
];
