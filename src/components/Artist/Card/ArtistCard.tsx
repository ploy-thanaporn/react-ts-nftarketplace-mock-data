const ArtistCard = ({
  imgUrl,
  name,
  following,
  rank,
}: {
  imgUrl: string;
  name: string;
  following?: string;
  rank?: string;
}) => {
  return (
    <div className="flex items-center absolute z-20 mb-4">
      <img
        src={imgUrl}
        alt=""
        className="rounded-full w-[66px] h-[66px] mx-3"
      />
      <div className="flex justify-between text-white w-[215px]">
        <div className="text-left">
          <p className="text-18 font-semibold">{name}</p>
          <span className="text-12">Following {following}</span>
          <p className="text-12 mt-1">Artists</p>
        </div>
        <div className="flex text-33 font-bold mt-8">{rank}</div>
      </div>
    </div>
  );
};

export default ArtistCard;
