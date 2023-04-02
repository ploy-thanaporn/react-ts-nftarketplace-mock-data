import ExploreCard from './Card/ExploreCard';

type ExploreItemsProps = {
  id: number;
  name: string;
  username: string;
  price: number;
  imgUser: string;
  nameNft: string;
  assetImg: string;
  tokenCoin: string;
  trendingDay: number;
  category: string;
};

interface IExploreGroup {
  exploreItems: ExploreItemsProps[];
}

const ExploreGroup = ({ exploreItems }: IExploreGroup) => {
  return (
    <div className="relative">
      <div className="my-[34.3px] grid grid-cols-2 md:grid-cols-3 mx-1 gap-y-1.5 md:mx-4 md:gap-y-4 lg:grid-cols-5 lg:mx-6 lg:gap-y-6">
        {exploreItems.map((item) => (
          <ExploreCard
            nameNft={item.nameNft}
            username={item.username}
            name={item.name}
            price={item.price}
            imgUser={item.imgUser}
            assetImg={item.assetImg}
            tokenCoin={item.tokenCoin}
            key={item.id}
          />
        ))}
      </div>
    </div>
  );
};

export default ExploreGroup;
