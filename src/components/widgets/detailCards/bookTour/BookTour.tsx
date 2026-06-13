import scss from "./BookTour.module.scss";

const BookTour = () => {
  return (
    <div className={scss.container}>
      <div className={scss.mainContainer}>
        <div className={scss.pay}>
          <h1>
            Unforgettable Astana tour! <br /> Grab your spot now for only
            <span>$3,199</span>
            per person.
          </h1>
          <button>BOOK A TOUR</button>
        </div>
      </div>
    </div>
  );
};

export default BookTour;
