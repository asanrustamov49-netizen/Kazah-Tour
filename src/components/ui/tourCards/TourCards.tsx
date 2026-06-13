import { ITourCard } from "@/types/Types";
import "./tourCards.scss";

interface ITourProps {
  tour: ITourCard;
}

const TourCards = ({ tour }: ITourProps) => {
  return (
    <div className="card">
      <img src={tour.url} alt="" />
      <h2>{tour.name}</h2>
      <p>{tour.shortOverview}</p>
      <h3>${tour.price}, 00</h3>
      <button>VIEW TOUR</button>
    </div>
  );
};

export default TourCards;
