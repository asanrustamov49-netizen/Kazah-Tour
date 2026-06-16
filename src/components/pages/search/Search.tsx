"use client";

import scss from "./search.module.scss";
import { useState } from "react";
import TourCards from "@/components/ui/tourCards/TourCards";
import { useSearch } from "@/utils/useSearch";
import { useSearchParams } from "next/navigation";
import { sort } from "@/utils/common";

const Search = () => {
  const searchParams = useSearchParams();
  const searchValue = searchParams.get("query") || "";

  const [sort_by, setSort_by] = useState<string>("");

  const { data } = useSearch(searchValue);
console.log("searchValue:", searchValue);
  const sortedData = data
    ? [...data].sort((a, b) => {
        if (sort_by === "price") return a.price - b.price;
        if (sort_by === "rating") return b.rating - a.rating;
        return 0;
      })
    : [];

  return (
    <div className={scss.container}>
      <div className="container">
        <div className={scss.mainContainer}>
          <div className={scss.top}>
            <h1>Search Results: {searchValue}</h1>

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
            {sortedData?.map((item) => (
              <TourCards tour={item} key={item._id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
