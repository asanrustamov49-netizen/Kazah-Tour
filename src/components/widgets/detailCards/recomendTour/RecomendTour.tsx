import RecomendedCard from "@/components/ui/recomendedCard/RecomendedCard";
import scss from "./RecomendTour.module.scss";
import { useGetCards } from "@/utils/useGetCards";
import { useState } from "react";

const RecomendTour = () => {
  const [sort_by, setSort_by] = useState<string>("");
  const { data: tour } = useGetCards({
    sort_by: sort_by,
  });
  return (
    <div className={scss.container}>
      <div className={scss.mainContainer}>
        <h1>RECOMENDED TOURS</h1>
        <div className={scss.cards}>
          {tour?.map((item) => (
            <RecomendedCard tour={item} key={item._id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecomendTour;
