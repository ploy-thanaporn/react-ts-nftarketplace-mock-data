import ArtisitSection from "./landing-page/Artist/ArtistSection";
import Cover from "./Cover";
import CreateSection from "./landing-page/Create/CreateSection";

import TrendingSection from "./Trending/TrendingSection";
import ExploreSection from "./landing-page/Explore/ExploreSection";

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
