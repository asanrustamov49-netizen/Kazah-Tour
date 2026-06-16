"use client";

import { useRouter } from "next/navigation";
import "./bannerSearch.scss";
import { useState } from "react";

const BannerSearch = () => {
  const [searchValue, setSearchValue] = useState("");
  const { push } = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    if (!searchValue.trim()) return;

    push(`/search?query=${searchValue}`);
  };

  return (
    <form className="banner-search" onSubmit={handleSearch}>
      <input
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Tour Name..."
      />

      <button type="submit">Search</button>
    </form>
  );
};

export default BannerSearch;