"use client"
import Banner from "@/components/widgets/banner/Banner";
import CardList from "@/components/widgets/cardList/CardList";
import ClientReviews from "@/components/widgets/clientReviews/ClientReviews";
import { useAddComment } from "@/utils/useAddComment";

const Home = () => {

  return (
    <>
      <Banner />
      <CardList name="Kazah Tours" />
      <CardList name="Popular Tours" />
      <CardList name="New Arrivals" />
      <ClientReviews/>
    </>
  );
};

export default Home;
