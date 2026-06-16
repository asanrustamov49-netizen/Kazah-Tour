import { ITourCard } from "@/types/Types";
import scss from "./ImageCard.module.scss";

interface IImage {
  tour?: ITourCard;
}

const ImageCard = ({tour}: IImage) => {
  return (
    <div className={scss.container}>
      <div className={scss.mainContainer}>
        <img
        src={tour?.url}
          alt=""
        />
        <h1>{tour?.name}</h1>
      </div>
    </div>
  );
};

export default ImageCard;
