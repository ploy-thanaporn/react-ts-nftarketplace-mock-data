import ArtisitSection from "./Artist/ArtistSection";
import Cover from "./Cover";
import CreateSection from "./Create/CreateSection";
import ExploreSection from "./Explore/ExploreSection";
import TrendingSection from "./Trending/TrendingSection";

const Home = () => {
  return (
    <div>
      <Cover />
      <ArtisitSection />
      <TrendingSection />
      <ExploreSection />
      <CreateSection />
    </div>
  );
};

export default Home;
