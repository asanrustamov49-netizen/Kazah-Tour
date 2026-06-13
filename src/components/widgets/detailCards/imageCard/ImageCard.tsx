import scss from "./ImageCard.module.scss";

const ImageCard = () => {
  return (
    <div className={scss.container}>
      <div className={scss.mainContainer}>
        <img
          src="https://media.cntraveller.com/photos/637e00eece1c9bd657a981ea/16:9/w_1280,c_limit/NAU(1280x720).jpg"
          alt=""
        />
        <h1>KAZAKHSTAN ASTANA (1997)</h1>
      </div>
    </div>
  );
};

export default ImageCard;
