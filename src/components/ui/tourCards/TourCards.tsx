import { ITourCard } from "@/components/hooks/types";
import "./tourCards.scss";
import Link from "next/link";

interface ITourProps {
  tour: ITourCard;
}

const TourCards = ({ tour }: ITourProps) => {
  return (
    <div className="card">
      <Link href={"/detailCard"}>
        <img src={tour.img} alt="" />
      </Link>
      <h2>{tour.name}</h2>
      <p>{tour.shortOverview}</p>
      <h3>${tour.price}</h3>
      <button>VIEW TOUR</button>
    </div>
  );
};

export default TourCards;
