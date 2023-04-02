import ArtisitSection from "./Artist/ArtistSection";
import Cover from "./Cover";
import ExploreSection from "./Explore/ExploreSection";
import TrendingSection from "./Trending/TrendingSection";

const Home = () => {
  return (
    <div>
      <Cover />
      <ArtisitSection />
      <TrendingSection />
      <ExploreSection />
    </div>
  );
};

export default Home;
