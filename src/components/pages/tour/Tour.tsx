"use client";
import TourCards from "@/components/ui/tourCards/TourCards";
import scss from "./tour.module.scss";
import { sort } from "@/utils/common";
import { useGetCards } from "@/utils/useGetCards";
import { useState } from "react";

const Tour = () => {
  const [sort_by, setSort_by] = useState<string>("");
  const { data: tours } = useGetCards({
    sort_by: sort_by,
  });
  return (
    <div className={scss.container}>
      <div className="container">
        <div className={scss.mainContainer}>
          <div className={scss.top}>
            <h1>MORE TOURS OF KAZAKHSTAN</h1>
            <div className={scss.sort}>
              <h3>Sort By:</h3>
              <select onChange={(e) => setSort_by(e.target.value)}>
                {sort.map((item, idx) => (
                  <option key={idx} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
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
