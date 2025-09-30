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
            <HeroBanner />
            <HeroBanner />
            <HeroBanner />
          </BannerSlider>
        </section>
      </div>
    </div>
  );
}
