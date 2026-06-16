"use client";
import Banner from "@/components/widgets/banner/Banner";
import CardList from "@/components/widgets/cardList/CardList";
import ClientReviews from "@/components/widgets/clientReviews/ClientReviews";
import { ITourCard } from "@/types/Types";
import { useAddComment } from "@/utils/useAddComment";
import { useGetCards } from "@/utils/useGetCards";

const Home = () => {
  const { data } = useGetCards();
  const { comments } = useAddComment();
  if (!data) return <div>Loading...</div>;
  if (!comments) return <div>Loading...</div>;
  return (
    <>
      <Banner />
      <CardList title="Luxury Tours" tour={data} />
      <CardList title="Popular Tours" tour={data} />
      <CardList title="Trending Tours" tour={data} />
      <ClientReviews />
      </>)}

export default Home;
