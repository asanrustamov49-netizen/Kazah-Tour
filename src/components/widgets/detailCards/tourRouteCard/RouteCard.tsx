import TourRoute from "@/components/ui/tourRoute/TourRoute";
import scss from "./RouteCard.module.scss";

const RouteCard = () => {
  return (
    <div className={scss.container}>
      <div className={scss.mainContainer}>
        <TourRoute />
        <TourRoute />
        <TourRoute />
        <TourRoute />
        <TourRoute />
      </div>
    </div>
  );
};

export default RouteCard;
