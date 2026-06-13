import scss from "./ToureRoute.module.scss";
const TourRoute = () => {
  return (
    <div className={scss.container}>
      <div className={scss.mainContainer}>
        <div className={scss.route}>
          <h3>Baiterek Monument</h3>
          <span>-</span>
          <p>Golden sphere, panoramic views, city symbol</p>
        </div>
      </div>
    </div>
  );
};

export default TourRoute;
