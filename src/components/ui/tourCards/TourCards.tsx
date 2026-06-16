import { ITourCard } from "@/types/Types";
import "./tourCards.scss"
import { useRouter } from "next/navigation";


interface ITourProps {
  tour: ITourCard;
}

const TourCards = ({tour}: ITourProps) => {
  const {push} = useRouter()
    return (
        <div className="card">
            <img src={tour.url} alt="" />
            <h2>{tour.name}</h2>
            <p>{tour.shortOverview}</p>
            <h3>${tour.price}</h3>
            <button onClick={() => push(`/detailCard/${tour._id}`)}>VIEW TOUR</button>
        </div>
    );
};

export default TourCards;
