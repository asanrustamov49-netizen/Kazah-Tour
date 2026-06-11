import BannerSearch from "@/components/ui/bannerSearch/BannerSearch";
import "./banner.scss"
const Banner = () => {
    return (
        <div className="banner">
            <div className="banner-text">
              <h1>
                JOURNEY TO
                <br /> EXTRAORDINARY DESTINATIONS
              </h1>
              <h5>
                Experience Unforgettable Adventures with Luxury and Comfort
              </h5>
            </div>
            <BannerSearch />
          </div>
    );
};

export default Banner;