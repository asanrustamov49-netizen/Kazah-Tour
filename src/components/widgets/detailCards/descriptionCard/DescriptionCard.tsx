import { useGetCards } from "@/utils/useGetCards";
import scss from "./DescriptionCard.module.scss";
import { ITourCard } from "@/types/Types";

interface IDescription{
  tour?: ITourCard;
}

const DescriptionCard = ({tour}: IDescription) => {
  return (
    <div className={scss.container}>
      <div className={scss.mainContainer}>
        <h1>DESCRIPTION</h1>
        <div className={scss.line}></div>
        <p>
          {tour?.overview}
        </p>
      </div>
    </div>
  );
};

export default DescriptionCard;
