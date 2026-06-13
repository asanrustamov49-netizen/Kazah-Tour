import RecomendedCard from "@/components/ui/recomendedCard/RecomendedCard";
import scss from "./RecomendTour.module.scss";

const RecomendTour = () => {
  return (
    <div className={scss.container}>
      <div className={scss.mainContainer}>
        <h1>RECOMENDED TOURS</h1>
        <div className={scss.cards}>
          <RecomendedCard />
          <RecomendedCard />
          <RecomendedCard />
        </div>
      </div>
    </div>
  );
};

export default RecomendTour;
