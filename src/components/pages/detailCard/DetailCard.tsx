"use client";
import { useParams } from "next/navigation";
import ImageCard from "@/components/widgets/detailCards/imageCard/ImageCard";
import DescriptionCard from "@/components/widgets/detailCards/descriptionCard/DescriptionCard";
import RouteCard from "@/components/widgets/detailCards/tourRouteCard/RouteCard";
import BookTour from "@/components/widgets/detailCards/bookTour/BookTour";
import RecomendTour from "@/components/widgets/detailCards/recomendTour/RecomendTour";

import scss from "./detailCard.module.scss";
import { useDetail } from "@/utils/useDetail";

const DetailCard = () => {
  const { id } = useParams();
  const { data: tour, isLoading } = useDetail(id);
  if (isLoading) return <div>Loading...</div>;
  if (!tour) return <div>Not found</div>;
  return (
    <div className={scss.container}>
      <div className={scss.mainContainer}>
        <div className={scss.cards}>
          <ImageCard tour={tour} />
          <DescriptionCard tour={tour} />
          <RouteCard />
        </div>
        <BookTour tour={tour} />
        <RecomendTour />
      </div>
    </div>
  );
};

export default DetailCard;
