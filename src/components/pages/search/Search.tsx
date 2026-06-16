// "use client";

// import scss from "./search.module.scss";
// import { useState } from "react";
// import TourCards from "@/components/ui/tourCards/TourCards";
// import { useSearch } from "@/utils/useSearch";
// import { useSearchParams } from "next/navigation";
// import { sort } from "@/utils/common";

// const Search = () => {
//   const searchParams = useSearchParams();
//   const searchValue = searchParams.get("query") || "";

//   const [sort_by, setSort_by] = useState<string>("");

//   const { data } = useSearch(searchValue);
// console.log("searchValue:", searchValue);
//   const sortedData = data
//     ? [...data].sort((a, b) => {
//         if (sort_by === "price") return a.price - b.price;
//         if (sort_by === "rating") return b.rating - a.rating;
//         return 0;
//       })
//     : [];

//   return (
//     <div className={scss.container}>
//       <div className="container">
//         <div className={scss.mainContainer}>
//           <div className={scss.top}>
//             <h1>Search Results: {searchValue}</h1>

//             <div className={scss.sort}>
//               <h3>Sort By:</h3>

//               <select onChange={(e) => setSort_by(e.target.value)}>
//                 {sort.map((item, idx) => (
//                   <option key={idx} value={item}>
//                     {item}
//                   </option>
//                 ))}
//               </select>
//             </div>
//           </div>

//           <div className={scss.cards}>
//             {sortedData?.map((item) => (
//               <TourCards tour={item} key={item._id} />
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Search;
"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { ITourCard, IGetResponse } from "@/types/Types";
import { TourApi } from "@/utils/Api/TourApi";
import TourCards from "@/components/ui/tourCards/TourCards";
import scss from "./search.module.scss";

const Search = () => {
  const searchParams = useSearchParams();
  const q = searchParams.get("q") || "";

  const [query, setQuery] = useState(q);
  const [tours, setTours] = useState<ITourCard[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTours = async () => {
      setLoading(true);
      const res = await TourApi.get<IGetResponse>("/");
      const all = res.data.data;
      const filtered = all.filter((t) =>
        t.name.toLowerCase().includes(query.toLowerCase()),
      );
      setTours(filtered);
      setLoading(false);
    };

    fetchTours();
  }, [query]);

  return (
    <div className={scss.container}>
      <div className="container">
        <div className={scss.mainContainer}>
          <input
            type="text"
            placeholder="Tour Name..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          {loading && <p>Loading...</p>}
          <div className={scss.tourCards}>
            {tours.length > 0
              ? tours.map((el) => <TourCards tour={el} key={el._id} />)
              : !loading && <p>No tours found</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
