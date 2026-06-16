"use client";
import TourCards from "@/components/ui/tourCards/TourCards";
import scss from "./tour.module.scss";
import { sort } from "@/utils/common";
import { useGetCards } from "@/utils/useGetCards";

const Tour = () => {
  const { data: tours } = useGetCards();
  return (
    <div className={scss.container}>
      <div className="container">
        <div className={scss.mainContainer}>
          <div className={scss.top}>
            <h1>MORE TOURS OF KAZAKHSTAN</h1>
            <select>
              <option value="">Sort By....</option>
              {sort.map((item, idx) => (
                <option key={idx} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          <div className={scss.cards}>
            {tours?.map((item) => (
              <TourCards tour={item} key={item._id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tour;
