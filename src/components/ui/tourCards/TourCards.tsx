import { ITourCard } from "@/types/Types";
import "./tourCards.scss";

interface ITourProps {
  tour: ITourCard;
}

const TourCards = ({ tour }: ITourProps) => {
  return (
    <div className="card">
      <img src={tour.img} alt="" />
      <h2>{tour.name}</h2>
      <p>{tour.shortOverview}</p>
      <h3>${tour.price}</h3>
      <button>VIEW TOUR</button>
    </div>
  );
};

export default TourCards;
