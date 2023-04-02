import TrendingCard from './Card/TrendingCard';

type TrendItemsProps = {
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

interface ITrendGroup {
  trendingItems: TrendItemsProps[];
}

const TrendingGroup = ({ trendingItems }: ITrendGroup) => {
  return (
    <div className="relative">
      <div className="my-[34.3px] md:flex md:mt-12 relative z-20 justify-center w-full">
        {trendingItems.map((item) => (
          <TrendingCard
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

export default TrendingGroup;
