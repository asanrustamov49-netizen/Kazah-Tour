import { useGetCards } from "@/utils/useGetCards";
import scss from "./RecomendedCard.module.scss";
import TourCards from "../tourCards/TourCards";
import { ITourCard } from "@/types/Types";

interface IRecommendProps {
  tour: ITourCard;
}

const RecomendedCard = ({ tour }: IRecommendProps) => {
  return (
    <div className={scss.container}>
      <div className={scss.mainContainer}>
        <div className={scss.cards}>
          <TourCards tour={tour} />
        </div>
      </div>
    </div>
  );
};

export default RecomendedCard;
