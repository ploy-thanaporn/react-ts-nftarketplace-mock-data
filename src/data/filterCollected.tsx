import { FILTER_LIST } from "../enum/enum";

export const filterList = [
  { key: "STATUS", name: "Status" },
  { key: "PRICE", name: "Price" },
  { key: "ITEM_QUANITY", name: "Item Quantity" },
  { key: "COLLECTION", name: "Collections" },
  { key: "CHAIN", name: "Chains" },
  { key: "CATEGORY", name: "Category" },
];

export const status = {
  header: { key: FILTER_LIST.STATUS, name: "Status" },
  items: [
    { key: "BUY_NOW", name: "Buy Now", img: "" },
    { key: "ON_AUCTION", name: "On Auction", img: "" },
    { key: "HAS_OFFICE", name: "Has Office", img: "" },
  ],
};

export const currency = {
  header: { key: FILTER_LIST.PRICE, name: "Price" },
  items: [
    { key: "ETH", img: "" },
    { key: "SOL", img: "" },
    { key: "USD", img: "" },
  ],
};

export const collections = {
  header: { key: FILTER_LIST.COLLECTION, name: "Collections" },
  items: [
    {
      key: "HOT_DOG",
      name: "Hot Dog",
      img: "../../assets/collected/collectionImg/hotDog.png",
    },
    {
      key: "LION",
      name: "Lion",
      img: "../../assets/collected/collectionImg/lion.png",
    },
    {
      key: "BRAIN",
      name: "Brain",
      img: "../../assets/collected/collectionImg/brain.png",
    },
    {
      key: "PINK_CAT",
      name: "PinkCat",
      img: "../../assets/collected/collectionImg/pinkCat.png",
    },
    {
      key: "CATTIE",
      name: "Cattie",
      img: "../../assets/collected/collectionImg/cattie.png",
    },
    {
      key: "ANIMAL",
      name: "Alternative Animal",
      img: "../../assets/collected/collectionImg/animal.png",
    },
  ],
};

export const chains = {
  header: { key: FILTER_LIST.CHAIN, name: "Chains" },
  items: [
    {
      key: "ETH",
      name: "Etheruem",
      img: "../../assets/icons/chains/eth-logo.svg",
      icon: "../../assets/blockchain-create/eth.png",
      hoverIcon: "../../assets/blockchain-create/ethWh.png",
      activeBg: "#4D68AE",
    },
    {
      key: "POLYGON",
      name: "Polygon",
      img: "../../assets/icons/chains/polygon.png",
      icon: "../../assets/blockchain-create/polygon.png",
      hoverIcon: "../../assets/blockchain-create/polygonWh.png",
      activeBg: "#8247E5",
    },
    {
      key: "KLAYTN",
      name: "Klaytn",
      img: "../../assets/icons/chains/klaytn.svg",
      icon: "../../assets/blockchain-create/klaytn.png",
      hoverIcon: "../../assets/blockchain-create/klaytnWh.png",
      activeBg: "#4D68AE",
    },
    {
      key: "SOLANA",
      name: "Solana",
      img: "../../assets/icons/chains/solana.svg",
      icon: "../../assets/blockchain-create/sol.png",
      hoverIcon: "../../assets/blockchain-create/solWh.png",
      activeBg: "#4D68AE",
    },
  ],
};

export const category = {
  header: { key: FILTER_LIST.CATEGORY, name: "Category" },
  items: [
    { key: "ART", name: "Art", img: "" },
    { key: "COLLECTIBILITIES", name: "Collectibilities", img: "" },
    { key: "DOMAIN_NAME", name: "Domain Names", img: "" },
    { key: "MUSIC", name: "Music", img: "" },
    { key: "PHOTO", name: "Photography", img: "" },
    { key: "SPORT", name: "Sports", img: "" },
    { key: "TRENDING_CARD", name: "Trending Cards", img: "" },
    { key: "UTILITY", name: "Utility", img: "" },
    { key: "VIRTUAL", name: "Virtual", img: "" },
  ],
};
