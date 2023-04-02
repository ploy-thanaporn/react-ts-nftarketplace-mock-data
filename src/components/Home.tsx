import ArtisitSection from "./Artist/ArtistSection";
import Cover from "./Cover";
import TrendingSection from "./Trending/TrendingSection";

const Home = () => {
  return (
    <div>
      <Cover />
      <ArtisitSection />
      <TrendingSection />
    </div>
  );
};

export default Home;
