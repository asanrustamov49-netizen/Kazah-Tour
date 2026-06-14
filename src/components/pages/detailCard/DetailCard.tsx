"use client";
import ImageCard from "@/components/widgets/detailCards/imageCard/ImageCard";
import scss from "./detailCard.module.scss";
import DescriptionCard from "@/components/widgets/detailCards/descriptionCard/DescriptionCard";
import RouteCard from "@/components/widgets/detailCards/tourRouteCard/RouteCard";
import BookTour from "@/components/widgets/detailCards/bookTour/BookTour";
import RecomendTour from "@/components/widgets/detailCards/recomendTour/RecomendTour";
import { useGetCards } from "@/utils/useGetCards";

const DetailCard = () => {
  const { data: tours } = useGetCards();
  if (!tours) return <div>Loading...</div>;
  return (
    <div className={scss.container}>
      <div className={scss.mainContainer}>
        <div className={scss.cards}>
          <div className={scss.together}>
            <ImageCard tour={tours?.[0]} />
          </div>
          <div className={scss.description}>
            <DescriptionCard tour={tours?.[0]} />
          </div>
          <div className={scss.together}>
            <RouteCard />
          </div>
        </div>
        <BookTour tour={tours?.[0]}/>
        <RecomendTour tour={tours} />
      </div>
    </div>
  );
};

export default DetailCard;
