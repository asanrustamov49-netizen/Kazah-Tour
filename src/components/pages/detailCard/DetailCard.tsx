import ImageCard from "@/components/widgets/detailCards/imageCard/ImageCard";
import scss from "./detailCard.module.scss";
import DescriptionCard from "@/components/widgets/detailCards/descriptionCard/DescriptionCard";
import RouteCard from "@/components/widgets/detailCards/tourRouteCard/RouteCard";
import BookTour from "@/components/widgets/detailCards/bookTour/BookTour";
import RecomendTour from "@/components/widgets/detailCards/recomendTour/RecomendTour";

const DetailCard = () => {
  return (
    <div className={scss.container}>
      <div className={scss.mainContainer}>
        <div className={scss.cards}>
          <div className={scss.together}>
            <ImageCard />
          </div>
          <div className={scss.description}>
            <DescriptionCard />
          </div>
          <div className={scss.together}>
            <RouteCard />
          </div>
        </div>
        <BookTour />
        <RecomendTour />
      </div>
    </div>
  );
};

export default DetailCard;
