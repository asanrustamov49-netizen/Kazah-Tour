// "use client";

// import { useRouter } from "next/navigation";
// import "./bannerSearch.scss";
// import { useState } from "react";

// const BannerSearch = () => {
//   const [searchValue, setSearchValue] = useState("");
//   const { push } = useRouter();

//   const handleSearch = (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!searchValue.trim()) return;

//     push(`/search?query=${searchValue}`);
//   };

//   return (
//     <form className="banner-search" onSubmit={handleSearch}>
//       <input
//         value={searchValue}
//         onChange={(e) => setSearchValue(e.target.value)}
//         placeholder="Tour Name..."
//       />

//       <button type="submit">Search</button>
//     </form>
//   );
// };

// export default BannerSearch;
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import "./bannerSearch.scss";

const BannerSearch = () => {
  const { push } = useRouter();
  const [query, setQuery] = useState("");

  return (
    <div className="banner-search">
      <input
        type="text"
        placeholder="Tour Name..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && push(`/search?q=${query}`)}
      />
      <button onClick={() => push(`/search?q=${query}`)}>Search</button>
    </div>
  );
};

export default BannerSearch;
