import BannerSlider from "@/components/Layout/Slider";
import Breadcrumbs from "./Breadcrumbs";
import CategoriesDropdown from "./CategoriesDropdown";
import HeroBanner from "./HereBanner";

export default function Hero() {
  return (
    <div className="flex my-8">
      <CategoriesDropdown />
      <div className="flex-8/12">
        <Breadcrumbs />
        <section className="sm:max-w-96 md:max-w-6xl mx-auto p-6 ">
          <BannerSlider>
            <HeroBanner
              key={Math.random()}
              alt={"Latest Items"}
              url={"/assets/dummy/heroBanner.jpg"}
              discount={"28%"}
              navigate={"/products?filter=newArrival"}
            />
            <HeroBanner
              key={Math.random()}
              alt={"Top Purchased"}
              url={"/assets/dummy/specialCollectionBG.jpg"}
              discount={"16%"}
              navigate={"/products?filter=topSell"}
            />
            <HeroBanner
              key={Math.random()}
              alt={"Most Viewed"}
              url={"/assets/dummy/heroBanner2.jpg"}
              discount={"19%"}
              navigate={"/products?filter=mostViewed"}
            />
          </BannerSlider>
        </section>
      </div>
    </div>
  );
}
