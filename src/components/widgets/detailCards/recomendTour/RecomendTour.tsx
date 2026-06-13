import RecomendedCard from "@/components/ui/recomendedCard/RecomendedCard";
import scss from "./RecomendTour.module.scss";
import { ITourCard } from "@/types/Types";
import TourCards from "@/components/ui/tourCards/TourCards";

interface IRecommendProps {
  tour: ITourCard[];
}

const RecomendTour = ({ tour = [] }: IRecommendProps) => {
  return (
    <div className={scss.container}>
      <div className={scss.mainContainer}>
        <h1>RECOMENDED TOURS</h1>
        <div className={scss.cards}>
          {tour.slice(0,3).map((item) => (
            <RecomendedCard tour={item} key={item._id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecomendTour;
