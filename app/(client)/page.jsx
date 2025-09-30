import FindProduct from "@/components/FindProduct";
import Benefits from "@/components/Home/Benefits";
import Categories from "@/components/Home/Categories";
import Hero from "@/components/Home/Hero";
import HorizontalAdsBanner from "@/components/Home/HorizontalAdsBanner";
import LatestDeal from "@/components/Home/LatestDeal";

import MostItemsSection from "@/components/Home/MostItems";
import NewArrivals from "@/components/Home/NewArrivals.jsx/index.jsx";

export default function Home() {
  return (
    <>
      <Hero />
      <FindProduct />
      <HorizontalAdsBanner />
      <LatestDeal />
      <NewArrivals />
      <MostItemsSection />
      <Categories />
      <Benefits />
    </>
  );
}
