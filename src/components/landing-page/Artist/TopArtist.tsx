import ArtistCard from "./Card/ArtistCard";
import BgCard from "./Card/BgCard";
import { artistData } from "../../../data/Artist";
import { Link } from "react-router-dom";

const TopArtist = () => {
  const filterDataFirst = artistData.filter((artist) => artist.id === 1);
  const filterDataSecondary = artistData.filter((artist) => artist.id === 2);
  const filterDataThird = artistData.filter((artist) => artist.id === 3);

  return (
    <div>
      <Link to={``}>
        <div className="flex lg:justify-center">
          <div className="flex lg:flex-row-reverse">
            {filterDataFirst.map((artist) => (
              <div className="relative" key={artist.id}>
                <div className="flex items-end w-[319px] h-[255px] lg:h-[442px] rounded-xl mx-2 mb-2 lg:mx-8">
                  <img
                    src={artist.imgUrl}
                    alt=""
                    className="w-full h-full object-cover rounded-xl"
                  />
                  <BgCard className="bg-gradient-to-b from-[#DE434300] to-[#DE4343]" />
                  <ArtistCard
                    imgUrl={artist.imgUrl}
                    name={artist.name}
                    following={artist.following?.toLocaleString()}
                    rank={artist.rank}
                  />
                </div>
              </div>
            ))}

            {filterDataSecondary.map((artist) => (
              <div className="relative" key={artist.id}>
                <div className="flex items-end w-[319px] h-[255px] lg:h-[442px] rounded-xl lg:mt-24">
                  <img
                    src={artist.imgUrl}
                    alt=""
                    className="w-full h-full object-cover rounded-xl"
                  />
                  <BgCard className="bg-gradient-to-b from-[#25549500] to-[#255495]" />
                  <ArtistCard
                    imgUrl={artist.imgUrl}
                    name={artist.name}
                    following={artist.following?.toLocaleString()}
                    rank={artist.rank}
                  />
                </div>
              </div>
            ))}
          </div>
          {filterDataThird.map((artist) => (
            <div className="relative" key={artist.id}>
              <div className="flex items-end w-[319px] h-[255px] lg:h-[442px] rounded-xl mx-2 mb-2 lg:mx-0 lg:mb-0 lg:mt-24 ">
                <img
                  src={artist.imgUrl}
                  alt=""
                  className="w-full h-full object-cover rounded-xl"
                />
                <BgCard className="bg-gradient-to-b from-[#F59E0B00] to-[#F59E0B]" />
                <ArtistCard
                  imgUrl={artist.imgUrl}
                  name={artist.name}
                  following={artist.following?.toLocaleString()}
                  rank={artist.rank}
                />
              </div>
            </div>
          ))}
        </div>
      </Link>
    </div>
  );
};

export default TopArtist;
