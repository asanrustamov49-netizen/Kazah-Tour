import TourCards from "@/components/ui/tourCards/TourCards";
import scss from "./tour.module.scss";
import { sort } from "@/utils/common";

const Tour = () => {
  return (
    <div className={scss.container}>
      <div className="container">
        <div className={scss.mainContainer}>
          <div className={scss.top}>
            <h1>MORE TOURS OF KAZAKHSTAN</h1>
            <select>
              <option value="">Sort By....</option>
              {
                sort.map((item, idx) => (
                    <option value={idx}>{item}</option>
                ))
              }
            </select>
          </div>
          <div className={scss.cards}>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tour;
