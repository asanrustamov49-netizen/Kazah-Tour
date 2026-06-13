import scss from "./RecomendedCard.module.scss";

const RecomendedCard = () => {
  return (
    <div className={scss.container}>
      <div className={scss.mainContainer}>
        <div className={scss.cards}>
          <div className={scss.card}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS9i70KiAxx45VvgfmsviqwJvPkKBV3Kj_2VL2INe2AECDkSBVZ-BVW10O&s=10"
              alt=""
            />
            <h2>KAZAKHSTAN ASTANA</h2>
            <p>Capital of KZ | Since 1997 | 1,5M peoples</p>
            <span>$3,199</span>
            <button>VIEW TOUR</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecomendedCard;
