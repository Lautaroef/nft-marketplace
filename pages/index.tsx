import Hero from "../components/home-hero";
import Features from "../components/features";
import LiveAuctions from "../components/live-auctions";
import TopSellers from "../components/top-sellers";
import TodayPicks from "../components/today-picks";
import PopularCollection from "../components/popular-collection";
import CategoriesSlider from "../components/categories-slider";

function Home() {
  return (
    <div className="home_page">
      <Hero />
      <LiveAuctions />
      <TopSellers />
      <TodayPicks />
      <CategoriesSlider />
      <PopularCollection />
      <Features />
    </div>
  );
}

export default Home;
