export type FilterStatuses = {
  STATUS: {
    active: boolean;
    itemSelecteds: Array<{ key: string; name: string }>;
  };
  ITEM_QUANITY: {
    active: boolean;
    itemSelecteds: Array<{ key: string; name: string }>;
  };
  COLLECTION: {
    active: boolean;
    itemSelecteds: Array<{ key: string; name: string }>;
  };
  CHAIN: {
    active: boolean;
    itemSelecteds: Array<{ key: string; name: string }>;
  };
  CATEGORY: {
    active: boolean;
    itemSelecteds: Array<{ key: string; name: string }>;
  };
};

export type FilterPrice = {
  min: number;
  max: number;
  currency: string;
  active: boolean;
};

export interface CardAsset {
  assetImg: string;
  assetName: string;
  collectionImg: string;
  collectionName: string;
  price: number;
  currency: string;
  releaseDate: string;
  status: string;
  category: string;
  idAsset: number;
}

export interface CardCollection {
  idCollection: string;
  featured_url: string;
  logo_url: string;
  description: string;
  name: string;
}

export type AssetItems = {
  _id: string;
  image: string;
  name: string;
  collection_id: { name: string; logo_path: string };
  price: number;
  description: string;
  blockchain: string;
  createdAt: Date;
  updatedAt: Date;
  status: string;
  category_id: { _id: string; category_name: string };
};

export interface CollectionItems {
  _id: string;
  name: string;
  description: string;
  logo_path: string;
  featured_path: string;
  banner_path: string;
  user_id: { _id: string; username: string; profile_url: string };
  createdAt: Date;
  updatedAt: Date;
}

export interface UserItems {
  _id: string;
  username: string;
  address: string;
  isVerified: false;
  status_ban: false;
  createdAt: Date;
  updatedAt: Date;
  bio: string;
  email_address: string;
  profile_url: string;
  banner_url: string;
}
