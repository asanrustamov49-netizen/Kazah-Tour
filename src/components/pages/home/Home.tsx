"use client";
import scss from './home.module.scss'
import Banner from "@/components/widgets/banner/Banner";
import CardList from "@/components/widgets/cardList/CardList";
import ClientReviews from "@/components/widgets/clientReviews/ClientReviews";
import { useGetCards } from "@/utils/useGetCards";
import { useEffect, useState } from "react";

const Home = () => {
  const [sort_by, setSort_by] = useState<string>("");
  const { data } = useGetCards({
    sort_by: sort_by,
  });
  return (
    <>
      {!data ? (
        <center>
          <img className={scss.loading} src="./loading.png" alt="" />
        </center>
      ) : (
        <>
          <Banner />
          <CardList title="Luxury Tours" tour={data} />
          <CardList title="Popular Tours" tour={data} />
          <CardList title="Trending Tours" tour={data} />
          <ClientReviews />
        </>
      )}
    </>
  );
};

export default Home;
