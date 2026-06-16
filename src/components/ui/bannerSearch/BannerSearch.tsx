import { useRouter } from "next/navigation";
import "./bannerSearch.scss"
const BannerSearch = () => {
  const {push} = useRouter()
  return (
    <div className="banner-search">
      <input type="text" placeholder="Tour Name..." />
      <button onClick={() => push("/search")}>Search</button>
    </div>
  );
};

export default BannerSearch;
